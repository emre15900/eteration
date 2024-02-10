import React from "react";
import { render, waitFor } from "@testing-library/react";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import ProductDetail from "@/pages/products/[id]";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("ProductDetail Component", () => {
  const mockStore = configureStore();
  const initialState = {
    products: {
      products: [
        {
          id: "1",
          name: "Product 1",
          description: "Description for Product 1",
          price: 100,
        },
        {
          id: "2",
          name: "Product 2",
          description: "Description for Product 2",
          price: 200,
        },
      ],
      loading: false,
    },
  };
  const store = mockStore(initialState);

  it("should render 'Loading...' text when products are loading", async () => {
    const useRouterMock = useRouter as jest.Mock;
    useRouterMock.mockImplementation(() => ({
      query: { id: "1" },
    }));

    const { getByText } = render(
      <Provider store={store}>
        <ProductDetail />
      </Provider>
    );

    const loadingText = getByText("Loading...");
    expect(loadingText).toBeInTheDocument();
  });

  it("should render product details when products are loaded", async () => {
    const useRouterMock = useRouter as jest.Mock;
    useRouterMock.mockImplementation(() => ({
      query: { id: "1" },
    }));

    const { getByText } = render(
      <Provider store={store}>
        <ProductDetail />
      </Provider>
    );

    await waitFor(() => {
      const productName = getByText("Product 1");
      const productDescription = getByText("Description for Product 1");
      const productPrice = getByText("$100");

      expect(productName).toBeInTheDocument();
      expect(productDescription).toBeInTheDocument();
      expect(productPrice).toBeInTheDocument();
    });
  });
});
