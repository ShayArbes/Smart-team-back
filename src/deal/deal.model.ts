// import { ObjectType, Field, Int } from '@nestjs/graphql';

// @ObjectType()
// export class Deal {

//   @Field(type => String)
//   id: string;

//   @Field()
//   name: string;

//   @Field()
//   description: string;

//   @Field(type => Int)
//   value: number;

//   @Field()
//   clientId: string;

//   @Field(type => [DealItem])
//   items: DealItem[];

// }

// @ObjectType()
// export class DealItem {

//   @Field(type => String)
//   id: string;

//   @Field()
//   name: string;

//   @Field(type => Int)
//   quantity: number;

//   @Field(type => Deal)
//   deal: Deal;

// }