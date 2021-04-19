import { render, screen } from "@testing-library/react";
import Text from "../components/atoms/Text";

describe("When everything is ok", () => {
  test("When the text is correct", async () => {
    render(<Text>oiii</Text>);

    screen.getByText("oiii");
  });
});
