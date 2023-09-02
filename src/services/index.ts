import { books } from './books/books'
import { publishers } from './publishers/publishers'
import { customers } from './customers/customers'
import { authors } from './authors/authors'
import { categories } from './categories/categories'
import { user } from './users/users'
// For more information about this file see https://dove.feathersjs.com/guides/cli/application.html#configure-functions
import type { Application } from '../declarations'

export const services = (app: Application) => {
  app.configure(books)
  app.configure(publishers)
  app.configure(customers)
  app.configure(authors)
  app.configure(categories)
  app.configure(user)
  // All services will be registered here
}
