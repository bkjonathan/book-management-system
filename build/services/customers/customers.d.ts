import type { Application } from '../../declarations';
import { CustomersService } from './customers.class';
export declare const customersPath = "customers";
export declare const customersMethods: readonly ["find", "get", "create", "patch", "remove"];
export * from './customers.class';
export * from './customers.schema';
export declare const customers: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        [customersPath]: CustomersService;
    }
}
