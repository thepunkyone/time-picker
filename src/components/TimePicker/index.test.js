import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import TimePicker from "@/components/TimePicker/index";

const openMenuButton = () => screen.getByTestId("open-menu-button");

describe("TimePicker", () => {
  const setup = (props) => {
    const initialProps = {
      dateTime: "2023-05-09T00:00:45+01:00",
      onChange: () => {},
    };

    const combinedProps = {
      ...initialProps,
      ...props,
    };

    render(<TimePicker {...combinedProps} />);
  };

  it("renders with the correct placeholder", () => {
    setup();

    expect(openMenuButton()).toHaveTextContent("HH:MM");
  });

  it("updates button value when hours and minutes are selected from the menu", () => {
    setup();

    fireEvent.click(screen.getByRole("option", { name: "18" }));

    expect(openMenuButton()).toHaveTextContent("18:00");

    fireEvent.click(screen.getByRole("option", { name: "45" }));

    expect(openMenuButton()).toHaveTextContent("18:45");
  });

  it("updates parent state with the new date and time when hours and minutes are selected from the menu", () => {
    const mockOnChange = jest.fn();

    setup({ onChange: mockOnChange });

    fireEvent.click(screen.getByRole("option", { name: "45" }));
    fireEvent.click(screen.getByRole("option", { name: "18" }));

    expect(mockOnChange).toHaveBeenNthCalledWith(
      1,
      "2023-05-09T00:45:00+01:00"
    );
    expect(mockOnChange).toHaveBeenNthCalledWith(
      2,
      "2023-05-09T18:45:00+01:00"
    );
  });
});
