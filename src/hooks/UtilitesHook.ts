// For more information about this file see https://dove.feathersjs.com/guides/cli/hook.html
import type { HookContext } from '../declarations'

export const changeDateToNumber = (key:string)=>{
  return async (context: HookContext) => {
    if (context.data[key]){
      context.data[key] = new Date(context.data[key]).valueOf()
    }
  }
}
