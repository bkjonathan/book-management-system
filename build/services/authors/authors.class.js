"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = exports.AuthorsService = void 0;
const mongodb_1 = require("@feathersjs/mongodb");
// By default calls the standard MongoDB adapter service methods but can be customized with your own functionality.
class AuthorsService extends mongodb_1.MongoDBService {
}
exports.AuthorsService = AuthorsService;
const getOptions = (app) => {
    return {
        paginate: app.get('paginate'),
        Model: app.get('mongodbClient').then((db) => db.collection('authors'))
    };
};
exports.getOptions = getOptions;
//# sourceMappingURL=authors.class.js.map