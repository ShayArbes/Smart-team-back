// import {
//   Entity,
//   PrimaryGeneratedColumn,
//   Column,
//   ManyToOne,
//   OneToMany,
// } from 'typeorm';
// import { User } from '../../user/entities/user.entity';
// import { DealPicture } from './deal-picture.entity';
// import { DealPriceOffer } from './deal-price-offer.entity';
// import { DealGroup } from './deal-group.entity';
// import { DealAmount } from './deal-amount.entity';
// import { UserLikedDeal } from '../../user/entities/user-liked-deal.entity';

// @Entity()
// export class Deal {
//   @PrimaryGeneratedColumn('uuid')
//   id: string;

//   @Column({ type: 'varchar', length: 255 })
//   product_name: string;

//   @ManyToOne(() => User, { cascade: true })
//   deal_manager: User;

//   @Column({ type: 'text', nullable: true })
//   description: string;

//   @Column({ type: 'jsonb', nullable: true })
//   dimensions: object;

//   @Column({ type: 'varchar', length: 255, nullable: true })
//   interior_material: string;

//   @Column({ type: 'varchar', length: 255, nullable: true })
//   exterior_material: string;

//   @Column({ type: 'varchar', length: 255, nullable: true })
//   location: string;

//   @Column({ type: 'timestamp', nullable: true })
//   end_date: Date;

//   @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
//   created_date: Date;

//   @Column('enum', { array: true, enum: ['active', 'expired', 'pending', 'completed'], default: ['pending'] })
//   status:string[];

//   @Column({ type: 'int' })
//   target: number;

//   // Relationships
//   @OneToMany(() => DealPicture, (dealPicture) => dealPicture.deal)
//   pictures: DealPicture[];

//   @OneToMany(() => DealPriceOffer, (priceOffer) => priceOffer.deal)
//   price_offers: DealPriceOffer[];

//   @OneToMany(() => DealGroup, (dealGroup) => dealGroup.deal)
//   groups: DealGroup[];

//   @OneToMany(() => DealAmount, (dealAmount) => dealAmount.deal)
//   amounts: DealAmount[];

//   @OneToMany(() => UserLikedDeal, (userLikedDeal) => userLikedDeal.deal)
//   likedDeals: UserLikedDeal[];
// }
