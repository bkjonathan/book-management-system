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
exports.publishers = exports.publishersMethods = exports.publishersPath = void 0;
// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
const authentication_1 = require("@feathersjs/authentication");
const schema_1 = require("@feathersjs/schema");
const publishers_schema_1 = require("./publishers.schema");
const publishers_class_1 = require("./publishers.class");
exports.publishersPath = 'publishers';
exports.publishersMethods = ['find', 'get', 'create', 'patch', 'remove'];
__exportStar(require("./publishers.class"), exports);
__exportStar(require("./publishers.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const publishers = (app) => {
    // Register our service on the Feathers application
    app.use(exports.publishersPath, new publishers_class_1.PublishersService((0, publishers_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: exports.publishersMethods,
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service(exports.publishersPath).hooks({
        around: {
            all: [
                (0, authentication_1.authenticate)('jwt'),
                schema_1.hooks.resolveExternal(publishers_schema_1.publishersExternalResolver),
                schema_1.hooks.resolveResult(publishers_schema_1.publishersResolver)
            ]
        },
        before: {
            all: [
                schema_1.hooks.validateQuery(publishers_schema_1.publishersQueryValidator),
                schema_1.hooks.resolveQuery(publishers_schema_1.publishersQueryResolver)
            ],
            find: [],
            get: [],
            create: [
                schema_1.hooks.validateData(publishers_schema_1.publishersDataValidator),
                schema_1.hooks.resolveData(publishers_schema_1.publishersDataResolver)
            ],
            patch: [
                schema_1.hooks.validateData(publishers_schema_1.publishersPatchValidator),
                schema_1.hooks.resolveData(publishers_schema_1.publishersPatchResolver)
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
exports.publishers = publishers;
//# sourceMappingURL=publishers.js.map