// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import { ObjectIdSchema } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'

// Main data model schema
export const customersSchema = Type.Object(
  {
    _id: ObjectIdSchema(),
    name: Type.String(),
    email: Type.String(),
    phone: Type.String(),
    address: Type.String(),
  },
  { $id: 'Customers', additionalProperties: false }
)
export type Customers = Static<typeof customersSchema>
export const customersValidator = getValidator(customersSchema, dataValidator)
export const customersResolver = resolve<Customers, HookContext>({})

export const customersExternalResolver = resolve<Customers, HookContext>({})

// Schema for creating new entries
export const customersDataSchema = Type.Pick(customersSchema, ['name','email','phone','address'], {
  $id: 'CustomersData'
})
export type CustomersData = Static<typeof customersDataSchema>
export const customersDataValidator = getValidator(customersDataSchema, dataValidator)
export const customersDataResolver = resolve<Customers, HookContext>({})

// Schema for updating existing entries
export const customersPatchSchema = Type.Partial(customersSchema, {
  $id: 'CustomersPatch'
})
export type CustomersPatch = Static<typeof customersPatchSchema>
export const customersPatchValidator = getValidator(customersPatchSchema, dataValidator)
export const customersPatchResolver = resolve<Customers, HookContext>({})

// Schema for allowed query properties
export const customersQueryProperties = Type.Pick(customersSchema, ['_id', 'name','email','phone','address'])
export const customersQuerySchema = Type.Intersect(
  [
    querySyntax(customersQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type CustomersQuery = Static<typeof customersQuerySchema>
export const customersQueryValidator = getValidator(customersQuerySchema, queryValidator)
export const customersQueryResolver = resolve<CustomersQuery, HookContext>({})
