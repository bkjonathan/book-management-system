import type { Application } from '../../declarations';
import { BooksService } from './books.class';
export declare const booksPath = "books";
export declare const booksMethods: readonly ["find", "get", "create", "patch", "remove"];
export * from './books.class';
export * from './books.schema';
export declare const books: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        [booksPath]: BooksService;
    }
}
