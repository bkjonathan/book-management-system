// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import {Type, getValidator, querySyntax} from '@feathersjs/typebox'
import { ObjectIdSchema } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'


// Main data model schema
export const sellsSchema = Type.Object(
  {
    _id: ObjectIdSchema(),
    date:Type.Number(),
    sellId: Type.String(),
    customer: ObjectIdSchema(),
    netTotal:Type.Number(),
    total:Type.Number(),
    totalPaid:Type.Number(),
    totalReturn:Type.Number(),
    totalItems:Type.Number(),
    discount: Type.Number(),
    discountTotal: Type.Number(),
    detail : Type.Array(Type.Object({
      book:ObjectIdSchema(),
      qty:Type.Number(),
      price:Type.Number()
    })),
    createdBy: Type.Optional(ObjectIdSchema()),
    createdAt: Type.Number(),
    updatedAt: Type.Number()
  },
  { $id: 'Sells', additionalProperties: false }
)
export type Sells = Static<typeof sellsSchema>
export const sellsValidator = getValidator(sellsSchema, dataValidator)
export const sellsResolver = resolve<Sells, HookContext>({})

export const sellsExternalResolver = resolve<Sells, HookContext>({})

// Schema for creating new entries
export const sellsDataSchema = Type.Pick(sellsSchema, ['date','customer','netTotal','total','totalReturn','totalPaid','discount','detail'], {
  $id: 'SellsData'
})
export type SellsData = Static<typeof sellsDataSchema>
export const sellsDataValidator = getValidator(sellsDataSchema, dataValidator)
export const sellsDataResolver = resolve<Sells, HookContext>({
  sellId: async (value, obj, context) => {
    const prefix = 'TS-'
    const records = await context.app.service('sells').find({
      query: {
        sellId: { $regex: prefix, $options: 'i' },
        $sort: {
          sellId: -1
        },
        $limit: 3
      }
    })

    // console.log(records,'from reso')
    let idPrefix = '';
    if (!records.total){
      idPrefix = prefix + '1'.padStart(6, '0')
    }else {
      let lastId: string | number = records.data[0]['sellId']
      lastId = lastId.toString().replace(prefix, '')
      lastId = parseInt(lastId) + 1
      idPrefix = prefix + idPrefix + lastId.toString().padStart(6, '0')
    }
    //
    return idPrefix;
    // return ''
  },

  createdBy: async (_value, obj, context) => {
    return context.params.user._id
  },
  // total: async (_value, obj, context) => {
  //   // obj.totalReturn = obj.totalPaid - allSum;
  //   return obj.detail.reduce((total,item)=>total+= (item.qty*item.price),0)
  // },
  createdAt: async (value) => {
    return !value ? Date.now() : value;
  }
})

// Schema for updating existing entries
export const sellsPatchSchema = Type.Partial(sellsSchema, {
  $id: 'SellsPatch'
})
export type SellsPatch = Static<typeof sellsPatchSchema>
export const sellsPatchValidator = getValidator(sellsPatchSchema, dataValidator)
export const sellsPatchResolver = resolve<Sells, HookContext>({
  updatedAt: async () => {
    return Date.now()
  }
})

// Schema for allowed query properties
export const sellsQueryProperties = Type.Pick(sellsSchema, ['_id','sellId','date','customer','totalPaid','discount','detail'])
export const sellsQuerySchema = Type.Intersect(
  [
    querySyntax(sellsQueryProperties,{
      sellId: { $regex: Type.String(), $options: Type.String() }
    }),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type SellsQuery = Static<typeof sellsQuerySchema>
export const sellsQueryValidator = getValidator(sellsQuerySchema, queryValidator)
export const sellsQueryResolver = resolve<SellsQuery, HookContext>({})
