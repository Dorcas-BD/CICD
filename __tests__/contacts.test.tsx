import React from "react";
import { render, screen } from "@testing-library/react";
import Contacts from "@/pages/contacts/page";

describe("Contacts Component", () => {
  it("renders contact information", () => {
    render(<Contacts />);

    const sectionTitle = screen.getByText(/contact/i);
    expect(sectionTitle).toBeInTheDocument();

    const emailTitle = screen.getByText(/email/i);
    const phoneNumberTitle = screen.getByText(/phone number/i);

    expect(emailTitle).toBeInTheDocument();
    expect(phoneNumberTitle).toBeInTheDocument();

    const emailValue = screen.getByText(/bamisiledorcas@gmail.com/i);
    const phoneNumberValue = screen.getByText(/\+2347057258425/i);

    expect(emailValue).toBeInTheDocument();
    expect(phoneNumberValue).toBeInTheDocument();

    const nameInput = screen.getByPlaceholderText(/name/i);
    const emailInput = screen.getByPlaceholderText(/email/i);
    const messageTextarea = screen.getByPlaceholderText(/message/i);
    const sendButton = screen.getByText(/send message/i);

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(messageTextarea).toBeInTheDocument();
    expect(sendButton).toBeInTheDocument();
  });
});
