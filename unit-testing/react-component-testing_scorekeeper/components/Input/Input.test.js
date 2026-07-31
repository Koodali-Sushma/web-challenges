import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", async () => {
  render(<Input labelText={"Name of game"} placeholder={"e.g. Dodelido"} />);
  const inputLabel = screen.getByLabelText("Name of game");
  expect(inputLabel).toBeInTheDocument();

  const placeholderValue = await screen.findByPlaceholderText("e.g. Dodelido");
  expect(placeholderValue).toHaveAttribute("placeholder", "e.g. Dodelido");
});

test("calls callback on every user input", async () => {});
