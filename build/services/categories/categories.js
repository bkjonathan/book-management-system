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
exports.categories = exports.categoriesMethods = exports.categoriesPath = void 0;
// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
const authentication_1 = require("@feathersjs/authentication");
const schema_1 = require("@feathersjs/schema");
const categories_schema_1 = require("./categories.schema");
const categories_class_1 = require("./categories.class");
exports.categoriesPath = 'categories';
exports.categoriesMethods = ['find', 'get', 'create', 'patch', 'remove'];
__exportStar(require("./categories.class"), exports);
__exportStar(require("./categories.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const categories = (app) => {
    // Register our service on the Feathers application
    app.use(exports.categoriesPath, new categories_class_1.CategoriesService((0, categories_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: exports.categoriesMethods,
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service(exports.categoriesPath).hooks({
        around: {
            all: [
                (0, authentication_1.authenticate)('jwt'),
                schema_1.hooks.resolveExternal(categories_schema_1.categoriesExternalResolver),
                schema_1.hooks.resolveResult(categories_schema_1.categoriesResolver)
            ]
        },
        before: {
            all: [
                schema_1.hooks.validateQuery(categories_schema_1.categoriesQueryValidator),
                schema_1.hooks.resolveQuery(categories_schema_1.categoriesQueryResolver)
            ],
            find: [],
            get: [],
            create: [
                schema_1.hooks.validateData(categories_schema_1.categoriesDataValidator),
                schema_1.hooks.resolveData(categories_schema_1.categoriesDataResolver)
            ],
            patch: [
                schema_1.hooks.validateData(categories_schema_1.categoriesPatchValidator),
                schema_1.hooks.resolveData(categories_schema_1.categoriesPatchResolver)
            ],
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
exports.categories = categories;
//# sourceMappingURL=categories.js.map