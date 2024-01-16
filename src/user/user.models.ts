import { ObjectType, Field } from '@nestjs/graphql';
// import { Deal } from 'src/deal/deal.model';

@ObjectType()
export class User {

  @Field()
  id: string;

  @Field()
  username: string;  

  @Field()
  email: string;

  @Field()
  password: string;

  @Field({nullable: true})
  phone: string;
  
  @Field()
  roles: string;
}
//   @Field(type => [String])
//   roles: string[];

//   @Field(type => [UserMessage])
//   messages: UserMessage[];

//   @Field(type => [UserLikedDeal])
//   likedDeals: UserLikedDeal[];

//}

// @ObjectType()
// class UserMessage {

//   @Field(type => ID)
//   id: number;

//   @Field()
//   text: string;

//   @Field(type => User)
//   user: User;

// }

// @ObjectType()
// class UserLikedDeal {

//   @Field(type => ID) 
//   id: number;

//   @Field(type => User)
//   user: User;

//   @Field(type => Deal)
//   deal: Deal;

// }