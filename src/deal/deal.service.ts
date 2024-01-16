// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { Deal } from './entities/deal.entity';
// import { CreateDealInput } from './dto/create-deal.input';

// @Injectable()
// export class DealsService {

//   constructor(
//     @InjectRepository(Deal)
//     private dealsRepository: Repository<Deal>,
//   ) {}

//   async getAllDeals(): Promise<Deal[]> {
//     return this.dealsRepository.find();
//   }

//   async getDealById(id: string): Promise<Deal> {
//     return this.dealsRepository.findOneBy({id}); 
//   }

//   async createDeal(input: CreateDealInput): Promise<Deal> {
//     const deal = this.dealsRepository.create(input);
//     return this.dealsRepository.save(deal);
//   }

//   async updateDeal(id: string, input: CreateDealInput): Promise<Deal> {
//     const deal = await this.getDealById(id);
//     Object.assign(deal, input);
//     return this.dealsRepository.save(deal);
//   }

//   async deleteDeal(id: string): Promise<Deal> {
//     const deal = await this.getDealById(id);
//     return this.dealsRepository.remove(deal);
//   }

// }