"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sellsQueryResolver = exports.sellsQueryValidator = exports.sellsQuerySchema = exports.sellsQueryProperties = exports.sellsPatchResolver = exports.sellsPatchValidator = exports.sellsPatchSchema = exports.sellsDataResolver = exports.sellsDataValidator = exports.sellsDataSchema = exports.sellsExternalResolver = exports.sellsResolver = exports.sellsValidator = exports.sellsSchema = void 0;
// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const typebox_2 = require("@feathersjs/typebox");
const validators_1 = require("../../validators");
// Main data model schema
exports.sellsSchema = typebox_1.Type.Object({
    _id: (0, typebox_2.ObjectIdSchema)(),
    date: typebox_1.Type.Number(),
    sellId: typebox_1.Type.String(),
    customer: (0, typebox_2.ObjectIdSchema)(),
    netTotal: typebox_1.Type.Number(),
    total: typebox_1.Type.Number(),
    totalPaid: typebox_1.Type.Number(),
    totalReturn: typebox_1.Type.Number(),
    totalItems: typebox_1.Type.Number(),
    discount: typebox_1.Type.Number(),
    discountTotal: typebox_1.Type.Number(),
    detail: typebox_1.Type.Array(typebox_1.Type.Object({
        book: (0, typebox_2.ObjectIdSchema)(),
        qty: typebox_1.Type.Number(),
        price: typebox_1.Type.Number()
    })),
    createdBy: typebox_1.Type.Optional((0, typebox_2.ObjectIdSchema)()),
    createdAt: typebox_1.Type.Number(),
    updatedAt: typebox_1.Type.Number()
}, { $id: 'Sells', additionalProperties: false });
exports.sellsValidator = (0, typebox_1.getValidator)(exports.sellsSchema, validators_1.dataValidator);
exports.sellsResolver = (0, schema_1.resolve)({});
exports.sellsExternalResolver = (0, schema_1.resolve)({});
// Schema for creating new entries
exports.sellsDataSchema = typebox_1.Type.Pick(exports.sellsSchema, ['date', 'customer', 'netTotal', 'total', 'totalReturn', 'totalPaid', 'discount', 'detail'], {
    $id: 'SellsData'
});
exports.sellsDataValidator = (0, typebox_1.getValidator)(exports.sellsDataSchema, validators_1.dataValidator);
exports.sellsDataResolver = (0, schema_1.resolve)({
    sellId: async (value, obj, context) => {
        const prefix = 'TS-';
        const records = await context.app.service('sells').find({
            query: {
                sellId: { $regex: prefix, $options: 'i' },
                $sort: {
                    sellId: -1
                },
                $limit: 3
            }
        });
        // console.log(records,'from reso')
        let idPrefix = '';
        if (!records.total) {
            idPrefix = prefix + '1'.padStart(6, '0');
        }
        else {
            let lastId = records.data[0]['sellId'];
            lastId = lastId.toString().replace(prefix, '');
            lastId = parseInt(lastId) + 1;
            idPrefix = prefix + idPrefix + lastId.toString().padStart(6, '0');
        }
        //
        return idPrefix;
        // return ''
    },
    createdBy: async (_value, obj, context) => {
        return context.params.user._id;
    },
    // total: async (_value, obj, context) => {
    //   // obj.totalReturn = obj.totalPaid - allSum;
    //   return obj.detail.reduce((total,item)=>total+= (item.qty*item.price),0)
    // },
    createdAt: async (value) => {
        return !value ? Date.now() : value;
    }
});
// Schema for updating existing entries
exports.sellsPatchSchema = typebox_1.Type.Partial(exports.sellsSchema, {
    $id: 'SellsPatch'
});
exports.sellsPatchValidator = (0, typebox_1.getValidator)(exports.sellsPatchSchema, validators_1.dataValidator);
exports.sellsPatchResolver = (0, schema_1.resolve)({
    updatedAt: async () => {
        return Date.now();
    }
});
// Schema for allowed query properties
exports.sellsQueryProperties = typebox_1.Type.Pick(exports.sellsSchema, ['_id', 'sellId', 'date', 'customer', 'totalPaid', 'discount', 'detail']);
exports.sellsQuerySchema = typebox_1.Type.Intersect([
    (0, typebox_1.querySyntax)(exports.sellsQueryProperties, {
        sellId: { $regex: typebox_1.Type.String(), $options: typebox_1.Type.String() }
    }),
    // Add additional query properties here
    typebox_1.Type.Object({}, { additionalProperties: false })
], { additionalProperties: false });
exports.sellsQueryValidator = (0, typebox_1.getValidator)(exports.sellsQuerySchema, validators_1.queryValidator);
exports.sellsQueryResolver = (0, schema_1.resolve)({});
//# sourceMappingURL=sells.schema.js.map