// For more information about this file see https://dove.feathersjs.com/guides/cli/hook.html
import type { HookContext } from '../declarations'

export const changeDateToNumber = (key: string) => {
  return async (context: HookContext) => {
    if (context.data[key]) {
      context.data[key] = new Date(context.data[key]).valueOf()
    }
  }
}

export const populateAuthors = async (context: HookContext) => {
  context.params.pipeline = [
    {
      $lookup: {
        from: 'authors',
        localField: 'authors',
        foreignField: '_id',
        as: 'authors'
      }
    }
  ]
}

export const populateCategories = async (context: HookContext) => {
  context.params.pipeline = [
    ...context.params.pipeline,
    {
      $lookup: {
        from: 'categories',
        localField: 'categories',
        foreignField: '_id',
        as: 'categories'
      }
    },
    { $unwind: { path: '$categories' } }
  ]
}
export const populatePublishers = async (context: HookContext) => {
  context.params.pipeline = [
    ...context.params.pipeline,
    {
      $lookup: {
        from: 'publishers',
        localField: 'publisher',
        foreignField: '_id',
        as: 'publisher'
      }
    },
    { $unwind: { path: '$publisher' } }
  ]
}
