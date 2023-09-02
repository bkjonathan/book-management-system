import type { Params } from '@feathersjs/feathers';
import { MongoDBService } from '@feathersjs/mongodb';
import type { MongoDBAdapterParams, MongoDBAdapterOptions } from '@feathersjs/mongodb';
import type { Application } from '../../declarations';
import type { Customers, CustomersData, CustomersPatch, CustomersQuery } from './customers.schema';
export type { Customers, CustomersData, CustomersPatch, CustomersQuery };
export interface CustomersParams extends MongoDBAdapterParams<CustomersQuery> {
}
export declare class CustomersService<ServiceParams extends Params = CustomersParams> extends MongoDBService<Customers, CustomersData, CustomersParams, CustomersPatch> {
}
export declare const getOptions: (app: Application) => MongoDBAdapterOptions;
