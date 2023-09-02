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
exports.customers = exports.customersMethods = exports.customersPath = void 0;
// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
const authentication_1 = require("@feathersjs/authentication");
const schema_1 = require("@feathersjs/schema");
const customers_schema_1 = require("./customers.schema");
const customers_class_1 = require("./customers.class");
exports.customersPath = 'customers';
exports.customersMethods = ['find', 'get', 'create', 'patch', 'remove'];
__exportStar(require("./customers.class"), exports);
__exportStar(require("./customers.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const customers = (app) => {
    // Register our service on the Feathers application
    app.use(exports.customersPath, new customers_class_1.CustomersService((0, customers_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: exports.customersMethods,
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service(exports.customersPath).hooks({
        around: {
            all: [
                (0, authentication_1.authenticate)('jwt'),
                schema_1.hooks.resolveExternal(customers_schema_1.customersExternalResolver),
                schema_1.hooks.resolveResult(customers_schema_1.customersResolver)
            ]
        },
        before: {
            all: [
                schema_1.hooks.validateQuery(customers_schema_1.customersQueryValidator),
                schema_1.hooks.resolveQuery(customers_schema_1.customersQueryResolver)
            ],
            find: [],
            get: [],
            create: [
                schema_1.hooks.validateData(customers_schema_1.customersDataValidator),
                schema_1.hooks.resolveData(customers_schema_1.customersDataResolver)
            ],
            patch: [
                schema_1.hooks.validateData(customers_schema_1.customersPatchValidator),
                schema_1.hooks.resolveData(customers_schema_1.customersPatchResolver)
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
exports.customers = customers;
//# sourceMappingURL=customers.js.map