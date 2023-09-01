// For more information about this file see https://dove.feathersjs.com/guides/cli/hook.html
import type { HookContext } from '../declarations'
import {UserData} from "../services/users/users.schema";
import {NotAcceptable} from "@feathersjs/errors";



export const checkEmail = async (context: HookContext) => {
  const {email} = context.data as UserData;
  const getUser = await context.app.service('users').find({
    query:{
      email
    }
  })
  if(getUser.total){
    throw new NotAcceptable('Email address is already exists.')
  }
}


// export const authHook = async (context: HookContext) => {
//   console.log(`Running hook AuthHook on ${context.path}.${context.method}`)
// }
