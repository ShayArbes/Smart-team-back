import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { Users } from './entities/user.entity';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
    @Inject(CACHE_MANAGER) private cacheManger: Cache
  ) {}

  async create(createUserInput: CreateUserInput): Promise<Users> {
    const user = this.userRepository.create(createUserInput);
    await this.cacheManger.reset();
    return this.userRepository.save(user);
  }

  async findAll(): Promise<Users[]> {
    console.log("from db 😒");
    
    const r = await this.userRepository.find();
    
    return r
  }

  async findOne(id: string): Promise<Users> {

    let r = await this.userRepository.findOne({ where: { id } });
    console.log(r);
    return r
  }
  async findOneByEmail(email: string): Promise<Users> {
    return this.userRepository.findOne({ where: { email } });
  }

  async update(id: string, updateUserInput: UpdateUserInput): Promise<Users> {
    await this.userRepository.update(id, updateUserInput);
    await this.cacheManger.reset();
    return this.findOne(id);
  }

  async remove(id: string): Promise<Users> {
    const user = await this.findOne(id);
    if (user) {
      await this.userRepository.delete(id);
    }
    await this.cacheManger.reset();
    return user;
  }
}
