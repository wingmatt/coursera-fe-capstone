import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './BookingForm';
import {jest} from '@jest/globals';
import { BrowserRouter } from "react-router-dom";

test('Renders the BookingForm heading', () => {
    render(<BrowserRouter><BookingForm /></BrowserRouter>);
    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();
})

test('Form can be submitted', () => {
    const handleSubmit = jest.fn();
    render(<BrowserRouter><BookingForm onSubmit={handleSubmit} /></BrowserRouter>);
    fireEvent.submit(screen.getByRole("form"));
    expect(handleSubmit).toHaveBeenCalled()
})

test('Reservation submission is disabled when form is invalid', () => {
    render(<BrowserRouter><BookingForm /></BrowserRouter>);
    // ensure at least one required field is not set
    screen.getByLabelText("Choose date").value = undefined;
    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeDisabled();
})