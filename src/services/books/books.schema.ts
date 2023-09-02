// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import { ObjectIdSchema } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'

// Main data model schema
export const booksSchema = Type.Object(
  {
    _id: ObjectIdSchema(),
    authors: Type.Array(ObjectIdSchema()),
    categories: ObjectIdSchema(),
    publisher: ObjectIdSchema(),
    title: Type.String(),
    description: Type.Optional(Type.String()),
    isbn: Type.Optional(Type.Number()),
    publicationDate: Type.Union([Type.Number(), Type.String()]),
    price: Type.Number(),
    createdBy: Type.Optional(ObjectIdSchema()),
    createdAt: Type.Number(),
    updatedAt: Type.Number()
  },
  { $id: 'Books', additionalProperties: false }
)
export type Books = Static<typeof booksSchema>
export const booksValidator = getValidator(booksSchema, dataValidator)
export const booksResolver = resolve<Books, HookContext>({})

export const booksExternalResolver = resolve<Books, HookContext>({
  publicationDate: async (value) => {
    return value ? new Date(value).toISOString() : value
  }
})

// Schema for creating new entries
export const booksDataSchema = Type.Pick(
  booksSchema,
  ['authors', 'categories', 'publisher', 'title', 'description', 'isbn', 'publicationDate', 'price'],
  {
    $id: 'BooksData'
  }
)
export type BooksData = Static<typeof booksDataSchema>
export const booksDataValidator = getValidator(booksDataSchema, dataValidator)
export const booksDataResolver = resolve<Books, HookContext>({
  createdBy: async (_value, _profile, context) => {
    // Associate the record with the id of the authenticated user
    return context.params.user._id
  },
  createdAt: async () => {
    return Date.now()
  }
})

// Schema for updating existing entries
export const booksPatchSchema = Type.Partial(booksSchema, {
  $id: 'BooksPatch'
})
export type BooksPatch = Static<typeof booksPatchSchema>
export const booksPatchValidator = getValidator(booksPatchSchema, dataValidator)
export const booksPatchResolver = resolve<Books, HookContext>({
  updatedAt: async () => {
    return Date.now()
  }
})

// Schema for allowed query properties
export const booksQueryProperties = Type.Pick(booksSchema, [
  '_id',
  'authors',
  'categories',
  'publisher',
  'title',
  'description',
  'isbn',
  'publicationDate',
  'price'
])
export const booksQuerySchema = Type.Intersect(
  [
    querySyntax(booksQueryProperties,{
      title: { $regex: Type.String(), $options: Type.String() }
    }),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type BooksQuery = Static<typeof booksQuerySchema>
export const booksQueryValidator = getValidator(booksQuerySchema, queryValidator)
export const booksQueryResolver = resolve<BooksQuery, HookContext>({})
