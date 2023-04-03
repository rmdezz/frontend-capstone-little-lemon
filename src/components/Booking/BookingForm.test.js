import {fireEvent, render, screen, getAllByTestId, getByLabelText} from "@testing-library/react";
import BookingPage from "./BookingPage";
import BookingForm from "./BookingForm";
import {initializeTimes, updateTimes} from "./BookingForm";
import { fetchAPI } from "../../utils/fetchAPI";
import { useReducer, useEffect } from "react";
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


/* test('dispatching an update action should update the available times', () => {
    const initialArray = [];
    const testDate = new Date('2022-05-01');
    const updatedArray = fetchAPI(testDate);
    console.log('test:', updatedArray);
    const { result } = renderHook(() => useReducer(availableTimesReducer, initialArray));
    const [availableTimes, dispatchTimes] = result.current;

    const { getByLabelText, getAllByTestId } = render(<BookingForm
      availableTimes={availableTimes}
      dispatchTimes={dispatchTimes}
      formData={{ date: '', time: '', guests: '1', occasion: '' }}
      setFormData={jest.fn()}
      submitData={jest.fn()}
    />);

    // initialize the availableTimes state
    useEffect(() => {
        dispatchTimes({ type: 'INITIALIZE_TIMES', initialTimes: [] });
    }, []);

    // Get the options from the rest-time select element
    const restTimeSelect = getByLabelText('Choose time');
    const initialOptions = getAllByTestId('res-time').map(option => option.value);

    console.log("init:", initialOptions);

    // Change the date and get the new options from the rest-time select element
    fireEvent.change(getByLabelText('Choose date'), { target: { value: '2022-05-01' } });
    const updatedOptions = getAllByTestId('res-time').map(option => option.value);

    console.log("updated:", updatedOptions);

    // Compare the options before and after changing the date
    expect(initialOptions).not.toEqual(updatedOptions);
  }); */



/* test('initializeTimes returns the correct initial times array', () => {
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
});
 */


