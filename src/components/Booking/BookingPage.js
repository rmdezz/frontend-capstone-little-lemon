import { useEffect, useReducer } from "react";
import BookingForm from "./BookingForm";
import "./BookingPage.css";
import { fetchAPI } from "../../utils/fetchAPI";

/* It is a good practice to separate the reducer functions from
    the component that uses them. For example, if you have
    another component that needs to use the same 'updateTimes'
    and 'initializeTimes' functions, you can simply import
    them and reuse them without having to duplicate the
    code.
 */
/* const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(date));
    return (response.length !== 0) ? response : availableTimes;
}

const initializeTimes = initialTimes => [...initialTimes, ...fetchAPI(new Date())]; */

function availableTimesReducer(state, action) {
    switch (action.type) {
        case 'UPDATE_TIMES':
            const response = fetchAPI(new Date(action.date));
            return (response.length !== 0) ? response : state;
        case 'INITIALIZE_TIMES':
            const initialTimes = action.initialTimes;
            return [...initialTimes, ...fetchAPI(new Date())];
        default:
            return state;
    }
}

function BookingPage() {
    /* const [availableTimes, dispatchTimes] = useReducer(updateTimes, [], initializeTimes); */
    const [availableTimes, dispatchTimes] = useReducer(availableTimesReducer, []);

    const initializeTimes = (initialTimes) => {
        dispatchTimes({type: 'INITIALIZE_TIMES', initialTimes});
    }

    useEffect(() => {
        initializeTimes([]);
    }, []);


    return (
        <section className="booking-section">
            <h2 className="booking-heading">Table a reservation</h2>
            <BookingForm
                availableTimes={availableTimes}
                dispatchTimes={dispatchTimes}/>
        </section>
    );
}

export default BookingPage;