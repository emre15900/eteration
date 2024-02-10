import React from "react";
import { render } from "@testing-library/react";
import { useRouter } from "next/router";
import Products from "@/pages/products";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Products Component", () => {
  it("should redirect to home page", () => {
    const useRouterMock = useRouter as jest.Mock;
    useRouterMock.mockImplementation(() => ({
      push: jest.fn(),
    }));

    render(<Products />);

    expect(useRouterMock().push).toHaveBeenCalledWith("/");
  });

  it("should render 'Products' text", () => {
    const { getByText } = render(<Products />);
    const productsText = getByText("Products");
    expect(productsText).toBeInTheDocument();
  });
});
