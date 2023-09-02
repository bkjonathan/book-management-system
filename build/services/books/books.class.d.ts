import type { Params } from '@feathersjs/feathers';
import { MongoDBService } from '@feathersjs/mongodb';
import type { MongoDBAdapterParams, MongoDBAdapterOptions } from '@feathersjs/mongodb';
import type { Application } from '../../declarations';
import type { Books, BooksData, BooksPatch, BooksQuery } from './books.schema';
export type { Books, BooksData, BooksPatch, BooksQuery };
export interface BooksParams extends MongoDBAdapterParams<BooksQuery> {
}
export declare class BooksService<ServiceParams extends Params = BooksParams> extends MongoDBService<Books, BooksData, BooksParams, BooksPatch> {
}
export declare const getOptions: (app: Application) => MongoDBAdapterOptions;
