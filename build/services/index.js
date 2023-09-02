"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.services = void 0;
const sells_1 = require("./sells/sells");
const books_1 = require("./books/books");
const publishers_1 = require("./publishers/publishers");
const customers_1 = require("./customers/customers");
const authors_1 = require("./authors/authors");
const categories_1 = require("./categories/categories");
const users_1 = require("./users/users");
const services = (app) => {
    app.configure(sells_1.sells);
    app.configure(books_1.books);
    app.configure(publishers_1.publishers);
    app.configure(customers_1.customers);
    app.configure(authors_1.authors);
    app.configure(categories_1.categories);
    app.configure(users_1.user);
    // All services will be registered here
};
exports.services = services;
//# sourceMappingURL=index.js.map