// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  publishersDataValidator,
  publishersPatchValidator,
  publishersQueryValidator,
  publishersResolver,
  publishersExternalResolver,
  publishersDataResolver,
  publishersPatchResolver,
  publishersQueryResolver
} from './publishers.schema'

import type { Application } from '../../declarations'
import { PublishersService, getOptions } from './publishers.class'

export const publishersPath = 'publishers'
export const publishersMethods = ['find', 'get', 'create', 'patch', 'remove'] as const

export * from './publishers.class'
export * from './publishers.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const publishers = (app: Application) => {
  // Register our service on the Feathers application
  app.use(publishersPath, new PublishersService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: publishersMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(publishersPath).hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(publishersExternalResolver),
        schemaHooks.resolveResult(publishersResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(publishersQueryValidator),
        schemaHooks.resolveQuery(publishersQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(publishersDataValidator),
        schemaHooks.resolveData(publishersDataResolver)
      ],
      patch: [
        schemaHooks.validateData(publishersPatchValidator),
        schemaHooks.resolveData(publishersPatchResolver)
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
    [publishersPath]: PublishersService
  }
}
