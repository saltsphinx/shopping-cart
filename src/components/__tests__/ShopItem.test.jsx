import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import ShopItem from "../ShopItem";
import { expect, it } from "vitest";

it("Buttons increment and decrement input on click", async () => {
  const user = userEvent.setup();
  const product = {};
  const handleDelete = () => {};
  render(<ShopItem product={product} handleDelete={handleDelete} />);

  const input = screen.getByDisplayValue("1");
  const incrementBtn = screen.getByRole("button", { name: "+" });
  const decrementBtn = screen.getByRole("button", { name: "-" });

  await user.click(incrementBtn);
  expect(input).toHaveValue(2);

  await user.click(decrementBtn);
  expect(input).toHaveValue(1);
});

it("It doesn't allow for values below 1 when decrement is clicked", async () => {
  const user = userEvent.setup();
  const product = {};
  const handleDelete = () => {};
  render(<ShopItem product={product} handleDelete={handleDelete} />);

  const input = screen.getByDisplayValue("1");
  const decrementBtn = screen.getByRole("button", { name: "-" });

  await user.click(decrementBtn);
  expect(input).toHaveValue(1);
});

it("It doesn't allow for values below 1 when input is typed", async () => {
  const user = userEvent.setup();
  const product = {};
  const handleDelete = () => {};
  render(<ShopItem product={product} handleDelete={handleDelete} />);

  const input = screen.getByDisplayValue("1");

  await user.click(input);
  await user.keyboard("{Backspace}");
  expect(input).toHaveValue(1);
});
