import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

test("renders App without crashing", () => {
  render(<App />);
});

test("test first input field", () => {
  const { getByLabelText } = render(<ContactForm />);
  const input = getByLabelText(/first name*/i);
  fireEvent.change(input, { target: { value: "Gab" } });
  expect(input).toBeInTheDocument();
});

test("test second input field", () => {
  const { getByLabelText } = render(<ContactForm />);
  const input = getByLabelText(/Last name*/i);
  fireEvent.change(input, { target: { value: "Romero" } });
  expect(input).toBeInTheDocument();
});

test("test third input field", () => {
  const { getByLabelText } = render(<ContactForm />);
  const input = getByLabelText(/Email*/i);
  fireEvent.change(input, { target: { value: "gabester78@gmail.com" } });
  expect(input).toBeInTheDocument();
});

test("test message input field", () => {
  const { getByLabelText } = render(<ContactForm />);
  const input = getByLabelText(/message/i);
  fireEvent.change(input, { target: { value: "Hello World!" } });
  expect(input).toBeInTheDocument();
});

test("checking if form can be filled in and subitted", () => {
  const { getByLabelText, getByText, getByTestId } = render(<ContactForm />);

  fireEvent.change(getByLabelText(/first name*/i), {
    target: { value: "Gab" },
  });
  fireEvent.change(getByLabelText(/Last name*/i), {
    target: { value: "Romero" },
  });
  fireEvent.change(getByLabelText(/Email*/i), {
    target: { value: "gabester78@gmail.com" },
  });
  fireEvent.change(getByLabelText(/message/i), {
    target: { value: "Hello World!" },
  });

  const subBtn = getByTestId("submit");
  fireEvent.click(subBtn);
});
