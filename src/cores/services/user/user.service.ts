import { UserDomain } from "../../entities/domains/user.domain";
import userServiceMockData from "./user.mock";

export const get = async () => userServiceMockData.get;
export const getById = async () => userServiceMockData.getById;
export const create = async (user: UserDomain) =>
  userServiceMockData.create(user);

export default {
  get,
  getById,
  create,
};
