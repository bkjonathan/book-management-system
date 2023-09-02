import type { Params } from '@feathersjs/feathers';
import { MongoDBService } from '@feathersjs/mongodb';
import type { MongoDBAdapterParams, MongoDBAdapterOptions } from '@feathersjs/mongodb';
import type { Application } from '../../declarations';
import type { Sells, SellsData, SellsPatch, SellsQuery } from './sells.schema';
export type { Sells, SellsData, SellsPatch, SellsQuery };
export interface SellsParams extends MongoDBAdapterParams<SellsQuery> {
}
export declare class SellsService<ServiceParams extends Params = SellsParams> extends MongoDBService<Sells, SellsData, SellsParams, SellsPatch> {
}
export declare const getOptions: (app: Application) => MongoDBAdapterOptions;
