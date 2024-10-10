import { HttpClientImpl } from "./http-impl.lib";
import { HttpClient } from "./http.lib";

export const httpClient: HttpClient = new HttpClientImpl();
