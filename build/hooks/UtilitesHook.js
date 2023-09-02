"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateSell = exports.changeCategoryToId = exports.changeAuthorToId = exports.populatePublishers = exports.populateCategories = exports.populateAuthors = exports.changeDateToNumber = void 0;
const changeDateToNumber = (key) => {
    return async (context) => {
        if (context.data && context.data[key]) {
            context.data[key] = new Date(context.data[key]).valueOf();
        }
    };
};
exports.changeDateToNumber = changeDateToNumber;
const populateAuthors = async (context) => {
    context.params.pipeline = [
        {
            $lookup: {
                from: 'authors',
                localField: 'authors',
                foreignField: '_id',
                as: 'authors'
            }
        }
    ];
};
exports.populateAuthors = populateAuthors;
const populateCategories = async (context) => {
    context.params.pipeline = [
        ...context.params.pipeline,
        {
            $lookup: {
                from: 'categories',
                localField: 'categories',
                foreignField: '_id',
                as: 'categories'
            }
        },
        { $unwind: { path: '$categories' } }
    ];
};
exports.populateCategories = populateCategories;
const populatePublishers = async (context) => {
    context.params.pipeline = [
        ...context.params.pipeline,
        {
            $lookup: {
                from: 'publishers',
                localField: 'publisher',
                foreignField: '_id',
                as: 'publisher'
            }
        },
        { $unwind: { path: '$publisher' } }
    ];
};
exports.populatePublishers = populatePublishers;
const changeAuthorToId = async (context) => {
    if (context.params.query?.authors && !Array.isArray(context.params.query?.authors)) {
        const keyword = context.params.query.authors;
        const getAuthors = await context.app.service('authors').find({
            query: {
                name: {
                    $regex: keyword,
                    $options: 'i'
                }
            }
        });
        if (getAuthors.total) {
            context.params.query.authors = getAuthors.data.map((v) => v._id);
        }
    }
};
exports.changeAuthorToId = changeAuthorToId;
const changeCategoryToId = async (context) => {
    if (context.params.query?.categories) {
        const keyword = context.params.query.categories;
        const getCategories = await context.app.service('categories').find({
            query: {
                name: {
                    $regex: keyword,
                    $options: 'i'
                }
            }
        });
        if (getCategories.total) {
            context.params.query.categories = getCategories.data.map((v) => v._id.toString())[0];
        }
    }
};
exports.changeCategoryToId = changeCategoryToId;
const calculateSell = async (context) => {
    if (context.data && Object.keys(context.data).length && context.data.detail?.length) {
        context.data.netTotal = context.data.detail.reduce((total, item) => total += (item.qty * item.price), 0);
        context.data.total = context.data.netTotal - context.data.discount;
        context.data.totalReturn = (context.data.totalPaid - context.data.netTotal) + context.data.discount;
    }
};
exports.calculateSell = calculateSell;
//# sourceMappingURL=UtilitesHook.js.map