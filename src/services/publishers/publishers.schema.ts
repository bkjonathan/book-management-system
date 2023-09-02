// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import { ObjectIdSchema } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'

// Main data model schema
export const publishersSchema = Type.Object(
  {
    _id: ObjectIdSchema(),
    name: Type.String(),
    email: Type.String(),
    phone: Type.String(),
    address: Type.String(),
  },
  { $id: 'Publishers', additionalProperties: false }
)
export type Publishers = Static<typeof publishersSchema>
export const publishersValidator = getValidator(publishersSchema, dataValidator)
export const publishersResolver = resolve<Publishers, HookContext>({})

export const publishersExternalResolver = resolve<Publishers, HookContext>({})

// Schema for creating new entries
export const publishersDataSchema = Type.Pick(publishersSchema, ['name','email','phone','address'], {
  $id: 'PublishersData'
})
export type PublishersData = Static<typeof publishersDataSchema>
export const publishersDataValidator = getValidator(publishersDataSchema, dataValidator)
export const publishersDataResolver = resolve<Publishers, HookContext>({})

// Schema for updating existing entries
export const publishersPatchSchema = Type.Partial(publishersSchema, {
  $id: 'PublishersPatch'
})
export type PublishersPatch = Static<typeof publishersPatchSchema>
export const publishersPatchValidator = getValidator(publishersPatchSchema, dataValidator)
export const publishersPatchResolver = resolve<Publishers, HookContext>({})

// Schema for allowed query properties
export const publishersQueryProperties = Type.Pick(publishersSchema, ['_id', 'name','email','phone','address'])
export const publishersQuerySchema = Type.Intersect(
  [
    querySyntax(publishersQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type PublishersQuery = Static<typeof publishersQuerySchema>
export const publishersQueryValidator = getValidator(publishersQuerySchema, queryValidator)
export const publishersQueryResolver = resolve<PublishersQuery, HookContext>({})
