"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publishersQueryResolver = exports.publishersQueryValidator = exports.publishersQuerySchema = exports.publishersQueryProperties = exports.publishersPatchResolver = exports.publishersPatchValidator = exports.publishersPatchSchema = exports.publishersDataResolver = exports.publishersDataValidator = exports.publishersDataSchema = exports.publishersExternalResolver = exports.publishersResolver = exports.publishersValidator = exports.publishersSchema = void 0;
// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const typebox_2 = require("@feathersjs/typebox");
const validators_1 = require("../../validators");
// Main data model schema
exports.publishersSchema = typebox_1.Type.Object({
    _id: (0, typebox_2.ObjectIdSchema)(),
    name: typebox_1.Type.String(),
    email: typebox_1.Type.String(),
    phone: typebox_1.Type.String(),
    address: typebox_1.Type.String(),
}, { $id: 'Publishers', additionalProperties: false });
exports.publishersValidator = (0, typebox_1.getValidator)(exports.publishersSchema, validators_1.dataValidator);
exports.publishersResolver = (0, schema_1.resolve)({});
exports.publishersExternalResolver = (0, schema_1.resolve)({});
// Schema for creating new entries
exports.publishersDataSchema = typebox_1.Type.Pick(exports.publishersSchema, ['name', 'email', 'phone', 'address'], {
    $id: 'PublishersData'
});
exports.publishersDataValidator = (0, typebox_1.getValidator)(exports.publishersDataSchema, validators_1.dataValidator);
exports.publishersDataResolver = (0, schema_1.resolve)({});
// Schema for updating existing entries
exports.publishersPatchSchema = typebox_1.Type.Partial(exports.publishersSchema, {
    $id: 'PublishersPatch'
});
exports.publishersPatchValidator = (0, typebox_1.getValidator)(exports.publishersPatchSchema, validators_1.dataValidator);
exports.publishersPatchResolver = (0, schema_1.resolve)({});
// Schema for allowed query properties
exports.publishersQueryProperties = typebox_1.Type.Pick(exports.publishersSchema, ['_id', 'name', 'email', 'phone', 'address']);
exports.publishersQuerySchema = typebox_1.Type.Intersect([
    (0, typebox_1.querySyntax)(exports.publishersQueryProperties),
    // Add additional query properties here
    typebox_1.Type.Object({}, { additionalProperties: false })
], { additionalProperties: false });
exports.publishersQueryValidator = (0, typebox_1.getValidator)(exports.publishersQuerySchema, validators_1.queryValidator);
exports.publishersQueryResolver = (0, schema_1.resolve)({});
//# sourceMappingURL=publishers.schema.js.map