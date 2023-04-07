import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './BookingForm';
import {jest} from '@jest/globals';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();
})

test('Form can be submitted', () => {
    const handleSubmit = jest.fn();
    render(<BookingForm onSubmit={handleSubmit} />);
    fireEvent.submit(screen.getByRole("form"));
    expect(handleSubmit).toHaveBeenCalled()
})