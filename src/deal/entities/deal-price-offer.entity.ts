// import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
// import { Deal } from './deal.entity'; // Adjust the import path
// import { User } from '../../user/entities/user.entity'; // Adjust the import path

// @Entity()
// export class DealPriceOffer {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @ManyToOne(() => Deal, (deal) => deal.price_offers)
//   deal: Deal;

//   @ManyToOne(() => User, (user) => user.price_offers)
//   seller: User;

//   @Column({ type: 'numeric', precision: 10, scale: 2 })
//   price: number;
// }
