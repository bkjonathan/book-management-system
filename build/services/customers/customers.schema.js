"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customersQueryResolver = exports.customersQueryValidator = exports.customersQuerySchema = exports.customersQueryProperties = exports.customersPatchResolver = exports.customersPatchValidator = exports.customersPatchSchema = exports.customersDataResolver = exports.customersDataValidator = exports.customersDataSchema = exports.customersExternalResolver = exports.customersResolver = exports.customersValidator = exports.customersSchema = void 0;
// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const typebox_2 = require("@feathersjs/typebox");
const validators_1 = require("../../validators");
// Main data model schema
exports.customersSchema = typebox_1.Type.Object({
    _id: (0, typebox_2.ObjectIdSchema)(),
    name: typebox_1.Type.String(),
    email: typebox_1.Type.String(),
    phone: typebox_1.Type.String(),
    address: typebox_1.Type.String(),
}, { $id: 'Customers', additionalProperties: false });
exports.customersValidator = (0, typebox_1.getValidator)(exports.customersSchema, validators_1.dataValidator);
exports.customersResolver = (0, schema_1.resolve)({});
exports.customersExternalResolver = (0, schema_1.resolve)({});
// Schema for creating new entries
exports.customersDataSchema = typebox_1.Type.Pick(exports.customersSchema, ['name', 'email', 'phone', 'address'], {
    $id: 'CustomersData'
});
exports.customersDataValidator = (0, typebox_1.getValidator)(exports.customersDataSchema, validators_1.dataValidator);
exports.customersDataResolver = (0, schema_1.resolve)({});
// Schema for updating existing entries
exports.customersPatchSchema = typebox_1.Type.Partial(exports.customersSchema, {
    $id: 'CustomersPatch'
});
exports.customersPatchValidator = (0, typebox_1.getValidator)(exports.customersPatchSchema, validators_1.dataValidator);
exports.customersPatchResolver = (0, schema_1.resolve)({});
// Schema for allowed query properties
exports.customersQueryProperties = typebox_1.Type.Pick(exports.customersSchema, ['_id', 'name', 'email', 'phone', 'address']);
exports.customersQuerySchema = typebox_1.Type.Intersect([
    (0, typebox_1.querySyntax)(exports.customersQueryProperties),
    // Add additional query properties here
    typebox_1.Type.Object({}, { additionalProperties: false })
], { additionalProperties: false });
exports.customersQueryValidator = (0, typebox_1.getValidator)(exports.customersQuerySchema, validators_1.queryValidator);
exports.customersQueryResolver = (0, schema_1.resolve)({});
//# sourceMappingURL=customers.schema.js.map