"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = exports.SellsService = void 0;
const mongodb_1 = require("@feathersjs/mongodb");
// By default calls the standard MongoDB adapter service methods but can be customized with your own functionality.
class SellsService extends mongodb_1.MongoDBService {
}
exports.SellsService = SellsService;
const getOptions = (app) => {
    return {
        paginate: app.get('paginate'),
        Model: app.get('mongodbClient').then((db) => db.collection('sells'))
    };
};
exports.getOptions = getOptions;
//# sourceMappingURL=sells.class.js.map