// import { BaseResponse } from "../../entities/domains/base-response.domain";
// import { ProductDomain } from "../../entities/domains/product.domain";
import { AxiosRequestConfig } from "axios";
import { Service } from "../../entities/domains/service.domain";
import { HttpClient } from "../../libs/http/http.lib";
import productMock from "./product.mock";

export class ProductService implements Service {
  constructor(private readonly http: HttpClient) {}

  async get() {
    return this.http.request({
      method: "GET",
      url: "/products",
      params: {
        limit: 10,
        offset: 0,
        sort: "-createdAt",
      },
    } as AxiosRequestConfig);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getById(id: number) {
    return productMock.getById;
  }
}
