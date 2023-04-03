import {render, screen} from "@testing-library/react";
import BookingPage from "./BookingPage";
import {initializeTimes, updateTimes} from "./BookingForm";

test('Renders the BookingForm heading', () => {
    render(<BookingPage/>);
    const headingElement = screen.getByText("Table a reservation");
    expect(headingElement).toBeInTheDocument();
});

test('initializeTimes returns the correct initial times array', () => {
    const expectedArray = [
        { time: '17:00', isBooked: false},
        { time: '18:00', isBooked: false },
        { time: '19:00', isBooked: false },
        { time: '20:00', isBooked: false },
        { time: '21:00', isBooked: false },
        { time: '22:00', isBooked: false },
    ];
    expect(initializeTimes()).toEqual(expectedArray);
});

test('updateTimes returns the same array when no date is provided', () => {
    const initialArray = [
        { time: '17:00', isBooked: false},
        { time: '18:00', isBooked: false },
        { time: '19:00', isBooked: false },
        { time: '20:00', isBooked: false },
        { time: '21:00', isBooked: false },
        { time: '22:00', isBooked: false },
    ];
    expect(updateTimes()).toEqual(initialArray);
})



