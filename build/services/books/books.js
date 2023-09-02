"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.books = exports.booksMethods = exports.booksPath = void 0;
// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
const authentication_1 = require("@feathersjs/authentication");
const schema_1 = require("@feathersjs/schema");
const books_schema_1 = require("./books.schema");
const books_class_1 = require("./books.class");
const UtilitesHook_1 = require("../../hooks/UtilitesHook");
exports.booksPath = 'books';
exports.booksMethods = ['find', 'get', 'create', 'patch', 'remove'];
__exportStar(require("./books.class"), exports);
__exportStar(require("./books.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const books = (app) => {
    // Register our service on the Feathers application
    app.use(exports.booksPath, new books_class_1.BooksService((0, books_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: exports.booksMethods,
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service(exports.booksPath).hooks({
        around: {
            all: [
                (0, authentication_1.authenticate)('jwt'),
                schema_1.hooks.resolveExternal(books_schema_1.booksExternalResolver),
                schema_1.hooks.resolveResult(books_schema_1.booksResolver)
            ]
        },
        before: {
            all: [
                UtilitesHook_1.populateAuthors,
                UtilitesHook_1.populateCategories,
                UtilitesHook_1.populatePublishers,
                UtilitesHook_1.changeAuthorToId,
                UtilitesHook_1.changeCategoryToId,
                schema_1.hooks.validateQuery(books_schema_1.booksQueryValidator),
                schema_1.hooks.resolveQuery(books_schema_1.booksQueryResolver)
            ],
            find: [],
            get: [],
            create: [
                (0, UtilitesHook_1.changeDateToNumber)('publicationDate'),
                schema_1.hooks.validateData(books_schema_1.booksDataValidator),
                schema_1.hooks.resolveData(books_schema_1.booksDataResolver)
            ],
            patch: [schema_1.hooks.validateData(books_schema_1.booksPatchValidator), schema_1.hooks.resolveData(books_schema_1.booksPatchResolver)],
            remove: []
        },
        after: {
            all: []
        },
        error: {
            all: []
        }
    });
};
exports.books = books;
//# sourceMappingURL=books.js.map