import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';
import Main from "./Main";

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();
})