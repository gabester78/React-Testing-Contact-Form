import React from "react";
import { render } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("test first input field", () => {
  const { getByText } = render(<ContactForm />);
  const input = getByText(/first name*/i);
  expect(input).toBeInTheDocument();
});

test("test second input field", () => {
  const { getByText } = render(<ContactForm />);
  const input = getByText(/Last name*/i);
  expect(input).toBeInTheDocument();
});

test("test third input field", () => {
  const { getByText } = render(<ContactForm />);
  const input = getByText(/Email*/i);
  expect(input).toBeInTheDocument();
});

test("test message input field", () => {
  const { getByText } = render(<ContactForm />);
  const input = getByText(/message/i);
  expect(input).toBeInTheDocument();
});
