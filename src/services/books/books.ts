// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  booksDataValidator,
  booksPatchValidator,
  booksQueryValidator,
  booksResolver,
  booksExternalResolver,
  booksDataResolver,
  booksPatchResolver,
  booksQueryResolver
} from './books.schema'

import type { Application } from '../../declarations'
import { BooksService, getOptions } from './books.class'
import {
  changeAuthorToId, changeCategoryToId,
  changeDateToNumber,
  populateAuthors,
  populateCategories,
  populatePublishers
} from '../../hooks/UtilitesHook'

export const booksPath = 'books'
export const booksMethods = ['find', 'get', 'create', 'patch', 'remove'] as const

export * from './books.class'
export * from './books.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const books = (app: Application) => {
  // Register our service on the Feathers application
  app.use(booksPath, new BooksService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: booksMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(booksPath).hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(booksExternalResolver),
        schemaHooks.resolveResult(booksResolver)
      ]
    },
    before: {
      all: [
        populateAuthors,
        populateCategories,
        populatePublishers,
        changeAuthorToId,
        changeCategoryToId,
        schemaHooks.validateQuery(booksQueryValidator),
        schemaHooks.resolveQuery(booksQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        changeDateToNumber('publicationDate'),
        schemaHooks.validateData(booksDataValidator),
        schemaHooks.resolveData(booksDataResolver)
      ],
      patch: [schemaHooks.validateData(booksPatchValidator), schemaHooks.resolveData(booksPatchResolver)],
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
    [booksPath]: BooksService
  }
}
