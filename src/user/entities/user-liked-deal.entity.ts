// import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
// import { User } from './user.entity'; // Assuming you have a User entity defined
// import { Deal } from '../../deal/entities/deal.entity'; // Assuming you have a Deal entity defined

// @Entity()
// export class UserLikedDeal {
//   @PrimaryGeneratedColumn('uuid')
//   id: string;

//   @ManyToOne(() => User, (user) => user.liked_deals)
//   user: User;

//   @ManyToOne(() => Deal, (deal) => deal.likedDeals)
//   deal: Deal;
// }
