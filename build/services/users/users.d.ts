import type { Application } from '../../declarations';
import { UserService } from './users.class';
export declare const userPath = "users";
export declare const userMethods: readonly ["find", "get", "create", "patch", "remove"];
export * from './users.class';
export * from './users.schema';
export declare const user: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        [userPath]: UserService;
    }
}
