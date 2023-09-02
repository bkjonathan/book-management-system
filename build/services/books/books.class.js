"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = exports.BooksService = void 0;
const mongodb_1 = require("@feathersjs/mongodb");
// By default calls the standard MongoDB adapter service methods but can be customized with your own functionality.
class BooksService extends mongodb_1.MongoDBService {
}
exports.BooksService = BooksService;
const getOptions = (app) => {
    return {
        paginate: app.get('paginate'),
        Model: app.get('mongodbClient').then((db) => db.collection('books'))
    };
};
exports.getOptions = getOptions;
//# sourceMappingURL=books.class.js.map