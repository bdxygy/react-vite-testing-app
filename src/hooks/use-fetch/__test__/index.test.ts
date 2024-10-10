import { useFetch } from "..";

import { initialMock, errorMock, loadingMock, secondMock } from "../mocks";

jest.mock("..");

const useFetchMock = useFetch as jest.MockedFunction<typeof useFetch>;
// let useFetchActual: typeof jest.requireActual<typeof useFetch>;

describe("useFetch", () => {
  beforeAll(() => {
    const useFetchActual = jest.requireActual("..").useFetch;
    useFetchActual("useFetch");
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it("should return initial mock", () => {
    useFetchMock.mockReturnValue(initialMock);
    const state = useFetch();
    expect(state).toEqual(initialMock);
  });

  it("should return error mock", () => {
    useFetchMock.mockReturnValue(errorMock);
    const state = useFetch();
    expect(state).toEqual(errorMock);
  });

  it("should return loading mock", () => {
    useFetchMock.mockReturnValue(loadingMock);
    const state = useFetch();
    expect(state).toEqual(loadingMock);
  });

  it("should return second mock", () => {
    useFetchMock.mockReturnValue(secondMock);
    const state = useFetch();
    expect(state).toEqual(secondMock);
  });
});
