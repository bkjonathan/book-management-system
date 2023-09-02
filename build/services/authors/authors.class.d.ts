import type { Params } from '@feathersjs/feathers';
import { MongoDBService } from '@feathersjs/mongodb';
import type { MongoDBAdapterParams, MongoDBAdapterOptions } from '@feathersjs/mongodb';
import type { Application } from '../../declarations';
import type { Authors, AuthorsData, AuthorsPatch, AuthorsQuery } from './authors.schema';
export type { Authors, AuthorsData, AuthorsPatch, AuthorsQuery };
export interface AuthorsParams extends MongoDBAdapterParams<AuthorsQuery> {
}
export declare class AuthorsService<ServiceParams extends Params = AuthorsParams> extends MongoDBService<Authors, AuthorsData, AuthorsParams, AuthorsPatch> {
}
export declare const getOptions: (app: Application) => MongoDBAdapterOptions;
