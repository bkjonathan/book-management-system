"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.booksQueryResolver = exports.booksQueryValidator = exports.booksQuerySchema = exports.booksQueryProperties = exports.booksPatchResolver = exports.booksPatchValidator = exports.booksPatchSchema = exports.booksDataResolver = exports.booksDataValidator = exports.booksDataSchema = exports.booksExternalResolver = exports.booksResolver = exports.booksValidator = exports.booksSchema = void 0;
// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const typebox_2 = require("@feathersjs/typebox");
const validators_1 = require("../../validators");
// Main data model schema
exports.booksSchema = typebox_1.Type.Object({
    _id: (0, typebox_2.ObjectIdSchema)(),
    authors: typebox_1.Type.Array((0, typebox_2.ObjectIdSchema)()),
    categories: (0, typebox_2.ObjectIdSchema)(),
    publisher: (0, typebox_2.ObjectIdSchema)(),
    title: typebox_1.Type.String(),
    description: typebox_1.Type.Optional(typebox_1.Type.String()),
    isbn: typebox_1.Type.Optional(typebox_1.Type.Number()),
    publicationDate: typebox_1.Type.Union([typebox_1.Type.Number(), typebox_1.Type.String()]),
    price: typebox_1.Type.Number(),
    createdBy: typebox_1.Type.Optional((0, typebox_2.ObjectIdSchema)()),
    createdAt: typebox_1.Type.Number(),
    updatedAt: typebox_1.Type.Number()
}, { $id: 'Books', additionalProperties: false });
exports.booksValidator = (0, typebox_1.getValidator)(exports.booksSchema, validators_1.dataValidator);
exports.booksResolver = (0, schema_1.resolve)({});
exports.booksExternalResolver = (0, schema_1.resolve)({
    publicationDate: async (value) => {
        return value ? new Date(value).toISOString() : value;
    }
});
// Schema for creating new entries
exports.booksDataSchema = typebox_1.Type.Pick(exports.booksSchema, ['authors', 'categories', 'publisher', 'title', 'description', 'isbn', 'publicationDate', 'price'], {
    $id: 'BooksData'
});
exports.booksDataValidator = (0, typebox_1.getValidator)(exports.booksDataSchema, validators_1.dataValidator);
exports.booksDataResolver = (0, schema_1.resolve)({
    createdBy: async (_value, _profile, context) => {
        // Associate the record with the id of the authenticated user
        return context.params.user._id;
    },
    createdAt: async () => {
        return Date.now();
    }
});
// Schema for updating existing entries
exports.booksPatchSchema = typebox_1.Type.Partial(exports.booksSchema, {
    $id: 'BooksPatch'
});
exports.booksPatchValidator = (0, typebox_1.getValidator)(exports.booksPatchSchema, validators_1.dataValidator);
exports.booksPatchResolver = (0, schema_1.resolve)({
    updatedAt: async () => {
        return Date.now();
    }
});
// Schema for allowed query properties
exports.booksQueryProperties = typebox_1.Type.Pick(exports.booksSchema, [
    '_id',
    'authors',
    'categories',
    'publisher',
    'title',
    'description',
    'isbn',
    'publicationDate',
    'price'
]);
exports.booksQuerySchema = typebox_1.Type.Intersect([
    (0, typebox_1.querySyntax)(exports.booksQueryProperties, {
        title: { $regex: typebox_1.Type.String(), $options: typebox_1.Type.String() }
    }),
    // Add additional query properties here
    typebox_1.Type.Object({}, { additionalProperties: false })
], { additionalProperties: false });
exports.booksQueryValidator = (0, typebox_1.getValidator)(exports.booksQuerySchema, validators_1.queryValidator);
exports.booksQueryResolver = (0, schema_1.resolve)({});
//# sourceMappingURL=books.schema.js.map