import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookingForm from './BookingForm';
import {jest} from '@jest/globals';
import { BrowserRouter } from "react-router-dom";

const expectedTimes = [
    "17:00",
    "17:30",
    "20:00",
    "20:30",
    "22:30",
    "23:00",
    "23:30",
  ];

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

test('Reservation Date is invalid when empty', () => {
    render(<BrowserRouter><BookingForm /></BrowserRouter>);
    const resDate = screen.getByLabelText("Choose date");
    resDate.value = undefined;
    expect(resDate).toBeInvalid();
})
test('Reservation Date is valid when filled', () => {
    const availableTimes= jest.fn(() => ["17:00"]);
    const dispatch = jest.fn()
    render(<BrowserRouter><BookingForm availableTimes={availableTimes} dispatch={dispatch}/></BrowserRouter>);
    const resDateInput = screen.getByLabelText("Choose date");
    userEvent.type(resDateInput, "2023-04-07");
    expect(resDateInput).toBeValid();
})

test('Reservation Time is invalid before interaction', () => {
    render(<BrowserRouter><BookingForm availableTimes={expectedTimes}/></BrowserRouter>);
    const resTime = screen.getByLabelText("Choose time");
    expect(resTime).toBeInvalid();
})

test('Reservation Time is valid when filled', () => {
    render(<BrowserRouter><BookingForm availableTimes={expectedTimes}/></BrowserRouter>);
    const resTime = screen.getByLabelText("Choose time");
    userEvent.selectOptions(resTime, "17:00")
    expect(resTime).toBeValid();
})

test('Guests input is valid when filled', () => {
    render(<BrowserRouter><BookingForm /></BrowserRouter>);
    const guests = screen.getByLabelText("Number of guests");
    fireEvent.change(guests, {target: {value: "2"}})
    expect(guests).toBeValid();
})