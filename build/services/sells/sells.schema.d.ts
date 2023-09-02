import type { Static } from '@feathersjs/typebox';
import type { HookContext } from '../../declarations';
export declare const sellsSchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
    date: import("@sinclair/typebox").TNumber;
    sellId: import("@sinclair/typebox").TString<string>;
    customer: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
    netTotal: import("@sinclair/typebox").TNumber;
    total: import("@sinclair/typebox").TNumber;
    totalPaid: import("@sinclair/typebox").TNumber;
    totalReturn: import("@sinclair/typebox").TNumber;
    totalItems: import("@sinclair/typebox").TNumber;
    discount: import("@sinclair/typebox").TNumber;
    discountTotal: import("@sinclair/typebox").TNumber;
    detail: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        book: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
        qty: import("@sinclair/typebox").TNumber;
        price: import("@sinclair/typebox").TNumber;
    }>>;
    createdBy: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>>;
    createdAt: import("@sinclair/typebox").TNumber;
    updatedAt: import("@sinclair/typebox").TNumber;
}>;
export type Sells = Static<typeof sellsSchema>;
export declare const sellsValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const sellsResolver: import("@feathersjs/schema").Resolver<{
    createdBy?: string | {} | undefined;
    detail: {
        book: string | {};
        qty: number;
        price: number;
    }[];
    total: number;
    date: number;
    _id: string | {};
    createdAt: number;
    updatedAt: number;
    sellId: string;
    customer: string | {};
    netTotal: number;
    totalPaid: number;
    totalReturn: number;
    totalItems: number;
    discount: number;
    discountTotal: number;
}, HookContext>;
export declare const sellsExternalResolver: import("@feathersjs/schema").Resolver<{
    createdBy?: string | {} | undefined;
    detail: {
        book: string | {};
        qty: number;
        price: number;
    }[];
    total: number;
    date: number;
    _id: string | {};
    createdAt: number;
    updatedAt: number;
    sellId: string;
    customer: string | {};
    netTotal: number;
    totalPaid: number;
    totalReturn: number;
    totalItems: number;
    discount: number;
    discountTotal: number;
}, HookContext>;
export declare const sellsDataSchema: import("@sinclair/typebox").TPick<import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
    date: import("@sinclair/typebox").TNumber;
    sellId: import("@sinclair/typebox").TString<string>;
    customer: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
    netTotal: import("@sinclair/typebox").TNumber;
    total: import("@sinclair/typebox").TNumber;
    totalPaid: import("@sinclair/typebox").TNumber;
    totalReturn: import("@sinclair/typebox").TNumber;
    totalItems: import("@sinclair/typebox").TNumber;
    discount: import("@sinclair/typebox").TNumber;
    discountTotal: import("@sinclair/typebox").TNumber;
    detail: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        book: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
        qty: import("@sinclair/typebox").TNumber;
        price: import("@sinclair/typebox").TNumber;
    }>>;
    createdBy: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>>;
    createdAt: import("@sinclair/typebox").TNumber;
    updatedAt: import("@sinclair/typebox").TNumber;
}>, ["date", "customer", "netTotal", "total", "totalReturn", "totalPaid", "discount", "detail"]>;
export type SellsData = Static<typeof sellsDataSchema>;
export declare const sellsDataValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const sellsDataResolver: import("@feathersjs/schema").Resolver<{
    createdBy?: string | {} | undefined;
    detail: {
        book: string | {};
        qty: number;
        price: number;
    }[];
    total: number;
    date: number;
    _id: string | {};
    createdAt: number;
    updatedAt: number;
    sellId: string;
    customer: string | {};
    netTotal: number;
    totalPaid: number;
    totalReturn: number;
    totalItems: number;
    discount: number;
    discountTotal: number;
}, HookContext>;
export declare const sellsPatchSchema: import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
    date: import("@sinclair/typebox").TNumber;
    sellId: import("@sinclair/typebox").TString<string>;
    customer: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
    netTotal: import("@sinclair/typebox").TNumber;
    total: import("@sinclair/typebox").TNumber;
    totalPaid: import("@sinclair/typebox").TNumber;
    totalReturn: import("@sinclair/typebox").TNumber;
    totalItems: import("@sinclair/typebox").TNumber;
    discount: import("@sinclair/typebox").TNumber;
    discountTotal: import("@sinclair/typebox").TNumber;
    detail: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        book: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
        qty: import("@sinclair/typebox").TNumber;
        price: import("@sinclair/typebox").TNumber;
    }>>;
    createdBy: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>>;
    createdAt: import("@sinclair/typebox").TNumber;
    updatedAt: import("@sinclair/typebox").TNumber;
}>>;
export type SellsPatch = Static<typeof sellsPatchSchema>;
export declare const sellsPatchValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const sellsPatchResolver: import("@feathersjs/schema").Resolver<{
    createdBy?: string | {} | undefined;
    detail: {
        book: string | {};
        qty: number;
        price: number;
    }[];
    total: number;
    date: number;
    _id: string | {};
    createdAt: number;
    updatedAt: number;
    sellId: string;
    customer: string | {};
    netTotal: number;
    totalPaid: number;
    totalReturn: number;
    totalItems: number;
    discount: number;
    discountTotal: number;
}, HookContext>;
export declare const sellsQueryProperties: import("@sinclair/typebox").TPick<import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
    date: import("@sinclair/typebox").TNumber;
    sellId: import("@sinclair/typebox").TString<string>;
    customer: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
    netTotal: import("@sinclair/typebox").TNumber;
    total: import("@sinclair/typebox").TNumber;
    totalPaid: import("@sinclair/typebox").TNumber;
    totalReturn: import("@sinclair/typebox").TNumber;
    totalItems: import("@sinclair/typebox").TNumber;
    discount: import("@sinclair/typebox").TNumber;
    discountTotal: import("@sinclair/typebox").TNumber;
    detail: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        book: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
        qty: import("@sinclair/typebox").TNumber;
        price: import("@sinclair/typebox").TNumber;
    }>>;
    createdBy: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>>;
    createdAt: import("@sinclair/typebox").TNumber;
    updatedAt: import("@sinclair/typebox").TNumber;
}>, ["_id", "sellId", "date", "customer", "totalPaid", "discount", "detail"]>;
export declare const sellsQuerySchema: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
    $limit: import("@sinclair/typebox").TNumber;
    $skip: import("@sinclair/typebox").TNumber;
    $sort: import("@sinclair/typebox").TObject<{
        detail: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        date: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        sellId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        customer: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        totalPaid: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        discount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    }>;
    $select: import("@sinclair/typebox").TUnsafe<("detail" | "date" | "_id" | "sellId" | "customer" | "totalPaid" | "discount")[]>;
    $and: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        detail: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            book: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
            qty: import("@sinclair/typebox").TNumber;
            price: import("@sinclair/typebox").TNumber;
        }>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                book: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
                qty: import("@sinclair/typebox").TNumber;
                price: import("@sinclair/typebox").TNumber;
            }>>;
            $gte: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                book: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
                qty: import("@sinclair/typebox").TNumber;
                price: import("@sinclair/typebox").TNumber;
            }>>;
            $lt: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                book: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
                qty: import("@sinclair/typebox").TNumber;
                price: import("@sinclair/typebox").TNumber;
            }>>;
            $lte: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                book: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
                qty: import("@sinclair/typebox").TNumber;
                price: import("@sinclair/typebox").TNumber;
            }>>;
            $ne: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                book: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
                qty: import("@sinclair/typebox").TNumber;
                price: import("@sinclair/typebox").TNumber;
            }>>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                book: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
                qty: import("@sinclair/typebox").TNumber;
                price: import("@sinclair/typebox").TNumber;
            }>>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                book: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
                qty: import("@sinclair/typebox").TNumber;
                price: import("@sinclair/typebox").TNumber;
            }>>>;
        }>, import("@sinclair/typebox").TObject<unknown>]>>]>>;
        date: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TNumber;
            $gte: import("@sinclair/typebox").TNumber;
            $lt: import("@sinclair/typebox").TNumber;
            $lte: import("@sinclair/typebox").TNumber;
            $ne: import("@sinclair/typebox").TNumber;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
        }>, import("@sinclair/typebox").TObject<unknown>]>>]>>;
        _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
            $gte: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
            $lt: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
            $lte: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
            $ne: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>>;
        }>, import("@sinclair/typebox").TObject<unknown>]>>]>>;
        sellId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<string>;
            $gte: import("@sinclair/typebox").TString<string>;
            $lt: import("@sinclair/typebox").TString<string>;
            $lte: import("@sinclair/typebox").TString<string>;
            $ne: import("@sinclair/typebox").TString<string>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        }>, import("@sinclair/typebox").TObject<{
            $regex: import("@sinclair/typebox").TString<string>;
            $options: import("@sinclair/typebox").TString<string>;
        }>]>>]>>;
        customer: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
            $gte: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
            $lt: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
            $lte: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
            $ne: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>>;
        }>, import("@sinclair/typebox").TObject<unknown>]>>]>>;
        totalPaid: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TNumber;
            $gte: import("@sinclair/typebox").TNumber;
            $lt: import("@sinclair/typebox").TNumber;
            $lte: import("@sinclair/typebox").TNumber;
            $ne: import("@sinclair/typebox").TNumber;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
        }>, import("@sinclair/typebox").TObject<unknown>]>>]>>;
        discount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TNumber;
            $gte: import("@sinclair/typebox").TNumber;
            $lt: import("@sinclair/typebox").TNumber;
            $lte: import("@sinclair/typebox").TNumber;
            $ne: import("@sinclair/typebox").TNumber;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
        }>, import("@sinclair/typebox").TObject<unknown>]>>]>>;
    }>>, import("@sinclair/typebox").TObject<{
        $or: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            detail: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                book: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
                qty: import("@sinclair/typebox").TNumber;
                price: import("@sinclair/typebox").TNumber;
            }>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    book: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
                    qty: import("@sinclair/typebox").TNumber;
                    price: import("@sinclair/typebox").TNumber;
                }>>;
                $gte: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    book: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
                    qty: import("@sinclair/typebox").TNumber;
                    price: import("@sinclair/typebox").TNumber;
                }>>;
                $lt: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    book: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
                    qty: import("@sinclair/typebox").TNumber;
                    price: import("@sinclair/typebox").TNumber;
                }>>;
                $lte: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    book: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
                    qty: import("@sinclair/typebox").TNumber;
                    price: import("@sinclair/typebox").TNumber;
                }>>;
                $ne: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    book: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
                    qty: import("@sinclair/typebox").TNumber;
                    price: import("@sinclair/typebox").TNumber;
                }>>;
                $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    book: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
                    qty: import("@sinclair/typebox").TNumber;
                    price: import("@sinclair/typebox").TNumber;
                }>>>;
                $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    book: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
                    qty: import("@sinclair/typebox").TNumber;
                    price: import("@sinclair/typebox").TNumber;
                }>>>;
            }>, import("@sinclair/typebox").TObject<unknown>]>>]>>;
            date: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TNumber;
                $gte: import("@sinclair/typebox").TNumber;
                $lt: import("@sinclair/typebox").TNumber;
                $lte: import("@sinclair/typebox").TNumber;
                $ne: import("@sinclair/typebox").TNumber;
                $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
                $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            }>, import("@sinclair/typebox").TObject<unknown>]>>]>>;
            _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
                $gte: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
                $lt: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
                $lte: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
                $ne: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
                $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>>;
                $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>>;
            }>, import("@sinclair/typebox").TObject<unknown>]>>]>>;
            sellId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TString<string>;
                $gte: import("@sinclair/typebox").TString<string>;
                $lt: import("@sinclair/typebox").TString<string>;
                $lte: import("@sinclair/typebox").TString<string>;
                $ne: import("@sinclair/typebox").TString<string>;
                $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
                $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            }>, import("@sinclair/typebox").TObject<{
                $regex: import("@sinclair/typebox").TString<string>;
                $options: import("@sinclair/typebox").TString<string>;
            }>]>>]>>;
            customer: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
                $gte: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
                $lt: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
                $lte: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
                $ne: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
                $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>>;
                $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>>;
            }>, import("@sinclair/typebox").TObject<unknown>]>>]>>;
            totalPaid: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TNumber;
                $gte: import("@sinclair/typebox").TNumber;
                $lt: import("@sinclair/typebox").TNumber;
                $lte: import("@sinclair/typebox").TNumber;
                $ne: import("@sinclair/typebox").TNumber;
                $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
                $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            }>, import("@sinclair/typebox").TObject<unknown>]>>]>>;
            discount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TNumber;
                $gte: import("@sinclair/typebox").TNumber;
                $lt: import("@sinclair/typebox").TNumber;
                $lte: import("@sinclair/typebox").TNumber;
                $ne: import("@sinclair/typebox").TNumber;
                $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
                $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            }>, import("@sinclair/typebox").TObject<unknown>]>>]>>;
        }>>>;
    }>]>>;
    $or: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        detail: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            book: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
            qty: import("@sinclair/typebox").TNumber;
            price: import("@sinclair/typebox").TNumber;
        }>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                book: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
                qty: import("@sinclair/typebox").TNumber;
                price: import("@sinclair/typebox").TNumber;
            }>>;
            $gte: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                book: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
                qty: import("@sinclair/typebox").TNumber;
                price: import("@sinclair/typebox").TNumber;
            }>>;
            $lt: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                book: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
                qty: import("@sinclair/typebox").TNumber;
                price: import("@sinclair/typebox").TNumber;
            }>>;
            $lte: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                book: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
                qty: import("@sinclair/typebox").TNumber;
                price: import("@sinclair/typebox").TNumber;
            }>>;
            $ne: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                book: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
                qty: import("@sinclair/typebox").TNumber;
                price: import("@sinclair/typebox").TNumber;
            }>>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                book: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
                qty: import("@sinclair/typebox").TNumber;
                price: import("@sinclair/typebox").TNumber;
            }>>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                book: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
                qty: import("@sinclair/typebox").TNumber;
                price: import("@sinclair/typebox").TNumber;
            }>>>;
        }>, import("@sinclair/typebox").TObject<unknown>]>>]>>;
        date: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TNumber;
            $gte: import("@sinclair/typebox").TNumber;
            $lt: import("@sinclair/typebox").TNumber;
            $lte: import("@sinclair/typebox").TNumber;
            $ne: import("@sinclair/typebox").TNumber;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
        }>, import("@sinclair/typebox").TObject<unknown>]>>]>>;
        _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
            $gte: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
            $lt: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
            $lte: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
            $ne: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>>;
        }>, import("@sinclair/typebox").TObject<unknown>]>>]>>;
        sellId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<string>;
            $gte: import("@sinclair/typebox").TString<string>;
            $lt: import("@sinclair/typebox").TString<string>;
            $lte: import("@sinclair/typebox").TString<string>;
            $ne: import("@sinclair/typebox").TString<string>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        }>, import("@sinclair/typebox").TObject<{
            $regex: import("@sinclair/typebox").TString<string>;
            $options: import("@sinclair/typebox").TString<string>;
        }>]>>]>>;
        customer: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
            $gte: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
            $lt: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
            $lte: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
            $ne: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>>;
        }>, import("@sinclair/typebox").TObject<unknown>]>>]>>;
        totalPaid: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TNumber;
            $gte: import("@sinclair/typebox").TNumber;
            $lt: import("@sinclair/typebox").TNumber;
            $lte: import("@sinclair/typebox").TNumber;
            $ne: import("@sinclair/typebox").TNumber;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
        }>, import("@sinclair/typebox").TObject<unknown>]>>]>>;
        discount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TNumber;
            $gte: import("@sinclair/typebox").TNumber;
            $lt: import("@sinclair/typebox").TNumber;
            $lte: import("@sinclair/typebox").TNumber;
            $ne: import("@sinclair/typebox").TNumber;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
        }>, import("@sinclair/typebox").TObject<unknown>]>>]>>;
    }>>>;
}>>, import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
    detail: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        book: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
        qty: import("@sinclair/typebox").TNumber;
        price: import("@sinclair/typebox").TNumber;
    }>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            book: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
            qty: import("@sinclair/typebox").TNumber;
            price: import("@sinclair/typebox").TNumber;
        }>>;
        $gte: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            book: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
            qty: import("@sinclair/typebox").TNumber;
            price: import("@sinclair/typebox").TNumber;
        }>>;
        $lt: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            book: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
            qty: import("@sinclair/typebox").TNumber;
            price: import("@sinclair/typebox").TNumber;
        }>>;
        $lte: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            book: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
            qty: import("@sinclair/typebox").TNumber;
            price: import("@sinclair/typebox").TNumber;
        }>>;
        $ne: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            book: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
            qty: import("@sinclair/typebox").TNumber;
            price: import("@sinclair/typebox").TNumber;
        }>>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            book: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
            qty: import("@sinclair/typebox").TNumber;
            price: import("@sinclair/typebox").TNumber;
        }>>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            book: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
            qty: import("@sinclair/typebox").TNumber;
            price: import("@sinclair/typebox").TNumber;
        }>>>;
    }>, import("@sinclair/typebox").TObject<unknown>]>>]>>;
    date: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TNumber;
        $gte: import("@sinclair/typebox").TNumber;
        $lt: import("@sinclair/typebox").TNumber;
        $lte: import("@sinclair/typebox").TNumber;
        $ne: import("@sinclair/typebox").TNumber;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
    }>, import("@sinclair/typebox").TObject<unknown>]>>]>>;
    _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
        $gte: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
        $lt: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
        $lte: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
        $ne: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>>;
    }>, import("@sinclair/typebox").TObject<unknown>]>>]>>;
    sellId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TString<string>;
        $gte: import("@sinclair/typebox").TString<string>;
        $lt: import("@sinclair/typebox").TString<string>;
        $lte: import("@sinclair/typebox").TString<string>;
        $ne: import("@sinclair/typebox").TString<string>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
    }>, import("@sinclair/typebox").TObject<{
        $regex: import("@sinclair/typebox").TString<string>;
        $options: import("@sinclair/typebox").TString<string>;
    }>]>>]>>;
    customer: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
        $gte: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
        $lt: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
        $lte: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
        $ne: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>>;
    }>, import("@sinclair/typebox").TObject<unknown>]>>]>>;
    totalPaid: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TNumber;
        $gte: import("@sinclair/typebox").TNumber;
        $lt: import("@sinclair/typebox").TNumber;
        $lte: import("@sinclair/typebox").TNumber;
        $ne: import("@sinclair/typebox").TNumber;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
    }>, import("@sinclair/typebox").TObject<unknown>]>>]>>;
    discount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TNumber;
        $gte: import("@sinclair/typebox").TNumber;
        $lt: import("@sinclair/typebox").TNumber;
        $lte: import("@sinclair/typebox").TNumber;
        $ne: import("@sinclair/typebox").TNumber;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
    }>, import("@sinclair/typebox").TObject<unknown>]>>]>>;
}>>]>, import("@sinclair/typebox").TObject<{}>]>;
export type SellsQuery = Static<typeof sellsQuerySchema>;
export declare const sellsQueryValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const sellsQueryResolver: import("@feathersjs/schema").Resolver<Partial<{
    $limit: number;
    $skip: number;
    $sort: {
        detail?: number | undefined;
        date?: number | undefined;
        _id?: number | undefined;
        sellId?: number | undefined;
        customer?: number | undefined;
        totalPaid?: number | undefined;
        discount?: number | undefined;
    };
    $select: ("detail" | "date" | "_id" | "sellId" | "customer" | "totalPaid" | "discount")[];
    $and: ({
        detail?: {
            book: string | {};
            qty: number;
            price: number;
        }[] | Partial<{
            $gt: {
                book: string | {};
                qty: number;
                price: number;
            }[];
            $gte: {
                book: string | {};
                qty: number;
                price: number;
            }[];
            $lt: {
                book: string | {};
                qty: number;
                price: number;
            }[];
            $lte: {
                book: string | {};
                qty: number;
                price: number;
            }[];
            $ne: {
                book: string | {};
                qty: number;
                price: number;
            }[];
            $in: {
                book: string | {};
                qty: number;
                price: number;
            }[][];
            $nin: {
                book: string | {};
                qty: number;
                price: number;
            }[][];
        } & {}> | undefined;
        date?: number | Partial<{
            $gt: number;
            $gte: number;
            $lt: number;
            $lte: number;
            $ne: number;
            $in: number[];
            $nin: number[];
        } & {}> | undefined;
        _id?: string | {} | Partial<{
            $gt: string | {};
            $gte: string | {};
            $lt: string | {};
            $lte: string | {};
            $ne: string | {};
            $in: (string | {})[];
            $nin: (string | {})[];
        } & {}> | undefined;
        sellId?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        } & {
            $regex: string;
            $options: string;
        }> | undefined;
        customer?: string | {} | Partial<{
            $gt: string | {};
            $gte: string | {};
            $lt: string | {};
            $lte: string | {};
            $ne: string | {};
            $in: (string | {})[];
            $nin: (string | {})[];
        } & {}> | undefined;
        totalPaid?: number | Partial<{
            $gt: number;
            $gte: number;
            $lt: number;
            $lte: number;
            $ne: number;
            $in: number[];
            $nin: number[];
        } & {}> | undefined;
        discount?: number | Partial<{
            $gt: number;
            $gte: number;
            $lt: number;
            $lte: number;
            $ne: number;
            $in: number[];
            $nin: number[];
        } & {}> | undefined;
    } | {
        $or: {
            detail?: {
                book: string | {};
                qty: number;
                price: number;
            }[] | Partial<{
                $gt: {
                    book: string | {};
                    qty: number;
                    price: number;
                }[];
                $gte: {
                    book: string | {};
                    qty: number;
                    price: number;
                }[];
                $lt: {
                    book: string | {};
                    qty: number;
                    price: number;
                }[];
                $lte: {
                    book: string | {};
                    qty: number;
                    price: number;
                }[];
                $ne: {
                    book: string | {};
                    qty: number;
                    price: number;
                }[];
                $in: {
                    book: string | {};
                    qty: number;
                    price: number;
                }[][];
                $nin: {
                    book: string | {};
                    qty: number;
                    price: number;
                }[][];
            } & {}> | undefined;
            date?: number | Partial<{
                $gt: number;
                $gte: number;
                $lt: number;
                $lte: number;
                $ne: number;
                $in: number[];
                $nin: number[];
            } & {}> | undefined;
            _id?: string | {} | Partial<{
                $gt: string | {};
                $gte: string | {};
                $lt: string | {};
                $lte: string | {};
                $ne: string | {};
                $in: (string | {})[];
                $nin: (string | {})[];
            } & {}> | undefined;
            sellId?: string | Partial<{
                $gt: string;
                $gte: string;
                $lt: string;
                $lte: string;
                $ne: string;
                $in: string[];
                $nin: string[];
            } & {
                $regex: string;
                $options: string;
            }> | undefined;
            customer?: string | {} | Partial<{
                $gt: string | {};
                $gte: string | {};
                $lt: string | {};
                $lte: string | {};
                $ne: string | {};
                $in: (string | {})[];
                $nin: (string | {})[];
            } & {}> | undefined;
            totalPaid?: number | Partial<{
                $gt: number;
                $gte: number;
                $lt: number;
                $lte: number;
                $ne: number;
                $in: number[];
                $nin: number[];
            } & {}> | undefined;
            discount?: number | Partial<{
                $gt: number;
                $gte: number;
                $lt: number;
                $lte: number;
                $ne: number;
                $in: number[];
                $nin: number[];
            } & {}> | undefined;
        }[];
    })[];
    $or: {
        detail?: {
            book: string | {};
            qty: number;
            price: number;
        }[] | Partial<{
            $gt: {
                book: string | {};
                qty: number;
                price: number;
            }[];
            $gte: {
                book: string | {};
                qty: number;
                price: number;
            }[];
            $lt: {
                book: string | {};
                qty: number;
                price: number;
            }[];
            $lte: {
                book: string | {};
                qty: number;
                price: number;
            }[];
            $ne: {
                book: string | {};
                qty: number;
                price: number;
            }[];
            $in: {
                book: string | {};
                qty: number;
                price: number;
            }[][];
            $nin: {
                book: string | {};
                qty: number;
                price: number;
            }[][];
        } & {}> | undefined;
        date?: number | Partial<{
            $gt: number;
            $gte: number;
            $lt: number;
            $lte: number;
            $ne: number;
            $in: number[];
            $nin: number[];
        } & {}> | undefined;
        _id?: string | {} | Partial<{
            $gt: string | {};
            $gte: string | {};
            $lt: string | {};
            $lte: string | {};
            $ne: string | {};
            $in: (string | {})[];
            $nin: (string | {})[];
        } & {}> | undefined;
        sellId?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        } & {
            $regex: string;
            $options: string;
        }> | undefined;
        customer?: string | {} | Partial<{
            $gt: string | {};
            $gte: string | {};
            $lt: string | {};
            $lte: string | {};
            $ne: string | {};
            $in: (string | {})[];
            $nin: (string | {})[];
        } & {}> | undefined;
        totalPaid?: number | Partial<{
            $gt: number;
            $gte: number;
            $lt: number;
            $lte: number;
            $ne: number;
            $in: number[];
            $nin: number[];
        } & {}> | undefined;
        discount?: number | Partial<{
            $gt: number;
            $gte: number;
            $lt: number;
            $lte: number;
            $ne: number;
            $in: number[];
            $nin: number[];
        } & {}> | undefined;
    }[];
}> & {
    detail?: {
        book: string | {};
        qty: number;
        price: number;
    }[] | Partial<{
        $gt: {
            book: string | {};
            qty: number;
            price: number;
        }[];
        $gte: {
            book: string | {};
            qty: number;
            price: number;
        }[];
        $lt: {
            book: string | {};
            qty: number;
            price: number;
        }[];
        $lte: {
            book: string | {};
            qty: number;
            price: number;
        }[];
        $ne: {
            book: string | {};
            qty: number;
            price: number;
        }[];
        $in: {
            book: string | {};
            qty: number;
            price: number;
        }[][];
        $nin: {
            book: string | {};
            qty: number;
            price: number;
        }[][];
    } & {}> | undefined;
    date?: number | Partial<{
        $gt: number;
        $gte: number;
        $lt: number;
        $lte: number;
        $ne: number;
        $in: number[];
        $nin: number[];
    } & {}> | undefined;
    _id?: string | {} | Partial<{
        $gt: string | {};
        $gte: string | {};
        $lt: string | {};
        $lte: string | {};
        $ne: string | {};
        $in: (string | {})[];
        $nin: (string | {})[];
    } & {}> | undefined;
    sellId?: string | Partial<{
        $gt: string;
        $gte: string;
        $lt: string;
        $lte: string;
        $ne: string;
        $in: string[];
        $nin: string[];
    } & {
        $regex: string;
        $options: string;
    }> | undefined;
    customer?: string | {} | Partial<{
        $gt: string | {};
        $gte: string | {};
        $lt: string | {};
        $lte: string | {};
        $ne: string | {};
        $in: (string | {})[];
        $nin: (string | {})[];
    } & {}> | undefined;
    totalPaid?: number | Partial<{
        $gt: number;
        $gte: number;
        $lt: number;
        $lte: number;
        $ne: number;
        $in: number[];
        $nin: number[];
    } & {}> | undefined;
    discount?: number | Partial<{
        $gt: number;
        $gte: number;
        $lt: number;
        $lte: number;
        $ne: number;
        $in: number[];
        $nin: number[];
    } & {}> | undefined;
} & {}, HookContext>;
