import type { Application } from '../../declarations';
import { SellsService } from './sells.class';
export declare const sellsPath = "sells";
export declare const sellsMethods: readonly ["find", "get", "create", "patch", "remove"];
export * from './sells.class';
export * from './sells.schema';
export declare const sells: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        [sellsPath]: SellsService;
    }
}
