import { BaseResponse } from "../../entities/domains/base-response.domain";
import { UserDomain } from "../../entities/domains/user.domain";

export const get: BaseResponse<UserDomain[]> = {
  status: {
    code: 200,
    message: "success",
  },
  data: [
    {
      name: "John Doe",
      age: 30,
      email: "john.doe@example.com",
    },
    {
      name: "Jane Smith",
      age: 25,
      email: "jane.smith@example.com",
    },
    {
      name: "Bob Johnson",
      age: 35,
      email: "bob.johnson@example.com",
    },
  ],
};

export const getById: BaseResponse<UserDomain> = {
  status: {
    code: 200,
    message: "success",
  },
  data: {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
  },
};

export const create = async (user: UserDomain) => {
  return {
    status: {
      code: 201,
      message: "success",
    },
    data: user,
  };
};

export default {
  get,
  getById,
  create,
};
