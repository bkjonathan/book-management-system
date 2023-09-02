import type { Params } from '@feathersjs/feathers';
import { MongoDBService } from '@feathersjs/mongodb';
import type { MongoDBAdapterParams, MongoDBAdapterOptions } from '@feathersjs/mongodb';
import type { Application } from '../../declarations';
import type { Publishers, PublishersData, PublishersPatch, PublishersQuery } from './publishers.schema';
export type { Publishers, PublishersData, PublishersPatch, PublishersQuery };
export interface PublishersParams extends MongoDBAdapterParams<PublishersQuery> {
}
export declare class PublishersService<ServiceParams extends Params = PublishersParams> extends MongoDBService<Publishers, PublishersData, PublishersParams, PublishersPatch> {
}
export declare const getOptions: (app: Application) => MongoDBAdapterOptions;
