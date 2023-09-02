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
exports.authors = exports.authorsMethods = exports.authorsPath = void 0;
// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
const authentication_1 = require("@feathersjs/authentication");
const schema_1 = require("@feathersjs/schema");
const authors_schema_1 = require("./authors.schema");
const authors_class_1 = require("./authors.class");
const UtilitesHook_1 = require("../../hooks/UtilitesHook");
exports.authorsPath = 'authors';
exports.authorsMethods = ['find', 'get', 'create', 'patch', 'remove'];
__exportStar(require("./authors.class"), exports);
__exportStar(require("./authors.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const authors = (app) => {
    // Register our service on the Feathers application
    app.use(exports.authorsPath, new authors_class_1.AuthorsService((0, authors_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: exports.authorsMethods,
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service(exports.authorsPath).hooks({
        around: {
            all: [
                (0, authentication_1.authenticate)('jwt'),
                schema_1.hooks.resolveExternal(authors_schema_1.authorsExternalResolver),
                schema_1.hooks.resolveResult(authors_schema_1.authorsResolver)
            ]
        },
        before: {
            all: [schema_1.hooks.validateQuery(authors_schema_1.authorsQueryValidator), schema_1.hooks.resolveQuery(authors_schema_1.authorsQueryResolver)],
            find: [],
            get: [],
            create: [(0, UtilitesHook_1.changeDateToNumber)('dob'), schema_1.hooks.validateData(authors_schema_1.authorsDataValidator), schema_1.hooks.resolveData(authors_schema_1.authorsDataResolver)],
            patch: [(0, UtilitesHook_1.changeDateToNumber)('dob'), schema_1.hooks.validateData(authors_schema_1.authorsPatchValidator), schema_1.hooks.resolveData(authors_schema_1.authorsPatchResolver)],
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
exports.authors = authors;
//# sourceMappingURL=authors.js.map