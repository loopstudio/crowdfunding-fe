import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Login from "../../pages/login/index.page";

describe("Login page", () => {
  it("renders the text Login", () => {
    render(<Login />);

    expect(screen.getByRole("heading")).toHaveTextContent("Login");
  });
});
