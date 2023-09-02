// For more information about this file see https://dove.feathersjs.com/guides/cli/hook.html
import type { HookContext } from '../declarations'

export const changeDateToNumber = (key: string) => {
  return async (context: HookContext) => {
    if (context.data && context.data[key]) {
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

export const changeAuthorToId = async (context: HookContext) => {
  if (context.params.query?.authors && !Array.isArray(context.params.query?.authors)){
    const keyword = context.params.query.authors;
    const getAuthors = await context.app.service('authors').find({
      query:{
        name:{
          $regex:keyword,
          $options:'i'
        }
      }
    })
    if (getAuthors.total){
      context.params.query.authors = getAuthors.data.map((v)=>v._id)
    }
  }
}
export const changeCategoryToId = async (context: HookContext) => {
  if (context.params.query?.categories){
    const keyword = context.params.query.categories;
    const getCategories = await context.app.service('categories').find({
      query:{
        name:{
          $regex:keyword,
          $options:'i'
        }
      }
    })
    if (getCategories.total){
      context.params.query.categories = getCategories.data.map((v)=>v._id.toString())[0];
    }
  }
}

export const calculateSell = async (context: HookContext) => {
  if (context.data && Object.keys(context.data).length && context.data.detail?.length){
    context.data.netTotal = context.data.detail.reduce((total:number,item:Record<string, any>)=>total+= (item.qty*item.price),0)
    context.data.total = context.data.netTotal - context.data.discount;
    context.data.totalReturn = (context.data.totalPaid - context.data.netTotal) + context.data.discount  ;
  }
}

