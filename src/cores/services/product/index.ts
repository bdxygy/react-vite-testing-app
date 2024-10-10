import { Service } from "../service";
import { httpClient } from "../../libs/http";
import { ProductService } from "./product.service";

export const productService: Service = new ProductService(httpClient);
