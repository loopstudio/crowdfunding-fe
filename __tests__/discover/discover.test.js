import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Discover from "../../pages/discover";

describe("Discover page", () => {
  it("renders the text Discover", () => {
    render(<Discover />);

    expect(screen.getByText("Discover")).toHaveTextContent("Discover");
  });
});
