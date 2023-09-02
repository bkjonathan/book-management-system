import type { Application } from '../../declarations';
import { CategoriesService } from './categories.class';
export declare const categoriesPath = "categories";
export declare const categoriesMethods: readonly ["find", "get", "create", "patch", "remove"];
export * from './categories.class';
export * from './categories.schema';
export declare const categories: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        [categoriesPath]: CategoriesService;
    }
}
