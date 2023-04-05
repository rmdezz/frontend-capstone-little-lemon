import {fireEvent, render, screen, getAllByTestId, getByLabelText} from "@testing-library/react";
import BookingPage from "./BookingPage";
import BookingForm from "./BookingForm";
import {initializeTimes, updateTimes} from "./BookingForm";
import { fetchAPI } from "../../utils/fetchAPI";
import { useReducer, useEffect, useState } from "react";
import { renderHook } from '@testing-library/react';
import { availableTimesReducer } from "./BookingPage";
import { act } from 'react-dom/test-utils';

test('Renders the BookingForm heading', () => {
    render(<BookingPage/>);
    const headingElement = screen.getByText("Table a reservation");
    expect(headingElement).toBeInTheDocument();
});

test('initializeTimes returns a non-empty array', () => {
    const timesArray = fetchAPI(new Date());
    expect(timesArray.length).toBeGreaterThan(0);
});

function BookingFormWrapper(props) {
    const [formData, setFormData] = useState({
      date: '',
      time: '',
      guests: '',
      occasion: '',
    });

    return (
      <BookingForm
        formData={formData}
        setFormData={setFormData}
        {...props}
      />
    );
}

function BookingFormWrapperWithAvailableTimes(props) {
    const [formData, setFormData] = useState({
      date: '',
      time: '',
      guests: '',
      occasion: '',
    });

    const [availableTimes, dispatchTimes] = useReducer(availableTimesReducer, []);
    useEffect(() => {
            dispatchTimes({ type: 'INITIALIZE_TIMES', initialTimes: [] });
    }, []);

    return (
      <BookingForm
        formData={formData}
        setFormData={setFormData}
        availableTimes={availableTimes}
        dispatchTimes={dispatchTimes}
        {...props}
      />
    );
}

describe('BookingForm - Form validation', () => {
    test('HTML5 validation is applied to the date input field', () => {
        render(<BookingFormWrapper/>);
        const input = screen.getByLabelText('Choose date');
        expect(input).toHaveAttribute('type', 'date');
        expect(input).toHaveAttribute('id', 'date');
        expect(input).toHaveAttribute('required');
    });

    test('HTML5 validation is applied to the time select field', () => {
        render(<BookingFormWrapper/>);
        const select = screen.getByTestId('time');
        expect(select).toHaveAttribute('required');
    });

    test('HTML5 validation is applied to the number of guests input field', () => {
        render(<BookingFormWrapper/>);
        const input = screen.getByLabelText('Number of guests');
        expect(input).toHaveAttribute('required');
        expect(input).toHaveAttribute('min', '1');
        expect(input).toHaveAttribute('max', '10');
    });

    test('HTML5 validation is applied to the occasion select field', () => {
        render(<BookingFormWrapper/>);
        const select = screen.getByLabelText('Occasion');
        expect(select).toHaveAttribute('required');
    });

    test('Should display validation errors when form fields are invalid and the user has focused away from the field', () => {
        render(<BookingFormWrapper/>);
        const dateInput = screen.getByLabelText('Choose date');
        const timeSelect = screen.getByTestId('time');
        const guestsInput = screen.getByLabelText('Number of guests');
        const occasionSelect = screen.getByLabelText('Occasion');

        fireEvent.blur(dateInput);
        expect(screen.getByText('Please select a date')).toBeInTheDocument();

        fireEvent.blur(timeSelect);
        expect(screen.getByText('Please select a time')).toBeInTheDocument();

        fireEvent.blur(guestsInput);
        expect(screen.getByText('Please enter the number of guests')).toBeInTheDocument();

        fireEvent.blur(occasionSelect);
        expect(screen.getByText('Please select an occasion')).toBeInTheDocument();
    });

    test('Should not display validation errors for fields that are valid', () => {
        render(<BookingFormWrapperWithAvailableTimes/>);
        const dateInput = screen.getByLabelText('Choose date');
        const timeSelect = screen.getByTestId('time');
        const guestsInput = screen.getByLabelText('Number of guests');
        const occasionSelect = screen.getByLabelText('Occasion');

        fireEvent.change(dateInput, {target: {value: '2022-01-01'}});
        fireEvent.blur(dateInput);
        expect(screen.queryByText('Please select a date')).not.toBeInTheDocument();

        fireEvent.change(timeSelect, {target: {value: '17:00'}});
        fireEvent.blur(timeSelect);
        expect(screen.queryByText('Please select a time')).not.toBeInTheDocument();

        fireEvent.change(guestsInput, {target: {value: '5'}});
        fireEvent.blur(guestsInput);
        expect(screen.queryByText('Please enter the number of guests')).not.toBeInTheDocument();

        fireEvent.change(occasionSelect, {target: {value: 'Birthday'}});
        fireEvent.blur(occasionSelect);
        expect(screen.queryByText('Please select an occasion')).not.toBeInTheDocument();
    });

    test('Should display an error message when the number of guests is less than 1', () => {
        render(<BookingFormWrapperWithAvailableTimes/>);
        const guestsInput = screen.getByLabelText('Number of guests');
        fireEvent.change(guestsInput, {target: {value: '0'}});
        fireEvent.blur(guestsInput);
        expect(screen.getByText('Please enter a number between 1 and 10')).toBeInTheDocument();
    });

    test('Should display an error message when the number of guests is greater than 10', () => {
        render(<BookingFormWrapperWithAvailableTimes/>);
        const guestsInput = screen.getByLabelText('Number of guests');
        fireEvent.change(guestsInput, {target: {value: '11'}});
        fireEvent.blur(guestsInput);
        expect(screen.getByText('Please enter a number between 1 and 10')).toBeInTheDocument();
    });
});

describe('BookingForm - Form submision', () => {
    test('Should call submitData function with form data when form is submitted', () => {
        const mockSubmitData = jest.fn();
        const formData = {
            date: '2022-01-01',
            time: '17:00',
            guests: '5',
            occasion: 'Birthday',
        };
        render(<BookingForm formData={formData} submitData={mockSubmitData}/>);
        const submitButton = screen.getByRole('button', {name: /make your reservation/i});
        fireEvent.click(submitButton);
        expect(mockSubmitData).toHaveBeenCalledWith(formData);
    });
});