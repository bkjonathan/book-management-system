// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  authorsDataValidator,
  authorsPatchValidator,
  authorsQueryValidator,
  authorsResolver,
  authorsExternalResolver,
  authorsDataResolver,
  authorsPatchResolver,
  authorsQueryResolver
} from './authors.schema'

import type { Application } from '../../declarations'
import { AuthorsService, getOptions } from './authors.class'
import {changeDateToNumber} from "../../hooks/author-hook";

export const authorsPath = 'authors'
export const authorsMethods = ['find', 'get', 'create', 'patch', 'remove'] as const

export * from './authors.class'
export * from './authors.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const authors = (app: Application) => {
  // Register our service on the Feathers application
  app.use(authorsPath, new AuthorsService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: authorsMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(authorsPath).hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(authorsExternalResolver),
        schemaHooks.resolveResult(authorsResolver)
      ]
    },
    before: {
      all: [schemaHooks.validateQuery(authorsQueryValidator), schemaHooks.resolveQuery(authorsQueryResolver)],
      find: [],
      get: [],
      create: [changeDateToNumber,schemaHooks.validateData(authorsDataValidator), schemaHooks.resolveData(authorsDataResolver)],
      patch: [schemaHooks.validateData(authorsPatchValidator), schemaHooks.resolveData(authorsPatchResolver)],
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
    [authorsPath]: AuthorsService
  }
}
