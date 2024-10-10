/* eslint-disable @typescript-eslint/no-explicit-any */
export abstract class HttpClient {
  abstract request(params: any): Promise<any>;
}
