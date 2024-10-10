import { BaseResponse } from "../../entities/domains/base-response.domain";
import { ProductDomain } from "../../entities/domains/product.domain";

export const get: BaseResponse<ProductDomain[]> = {
  status: {
    code: 200,
    message: "success",
  },

  data: [
    {
      id: 1,
      name: "product 1",
      price: 10000,
    },
    {
      id: 2,
      name: "product 2",
      price: 20000,
    },
  ],
};

export const getById: BaseResponse<ProductDomain> = {
  status: {
    code: 200,
    message: "success",
  },
  data: {
    id: 1,
    name: "product 1",
    price: 10000,
  },
};

export default {
  get,
  getById,
};
