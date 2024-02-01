import { render, screen } from "@testing-library/react";
import Cart from "../Cart";
import { expect, it } from "vitest";

const products = [
  {
    id: 1,
    price: 13.5,
  },
  {
    id: 2,
    price: 7,
  },
];

const cart = [
  {
    id: 1,
    quantity: 3,
  },
  {
    id: 2,
    quantity: 1,
  },
];

it("displays '$47.5' when cart has items", () => {
  render(<Cart products={products} cart={cart} />);

  const totalDisplay = screen.getByText("$47.5");

  expect(totalDisplay).toBeInTheDocument;
});

it("displays 'No items in your cart yet, do some shopping then come back!' when cart has items", () => {
  render(<Cart products={products} cart={[]} />);

  const noItemsPara = screen.getByText(
    "No items in your cart yet, do some shopping then come back!"
  );

  expect(noItemsPara).toBeInTheDocument;
});
