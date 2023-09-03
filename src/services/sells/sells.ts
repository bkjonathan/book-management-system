// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  sellsDataValidator,
  sellsPatchValidator,
  sellsQueryValidator,
  sellsResolver,
  sellsExternalResolver,
  sellsDataResolver,
  sellsPatchResolver,
  sellsQueryResolver
} from './sells.schema'

import type { Application } from '../../declarations'
import { SellsService, getOptions } from './sells.class'
import {calculateSell, changeDateToNumber, populateCreatedBy, populateCustomers} from '../../hooks/UtilitesHook'

export const sellsPath = 'sells'
export const sellsMethods = ['find', 'get', 'create', 'patch', 'remove'] as const

export * from './sells.class'
export * from './sells.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const sells = (app: Application) => {
  // Register our service on the Feathers application
  app.use(sellsPath, new SellsService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: sellsMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(sellsPath).hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(sellsExternalResolver),
        schemaHooks.resolveResult(sellsResolver)
      ]
    },
    before: {
      all: [
        changeDateToNumber('date'),
        populateCustomers,
        populateCreatedBy,
        schemaHooks.validateQuery(sellsQueryValidator),
        schemaHooks.resolveQuery(sellsQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        calculateSell,
        schemaHooks.validateData(sellsDataValidator),
        schemaHooks.resolveData(sellsDataResolver)
      ],
      patch: [schemaHooks.validateData(sellsPatchValidator), schemaHooks.resolveData(sellsPatchResolver)],
      remove: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    [sellsPath]: SellsService
  }
}
