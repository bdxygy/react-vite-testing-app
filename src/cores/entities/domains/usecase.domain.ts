/* eslint-disable @typescript-eslint/no-explicit-any */
export type Usecase = {
  execute(params?: any): Promise<any>;
};
