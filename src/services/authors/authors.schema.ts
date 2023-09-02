// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import { ObjectIdSchema } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'

// Main data model schema
export const authorsSchema = Type.Object(
  {
    _id: ObjectIdSchema(),
    name: Type.String(),
    biography: Type.String(),
    dob: Type.Number(),
    nationality: Type.String(),
    createdBy: Type.Optional(ObjectIdSchema()),
    createdAt: Type.Number(),
    updatedAt: Type.Number()
  },
  { $id: 'Authors', additionalProperties: false }
)
export type Authors = Static<typeof authorsSchema>
export const authorsValidator = getValidator(authorsSchema, dataValidator)
export const authorsResolver = resolve<Authors, HookContext>({})

export const authorsExternalResolver = resolve<Authors, HookContext>({})

// Schema for creating new entries
export const authorsDataSchema = Type.Pick(authorsSchema, ['name', 'biography', 'dob','nationality'], {
  $id: 'AuthorsData'
})
export type AuthorsData = Static<typeof authorsDataSchema>
export const authorsDataValidator = getValidator(authorsDataSchema, dataValidator)
export const authorsDataResolver = resolve<Authors, HookContext>({
  dob: async (_value, _profile) => {
    // Associate the record with the id of the authenticated user
    if (_value){
      return new Date(_value).valueOf()
    }
  },
  createdBy: async (_value, _profile, context) => {
    // Associate the record with the id of the authenticated user
    return context.params.user._id
  },
  createdAt: async () => {
    return Date.now()
  }
})

// Schema for updating existing entries
export const authorsPatchSchema = Type.Partial(authorsSchema, {
  $id: 'AuthorsPatch'
})
export type AuthorsPatch = Static<typeof authorsPatchSchema>
export const authorsPatchValidator = getValidator(authorsPatchSchema, dataValidator)
export const authorsPatchResolver = resolve<Authors, HookContext>({
  updatedAt: async () => {
    return Date.now()
  }
})

// Schema for allowed query properties
export const authorsQueryProperties = Type.Pick(authorsSchema, ['_id', 'name', 'biography', 'dob','nationality'])
export const authorsQuerySchema = Type.Intersect(
  [
    querySyntax(authorsQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type AuthorsQuery = Static<typeof authorsQuerySchema>
export const authorsQueryValidator = getValidator(authorsQuerySchema, queryValidator)
export const authorsQueryResolver = resolve<AuthorsQuery, HookContext>({})
