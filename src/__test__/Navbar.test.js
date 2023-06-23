import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/NavBar";

describe("Navbar component", () => {
  test("render correctly", () => {
    const { container } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
