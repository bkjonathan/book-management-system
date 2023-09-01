// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { MongoDBService } from '@feathersjs/mongodb'
import type { MongoDBAdapterParams, MongoDBAdapterOptions } from '@feathersjs/mongodb'

import type { Application } from '../../declarations'
import type { Authors, AuthorsData, AuthorsPatch, AuthorsQuery } from './authors.schema'

export type { Authors, AuthorsData, AuthorsPatch, AuthorsQuery }

export interface AuthorsParams extends MongoDBAdapterParams<AuthorsQuery> {}

// By default calls the standard MongoDB adapter service methods but can be customized with your own functionality.
export class AuthorsService<ServiceParams extends Params = AuthorsParams> extends MongoDBService<
  Authors,
  AuthorsData,
  AuthorsParams,
  AuthorsPatch
> {}

export const getOptions = (app: Application): MongoDBAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('mongodbClient').then((db) => db.collection('authors'))
  }
}
