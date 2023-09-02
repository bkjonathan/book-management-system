"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesQueryResolver = exports.categoriesQueryValidator = exports.categoriesQuerySchema = exports.categoriesQueryProperties = exports.categoriesPatchResolver = exports.categoriesPatchValidator = exports.categoriesPatchSchema = exports.categoriesDataResolver = exports.categoriesDataValidator = exports.categoriesDataSchema = exports.categoriesExternalResolver = exports.categoriesResolver = exports.categoriesValidator = exports.categoriesSchema = void 0;
// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const typebox_2 = require("@feathersjs/typebox");
const validators_1 = require("../../validators");
// Main data model schema
exports.categoriesSchema = typebox_1.Type.Object({
    _id: (0, typebox_2.ObjectIdSchema)(),
    name: typebox_1.Type.String(),
    description: typebox_1.Type.String(),
}, { $id: 'Categories', additionalProperties: false });
exports.categoriesValidator = (0, typebox_1.getValidator)(exports.categoriesSchema, validators_1.dataValidator);
exports.categoriesResolver = (0, schema_1.resolve)({});
exports.categoriesExternalResolver = (0, schema_1.resolve)({});
// Schema for creating new entries
exports.categoriesDataSchema = typebox_1.Type.Pick(exports.categoriesSchema, ['name', 'description'], {
    $id: 'CategoriesData'
});
exports.categoriesDataValidator = (0, typebox_1.getValidator)(exports.categoriesDataSchema, validators_1.dataValidator);
exports.categoriesDataResolver = (0, schema_1.resolve)({});
// Schema for updating existing entries
exports.categoriesPatchSchema = typebox_1.Type.Partial(exports.categoriesSchema, {
    $id: 'CategoriesPatch'
});
exports.categoriesPatchValidator = (0, typebox_1.getValidator)(exports.categoriesPatchSchema, validators_1.dataValidator);
exports.categoriesPatchResolver = (0, schema_1.resolve)({});
// Schema for allowed query properties
exports.categoriesQueryProperties = typebox_1.Type.Pick(exports.categoriesSchema, ['_id', 'name', 'description']);
exports.categoriesQuerySchema = typebox_1.Type.Intersect([
    (0, typebox_1.querySyntax)(exports.categoriesQueryProperties, {
        name: { $regex: typebox_1.Type.String(), $options: typebox_1.Type.String() }
    }),
    // Add additional query properties here
    typebox_1.Type.Object({}, { additionalProperties: false })
], { additionalProperties: false });
exports.categoriesQueryValidator = (0, typebox_1.getValidator)(exports.categoriesQuerySchema, validators_1.queryValidator);
exports.categoriesQueryResolver = (0, schema_1.resolve)({});
//# sourceMappingURL=categories.schema.js.map