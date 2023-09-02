import type { Params } from '@feathersjs/feathers';
import { MongoDBService } from '@feathersjs/mongodb';
import type { MongoDBAdapterParams, MongoDBAdapterOptions } from '@feathersjs/mongodb';
import type { Application } from '../../declarations';
import type { Categories, CategoriesData, CategoriesPatch, CategoriesQuery } from './categories.schema';
export type { Categories, CategoriesData, CategoriesPatch, CategoriesQuery };
export interface CategoriesParams extends MongoDBAdapterParams<CategoriesQuery> {
}
export declare class CategoriesService<ServiceParams extends Params = CategoriesParams> extends MongoDBService<Categories, CategoriesData, CategoriesParams, CategoriesPatch> {
}
export declare const getOptions: (app: Application) => MongoDBAdapterOptions;
