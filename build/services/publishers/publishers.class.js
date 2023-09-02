"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = exports.PublishersService = void 0;
const mongodb_1 = require("@feathersjs/mongodb");
// By default, calls the standard MongoDB adapter service methods but can be customized with your own functionality.
class PublishersService extends mongodb_1.MongoDBService {
}
exports.PublishersService = PublishersService;
const getOptions = (app) => {
    return {
        paginate: app.get('paginate'),
        Model: app.get('mongodbClient').then((db) => db.collection('publishers'))
    };
};
exports.getOptions = getOptions;
//# sourceMappingURL=publishers.class.js.map