import userService from "../user.service";
import userServiceMockData from "../user.mock";

jest.mock("../user.service");

const userSeriveMock = {
  get: userService.get as jest.MockedFunction<typeof userService.get>,
  getById: userService.getById as jest.MockedFunction<
    typeof userService.getById
  >,
  create: userService.create as jest.MockedFunction<typeof userService.create>,
};

describe("UserService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("should return a list of users", async () => {
    userSeriveMock.get.mockReturnValue(
      Promise.resolve(userServiceMockData.get)
    );

    const result = await userService.get();
    expect(result).toEqual(userServiceMockData.get);
  });

  it("should return a user by id", async () => {
    userSeriveMock.getById.mockReturnValue(
      Promise.resolve(userServiceMockData.getById)
    );

    const result = await userService.getById();

    expect(result).toEqual(userServiceMockData.getById);
  });

  it("should create a user", async () => {
    const user = {
      name: "John Doe",
      age: 30,
      email: "john.doe@example.com",
    };

    userSeriveMock.create.mockReturnValue(
      Promise.resolve(userServiceMockData.create(user))
    );

    const result = await userService.create(user);

    expect(result.data).toEqual(user);
  });
});
