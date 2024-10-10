/* eslint-disable @typescript-eslint/no-explicit-any */
export abstract class Service {
    abstract get(): Promise<any>;
    abstract getById(param: any): Promise<any>;
}