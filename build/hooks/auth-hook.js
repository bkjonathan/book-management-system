"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkEmail = void 0;
const errors_1 = require("@feathersjs/errors");
const checkEmail = async (context) => {
    const { email } = context.data;
    const getUser = await context.app.service('users').find({
        query: {
            email
        }
    });
    if (getUser.total) {
        throw new errors_1.NotAcceptable('Email address is already exists.');
    }
};
exports.checkEmail = checkEmail;
// export const authHook = async (context: HookContext) => {
//   console.log(`Running hook AuthHook on ${context.path}.${context.method}`)
// }
//# sourceMappingURL=auth-hook.js.map