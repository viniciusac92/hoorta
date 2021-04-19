import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "../components/atoms/Button";

describe("When everything is ok", () => {
  test("When user clicks button input value will be submitted", async () => {
    render(<Button size="large" />);

    userEvent.click(screen.getByRole("button"));
  });
});
