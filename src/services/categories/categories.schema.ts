// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import { ObjectIdSchema } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'

// Main data model schema
export const categoriesSchema = Type.Object(
  {
    _id: ObjectIdSchema(),
    name: Type.String(),
    description: Type.String(),
  },
  { $id: 'Categories', additionalProperties: false }
)
export type Categories = Static<typeof categoriesSchema>
export const categoriesValidator = getValidator(categoriesSchema, dataValidator)
export const categoriesResolver = resolve<Categories, HookContext>({})

export const categoriesExternalResolver = resolve<Categories, HookContext>({})

// Schema for creating new entries
export const categoriesDataSchema = Type.Pick(categoriesSchema, ['name','description'], {
  $id: 'CategoriesData'
})
export type CategoriesData = Static<typeof categoriesDataSchema>
export const categoriesDataValidator = getValidator(categoriesDataSchema, dataValidator)
export const categoriesDataResolver = resolve<Categories, HookContext>({})

// Schema for updating existing entries
export const categoriesPatchSchema = Type.Partial(categoriesSchema, {
  $id: 'CategoriesPatch'
})
export type CategoriesPatch = Static<typeof categoriesPatchSchema>
export const categoriesPatchValidator = getValidator(categoriesPatchSchema, dataValidator)
export const categoriesPatchResolver = resolve<Categories, HookContext>({})

// Schema for allowed query properties
export const categoriesQueryProperties = Type.Pick(categoriesSchema, ['_id', 'name','description'])
export const categoriesQuerySchema = Type.Intersect(
  [
    querySyntax(categoriesQueryProperties,{
      name:{$regex:Type.String(),$options:Type.String()}
    }),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type CategoriesQuery = Static<typeof categoriesQuerySchema>
export const categoriesQueryValidator = getValidator(categoriesQuerySchema, queryValidator)
export const categoriesQueryResolver = resolve<CategoriesQuery, HookContext>({})
