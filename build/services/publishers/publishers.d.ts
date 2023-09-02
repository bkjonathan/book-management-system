import type { Application } from '../../declarations';
import { PublishersService } from './publishers.class';
export declare const publishersPath = "publishers";
export declare const publishersMethods: readonly ["find", "get", "create", "patch", "remove"];
export * from './publishers.class';
export * from './publishers.schema';
export declare const publishers: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        [publishersPath]: PublishersService;
    }
}
