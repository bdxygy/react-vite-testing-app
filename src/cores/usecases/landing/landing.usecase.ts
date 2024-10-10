import { BaseResponse } from "../../entities/domains/base-response.domain";
import { Usecase } from "../../entities/domains/usecase.domain";
import { ProductDomain } from "../../entities/domains/product.domain";
import { Service } from "../../entities/domains/service.domain";

export class LandingUsecase implements Usecase {
  constructor(private readonly productService: Service) {}

  execute(): Promise<BaseResponse<ProductDomain[]>> { // LandingPresenter
    return this.productService.get();
  }

  getByID() {
    return this.productService.getById(1);
  }
}
