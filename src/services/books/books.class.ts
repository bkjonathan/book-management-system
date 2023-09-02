// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { MongoDBService } from '@feathersjs/mongodb'
import type { MongoDBAdapterParams, MongoDBAdapterOptions } from '@feathersjs/mongodb'

import type { Application } from '../../declarations'
import type { Books, BooksData, BooksPatch, BooksQuery } from './books.schema'

export type { Books, BooksData, BooksPatch, BooksQuery }

export interface BooksParams extends MongoDBAdapterParams<BooksQuery> {}

// By default calls the standard MongoDB adapter service methods but can be customized with your own functionality.
export class BooksService<ServiceParams extends Params = BooksParams> extends MongoDBService<
  Books,
  BooksData,
  BooksParams,
  BooksPatch
> {}

export const getOptions = (app: Application): MongoDBAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('mongodbClient').then((db) => db.collection('books'))
  }
}
