import { render, screen } from "@testing-library/react";
import { WithHook } from "..";
import { useFetch } from "../../../hooks/use-fetch";
import {
  initialMock,
  errorMock,
  loadingMock,
  secondMock,
} from "../../../hooks/use-fetch/mocks";

jest.mock("../../../hooks/use-fetch");

const useFetchMock = useFetch as jest.MockedFunction<typeof useFetch>;

useFetchMock.mockReturnValue(initialMock);

describe("with-hook", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should component render", () => {
    const component = render(<WithHook />);

    const h1 = screen.getByText("Samsudin");
    expect(h1).toBeInTheDocument();

    expect(component.container).toMatchSnapshot();
  });

  it("should component render with data Tester", () => {
    useFetchMock.mockReturnValue(secondMock);

    const component = render(<WithHook />);

    const h1 = screen.getByText("Sumarsih");

    expect(h1).toBeInTheDocument();

    expect(component.container).toMatchSnapshot();
  });

  it("should component render with error", () => {
    useFetchMock.mockReturnValue(errorMock);

    const component = render(<WithHook />);

    const h1 = screen.getByText("Error");
    expect(h1).toBeInTheDocument();

    expect(component.container).toMatchSnapshot();
  });

  it("should component render with loading", () => {
    useFetchMock.mockReturnValue(loadingMock);

    const component = render(<WithHook />);

    const h1 = screen.getByText("Loading...");
    expect(h1).toBeInTheDocument();

    expect(component.container).toMatchSnapshot();
  });
});
