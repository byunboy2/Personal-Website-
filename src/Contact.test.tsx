import React from "react";
import { act } from "react-dom/test-utils";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Contact from "./Contact";

describe("Contact component", () => {
  it("renders form with the correct fields and placeholder text", () => {
    const { getByPlaceholderText } = render(<Contact />);
    const nameField = getByPlaceholderText("Your name");
    const emailField = getByPlaceholderText("Your email");
    const messageField = getByPlaceholderText("Your message");
    expect(nameField).toBeInTheDocument();
    expect(emailField).toBeInTheDocument();
    expect(messageField).toBeInTheDocument();
  });

  it("has the correct initial values", () => {
    const { getByPlaceholderText } = render(<Contact />);
    const nameField = getByPlaceholderText("Your name") as HTMLInputElement;
    const emailField = getByPlaceholderText("Your email") as HTMLInputElement;
    const messageField = getByPlaceholderText(
      "Your message"
    ) as HTMLInputElement;
    expect(nameField.value).toBe("");
    expect(emailField.value).toBe("");
    expect(messageField.value).toBe("");
  });

  it("validates the form correctly", async () => {
    const { getByPlaceholderText, getByText } = render(<Contact />);
    const nameField = getByPlaceholderText("Your name");
    const emailField = getByPlaceholderText("Your email");
    const messageField = getByPlaceholderText("Your message");
    const submitButton = getByText("Submit");

    fireEvent.change(nameField, { target: { value: "a" } });
    fireEvent.change(emailField, { target: { value: "invalid" } });
    fireEvent.change(messageField, { target: { value: "hi" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        getByText("Name must be at least 2 characters long")
      ).toBeInTheDocument();
      expect(getByText("Invalid email address")).toBeInTheDocument();
      expect(
        getByText("Message must be at least 10 characters long")
      ).toBeInTheDocument();
    });
  });

  it("disables submit button while submitting",async () => {
    const { getByPlaceholderText, getByText } = render(<Contact />);
    const nameField = getByPlaceholderText("Your name");
    const emailField = getByPlaceholderText("Your email");
    const messageField = getByPlaceholderText("Your message");
    const submitButton = getByText("Submit");

    await act(() => {
      fireEvent.change(nameField, { target: { value: "John" } });
      fireEvent.change(emailField, { target: { value: "john@example.com" } });
      fireEvent.change(messageField, { target: { value: "Hello" } });
    });
    expect(submitButton).toBeEnabled();

    await act(()=>{
      fireEvent.click(submitButton);
    })

    expect(submitButton).toBeDisabled();
  });
});
