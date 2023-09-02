import type { Application } from '../../declarations';
import { AuthorsService } from './authors.class';
export declare const authorsPath = "authors";
export declare const authorsMethods: readonly ["find", "get", "create", "patch", "remove"];
export * from './authors.class';
export * from './authors.schema';
export declare const authors: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        [authorsPath]: AuthorsService;
    }
}
