import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import HomePage from "@/pages";
import "@testing-library/jest-dom";

test("HomePage component renders", () => {
  render(<HomePage />);
  const headerElement = screen.getByText(/Products List/i);
  expect(headerElement).toBeInTheDocument();
});

test("Filter change is handled correctly", () => {
  render(<HomePage />);
  const brandCheckbox = screen.getByLabelText(/Ferrari/i);
  fireEvent.click(brandCheckbox);
  const productCard = screen.getByText(/Ferrari/i);
  expect(productCard).toBeInTheDocument();
});

test("Pagination functionality works correctly", () => {
  render(<HomePage />);
  const nextPageButton = screen.getByText(/Next/i);
  fireEvent.click(nextPageButton);
  const productCardOnNextPage = screen.queryByText(/First Product Name/i);
  expect(productCardOnNextPage).toBeNull();
});
