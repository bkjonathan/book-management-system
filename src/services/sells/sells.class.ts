// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { MongoDBService } from '@feathersjs/mongodb'
import type { MongoDBAdapterParams, MongoDBAdapterOptions } from '@feathersjs/mongodb'

import type { Application } from '../../declarations'
import type { Sells, SellsData, SellsPatch, SellsQuery } from './sells.schema'

export type { Sells, SellsData, SellsPatch, SellsQuery }

export interface SellsParams extends MongoDBAdapterParams<SellsQuery> {}

// By default calls the standard MongoDB adapter service methods but can be customized with your own functionality.
export class SellsService<ServiceParams extends Params = SellsParams> extends MongoDBService<
  Sells,
  SellsData,
  SellsParams,
  SellsPatch
> {}

export const getOptions = (app: Application): MongoDBAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('mongodbClient').then((db) => db.collection('sells'))
  }
}
