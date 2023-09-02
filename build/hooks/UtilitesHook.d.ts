import type { HookContext } from '../declarations';
export declare const changeDateToNumber: (key: string) => (context: HookContext) => Promise<void>;
export declare const populateAuthors: (context: HookContext) => Promise<void>;
export declare const populateCategories: (context: HookContext) => Promise<void>;
export declare const populatePublishers: (context: HookContext) => Promise<void>;
export declare const changeAuthorToId: (context: HookContext) => Promise<void>;
export declare const changeCategoryToId: (context: HookContext) => Promise<void>;
export declare const calculateSell: (context: HookContext) => Promise<void>;