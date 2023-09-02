"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = exports.CustomersService = void 0;
const mongodb_1 = require("@feathersjs/mongodb");
// By default calls the standard MongoDB adapter service methods but can be customized with your own functionality.
class CustomersService extends mongodb_1.MongoDBService {
}
exports.CustomersService = CustomersService;
const getOptions = (app) => {
    return {
        paginate: app.get('paginate'),
        Model: app.get('mongodbClient').then((db) => db.collection('customers'))
    };
};
exports.getOptions = getOptions;
//# sourceMappingURL=customers.class.js.map