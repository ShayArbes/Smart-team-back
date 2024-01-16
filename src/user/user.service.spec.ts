import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from './user.service';
import { Users } from './entities/user.entity';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

describe('UserService', () => {
  let service: UserService;
  let repo: Repository<Users>;
  let userMoke: Users;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(Users),
          useClass: Repository,
        },
        {
          provide: CACHE_MANAGER,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    repo = module.get<Repository<Users>>(getRepositoryToken(Users));

    userMoke = new Users();

    (userMoke.id = 'd8d523ca-e664-4b15-b4f0-f3817b045335'),
      (userMoke.username = 'shay'),
      (userMoke.email = 'shay@gmail.com'),
      (userMoke.password = 'asdA1!AS243'),
      (userMoke.phone = '05559930199'),
      (userMoke.roles = 'user');

    repo.find = jest.fn().mockResolvedValue([userMoke]);
  });

  it('should return an array of users', async () => {
    const users = await service.findAll();

    expect(users).toEqual([userMoke]);
    expect(Array.isArray(users)).toBe(true);
    expect(users[0]).toBeInstanceOf(Users);
  });
});
