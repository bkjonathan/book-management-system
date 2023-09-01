// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  categoriesDataValidator,
  categoriesPatchValidator,
  categoriesQueryValidator,
  categoriesResolver,
  categoriesExternalResolver,
  categoriesDataResolver,
  categoriesPatchResolver,
  categoriesQueryResolver
} from './categories.schema'

import type { Application } from '../../declarations'
import { CategoriesService, getOptions } from './categories.class'

export const categoriesPath = 'categories'
export const categoriesMethods = ['find', 'get', 'create', 'patch', 'remove'] as const

export * from './categories.class'
export * from './categories.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const categories = (app: Application) => {
  // Register our service on the Feathers application
  app.use(categoriesPath, new CategoriesService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: categoriesMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(categoriesPath).hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(categoriesExternalResolver),
        schemaHooks.resolveResult(categoriesResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(categoriesQueryValidator),
        schemaHooks.resolveQuery(categoriesQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(categoriesDataValidator),
        schemaHooks.resolveData(categoriesDataResolver)
      ],
      patch: [
        schemaHooks.validateData(categoriesPatchValidator),
        schemaHooks.resolveData(categoriesPatchResolver)
      ],
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
    [categoriesPath]: CategoriesService
  }
}
