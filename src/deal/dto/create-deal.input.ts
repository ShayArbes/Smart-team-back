// import { InputType, Field, Int } from '@nestjs/graphql';
// import { Deal } from '';



// @InputType()
// export class CreateDealInput {

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

// @InputType()
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