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
exports.sells = exports.sellsMethods = exports.sellsPath = void 0;
// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
const authentication_1 = require("@feathersjs/authentication");
const schema_1 = require("@feathersjs/schema");
const sells_schema_1 = require("./sells.schema");
const sells_class_1 = require("./sells.class");
const UtilitesHook_1 = require("../../hooks/UtilitesHook");
exports.sellsPath = 'sells';
exports.sellsMethods = ['find', 'get', 'create', 'patch', 'remove'];
__exportStar(require("./sells.class"), exports);
__exportStar(require("./sells.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const sells = (app) => {
    // Register our service on the Feathers application
    app.use(exports.sellsPath, new sells_class_1.SellsService((0, sells_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: exports.sellsMethods,
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service(exports.sellsPath).hooks({
        around: {
            all: [
                (0, authentication_1.authenticate)('jwt'),
                schema_1.hooks.resolveExternal(sells_schema_1.sellsExternalResolver),
                schema_1.hooks.resolveResult(sells_schema_1.sellsResolver)
            ]
        },
        before: {
            all: [
                (0, UtilitesHook_1.changeDateToNumber)('date'),
                UtilitesHook_1.populateCustomers,
                UtilitesHook_1.populateCreatedBy,
                schema_1.hooks.validateQuery(sells_schema_1.sellsQueryValidator),
                schema_1.hooks.resolveQuery(sells_schema_1.sellsQueryResolver)
            ],
            find: [],
            get: [],
            create: [
                UtilitesHook_1.calculateSell,
                schema_1.hooks.validateData(sells_schema_1.sellsDataValidator),
                schema_1.hooks.resolveData(sells_schema_1.sellsDataResolver)
            ],
            patch: [schema_1.hooks.validateData(sells_schema_1.sellsPatchValidator), schema_1.hooks.resolveData(sells_schema_1.sellsPatchResolver)],
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
exports.sells = sells;
//# sourceMappingURL=sells.js.map