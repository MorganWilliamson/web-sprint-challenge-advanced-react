import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)

    screen.getByText(/checkout form/i)
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)

    const firstNameInput = screen.getByLabelText(/First Name/i)
    fireEvent.change(firstNameInput, {target: {value: "Morgan"}})

    const lastNameInput = screen.getByLabelText(/Last Name/i)
    fireEvent.change(lastNameInput, {target: {value: "Williamson"}})

    const addressInput = screen.getByLabelText(/Address/i)
    fireEvent.change(addressInput, {target: {value: "1234 Real Road"}})

    const cityInput = screen.getByLabelText(/City/i)
    fireEvent.change(cityInput, {target: {value: "Notfaketon"}})

    const stateInput = screen.getByLabelText(/State/i)
    fireEvent.change(stateInput, {target: {value: "Washington"}})

    const zipInput = screen.getByLabelText(/Zip/i)
    fireEvent.change(zipInput, {target: {value: "12345"}})

    const submitButton = screen.getByRole("button", /Checkout/i)
    fireEvent.click(submitButton)    

    expect(screen.getByText(/Morgan/i)).toBeInTheDocument()
    expect(screen.getByText(/Williamson/i)).toBeInTheDocument()
    expect(screen.getByText(/1234 Real Road/i)).toBeInTheDocument()
    expect(screen.getByText(/Notfaketon/i)).toBeInTheDocument()
    expect(screen.getByText(/Washington/i)).toBeInTheDocument()
    expect(screen.getByText(/12345/i)).toBeInTheDocument()
});
