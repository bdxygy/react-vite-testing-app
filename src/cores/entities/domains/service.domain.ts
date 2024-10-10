/* eslint-disable @typescript-eslint/no-explicit-any */
export type Service = {
  get(): Promise<any>;
  getById(param: any): Promise<any>;
};
