export type BaseResponse<T> = {
  status: {
    code: number;
    message: string;
  };
  data: T;
};
