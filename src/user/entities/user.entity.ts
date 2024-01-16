import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
// import { Deal } from '../../deal/entities/deal.entity'; // Assuming you have a Deal entity defined
// import { UserMessage } from './user-message.entity'; // Assuming you have a UserMessage entity defined
// import { UserLikedDeal } from './user-liked-deal.entity'; // Assuming you have a UserLikedDeal entity defined
// import { DealPriceOffer } from '../../deal/entities/deal-price-offer.entity';
@Entity()
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  username: string;

  @Column({ type: 'varchar', length: 255  })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  password: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  phone: string;

  @Column('enum', { enum: ['admin', 'user', 'moderator'], default: ['user'] })
  roles: string;

}
  
  // @OneToMany(() => DealPriceOffer, (priceOffer) => priceOffer.seller)
  // price_offers: DealPriceOffer[];

  // @OneToMany(() => UserMessage, (userMessage) => userMessage.user)
  // messages: UserMessage[];

  // @OneToMany(() => UserLikedDeal, (userLikedDeal) => userLikedDeal.user)
  // liked_deals: UserLikedDeal[];

  // @OneToMany(() => Deal, (deal) => deal.deal_manager)
  // managed_deals: Deal[];
//}
