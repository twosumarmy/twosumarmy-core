import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

test("renders upload a file", () => {
  render(<App />);
  const linkElement = screen.getByText(/Upload a file/i);
  expect(linkElement).toBeInTheDocument();
});
