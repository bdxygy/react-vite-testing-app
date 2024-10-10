import { Usecase } from "../../entities/domains/usecase.domain";
import { productService } from "../../services/product";
import { LandingUsecase } from "./landing.usecase";

export const landingUsecase: Usecase = new LandingUsecase(productService);
