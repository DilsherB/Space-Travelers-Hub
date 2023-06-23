import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import Myprofile from "../routes/MyProfile";
import store from "../redux/store";

describe("Test Profile components", () => {
  it("renders correctly", () => {
    const { container } = render(
      <Provider store={store}>
        <Myprofile />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
