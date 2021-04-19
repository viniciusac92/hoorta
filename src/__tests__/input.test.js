import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "../components/atoms/Input";

describe("When everything is ok", () => {
  test("When user fills input data is correct", async () => {
    render(<Input />);

    userEvent.type(screen.getByRole("textbox"), "Ana");
  });
});
