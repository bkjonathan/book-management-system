// For more information about this file see https://dove.feathersjs.com/guides/cli/hook.html
import type { HookContext } from '../declarations'

export const changeDateToNumber = async (context: HookContext) => {
  if (context.data.dob){
    context.data.dob = new Date(context.data.dob).valueOf()
  }
}
