import React from "react";
import { render, screen } from "@testing-library/react";
import Favorites from "@/pages/favorites";
import { Provider } from "react-redux";
import { store } from "@/store/store";

describe("Favorites component", () => {
  test("Renders 'Favorites' title", () => {
    render(
      <Provider store={store}>
        <Favorites />
      </Provider>
    );
    const titleElement = screen.getByText(/Favorites/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("Displays 'You have no favorite product' when there are no favorite products", () => {
    render(
      <Provider store={store}>
        <Favorites />
      </Provider>
    );
    const noFavoriteProductText = screen.getByText(
      /You have no favorite product/i
    );
    expect(noFavoriteProductText).toBeInTheDocument();
  });

  test("Displays favorite products when there are favorite products", () => {
    const favoriteProducts = [
      { id: 1, name: "Product 1", price: 10 },
      { id: 2, name: "Product 2", price: 20 },
    ];
    render(
      <Provider store={store}>
        <Favorites />
      </Provider>
    );

    favoriteProducts.forEach((product) => {
      const productCardElement = screen.getByText(product.name);
      expect(productCardElement).toBeInTheDocument();
    });
  });

  test("Renders shopping cart component", () => {
    render(
      <Provider store={store}>
        <Favorites />
      </Provider>
    );
    const shoppingCartElement = screen.getByText(/Shopping Cart/i);
    expect(shoppingCartElement).toBeInTheDocument();
  });

  test("Renders checkout component", () => {
    render(
      <Provider store={store}>
        <Favorites />
      </Provider>
    );
    const checkoutElement = screen.getByText(/Check Out/i);
    expect(checkoutElement).toBeInTheDocument();
  });

  test("Renders product cards with correct details", () => {
    const favoriteProducts = [
      { id: 1, name: "Product 1", price: 10 },
      { id: 2, name: "Product 2", price: 20 },
    ];
    render(
      <Provider store={store}>
        <Favorites />
      </Provider>
    );

    favoriteProducts.forEach((product) => {
      const productNameElement = screen.getByText(product.name);
      const productPriceElement = screen.getByText(
        new RegExp(product.price.toString(), "i")
      );
      expect(productNameElement).toBeInTheDocument();
      expect(productPriceElement).toBeInTheDocument();
    });
  });

  test("Does not render products when there are no favorites", () => {
    store.dispatch({ type: "favorites/clearFavorites" });

    render(
      <Provider store={store}>
        <Favorites />
      </Provider>
    );

    const productCards = screen.queryAllByTestId("product-card");
    expect(productCards).toHaveLength(0);
  });

  test("Renders checkout component with correct text", () => {
    render(
      <Provider store={store}>
        <Favorites />
      </Provider>
    );
    const checkoutElement = screen.getByText(/Check Out/i);
    expect(checkoutElement).toHaveTextContent("Check Out");
  });

  test("Renders shopping cart component with correct text", () => {
    render(
      <Provider store={store}>
        <Favorites />
      </Provider>
    );
    const shoppingCartElement = screen.getByText(/Shopping Cart/i);
    expect(shoppingCartElement).toHaveTextContent("Shopping Cart");
  });

  test("Renders product cards with correct text", () => {
    const favoriteProducts = [
      { id: 1, name: "Product 1", price: 10 },
      { id: 2, name: "Product 2", price: 20 },
    ];
    render(
      <Provider store={store}>
        <Favorites />
      </Provider>
    );

    favoriteProducts.forEach((product) => {
      const productNameElement = screen.getByText(product.name);
      const productPriceElement = screen.getByText(product.price.toString());
      expect(productNameElement).toHaveTextContent(product.name);
      expect(productPriceElement).toHaveTextContent(product.price.toString());
    });
  });

  test("Displays correct message when there are no favorites", () => {
    store.dispatch({ type: "favorites/clearFavorites" });

    render(
      <Provider store={store}>
        <Favorites />
      </Provider>
    );

    const noFavoritesMessage = screen.getByText(
      /You have no favorite product/i
    );
    expect(noFavoritesMessage).toBeInTheDocument();
  });

  test("Renders correct number of product cards", () => {
    const favoriteProducts = [
      { id: 1, name: "Product 1", price: 10 },
      { id: 2, name: "Product 2", price: 20 },
      { id: 3, name: "Product 3", price: 30 },
    ];
    render(
      <Provider store={store}>
        <Favorites />
      </Provider>
    );

    const productCards = screen.getAllByTestId("product-card");
    expect(productCards).toHaveLength(favoriteProducts.length);
  });

  test("Renders correct number of product cards when there are no favorites", () => {
    store.dispatch({ type: "favorites/clearFavorites" });

    render(
      <Provider store={store}>
        <Favorites />
      </Provider>
    );

    const productCards = screen.queryAllByTestId("product-card");
    expect(productCards).toHaveLength(0);
  });
});
