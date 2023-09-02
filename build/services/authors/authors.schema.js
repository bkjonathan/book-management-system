"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorsQueryResolver = exports.authorsQueryValidator = exports.authorsQuerySchema = exports.authorsQueryProperties = exports.authorsPatchResolver = exports.authorsPatchValidator = exports.authorsPatchSchema = exports.authorsDataResolver = exports.authorsDataValidator = exports.authorsDataSchema = exports.authorsExternalResolver = exports.authorsResolver = exports.authorsValidator = exports.authorsSchema = void 0;
// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const typebox_2 = require("@feathersjs/typebox");
const validators_1 = require("../../validators");
// Main data model schema
exports.authorsSchema = typebox_1.Type.Object({
    _id: (0, typebox_2.ObjectIdSchema)(),
    name: typebox_1.Type.String(),
    biography: typebox_1.Type.String(),
    dob: typebox_1.Type.Number(),
    nationality: typebox_1.Type.String(),
    createdBy: typebox_1.Type.Optional((0, typebox_2.ObjectIdSchema)()),
    createdAt: typebox_1.Type.Number(),
    updatedAt: typebox_1.Type.Number()
}, { $id: 'Authors', additionalProperties: false });
exports.authorsValidator = (0, typebox_1.getValidator)(exports.authorsSchema, validators_1.dataValidator);
exports.authorsResolver = (0, schema_1.resolve)({});
exports.authorsExternalResolver = (0, schema_1.resolve)({});
// Schema for creating new entries
exports.authorsDataSchema = typebox_1.Type.Pick(exports.authorsSchema, ['name', 'biography', 'dob', 'nationality'], {
    $id: 'AuthorsData'
});
exports.authorsDataValidator = (0, typebox_1.getValidator)(exports.authorsDataSchema, validators_1.dataValidator);
exports.authorsDataResolver = (0, schema_1.resolve)({
    dob: async (_value, _profile) => {
        // Associate the record with the id of the authenticated user
        if (_value) {
            return new Date(_value).valueOf();
        }
    },
    createdBy: async (_value, _profile, context) => {
        // Associate the record with the id of the authenticated user
        return context.params.user._id;
    },
    createdAt: async () => {
        return Date.now();
    }
});
// Schema for updating existing entries
exports.authorsPatchSchema = typebox_1.Type.Partial(exports.authorsSchema, {
    $id: 'AuthorsPatch'
});
exports.authorsPatchValidator = (0, typebox_1.getValidator)(exports.authorsPatchSchema, validators_1.dataValidator);
exports.authorsPatchResolver = (0, schema_1.resolve)({
    updatedAt: async () => {
        return Date.now();
    }
});
// Schema for allowed query properties
exports.authorsQueryProperties = typebox_1.Type.Pick(exports.authorsSchema, ['_id', 'name', 'biography', 'dob', 'nationality']);
exports.authorsQuerySchema = typebox_1.Type.Intersect([
    (0, typebox_1.querySyntax)(exports.authorsQueryProperties, {
        name: { $regex: typebox_1.Type.String(), $options: typebox_1.Type.String() }
    }),
    // Add additional query properties here
    typebox_1.Type.Object({}, { additionalProperties: false })
], { additionalProperties: false });
exports.authorsQueryValidator = (0, typebox_1.getValidator)(exports.authorsQuerySchema, validators_1.queryValidator);
exports.authorsQueryResolver = (0, schema_1.resolve)({});
//# sourceMappingURL=authors.schema.js.map