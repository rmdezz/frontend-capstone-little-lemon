import { useEffect, useReducer, useState } from "react";
import BookingForm from "./BookingForm";
import "./BookingPage.css";
import { fetchAPI, submitAPI } from "../../utils/fetchAPI";
import { useNavigate } from "react-router-dom";
import ConfirmedBooking from "./ConfirmedBooking";
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

export function availableTimesReducer(state, action) {
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
    /* const navigate = useNavigate(); */

    /* const [availableTimes, dispatchTimes] = useReducer(updateTimes, [], initializeTimes); */
    const [availableTimes, dispatchTimes] = useReducer(availableTimesReducer, []);
    const [formData, setFormData] = useState({
        date: "",
        time: "",
        guests: "1",
        occasion: ""
    });
    const [bookingConfirmed, setBookingConfirmed] = useState(false);

    useEffect(() => {
        dispatchTimes({ type: 'INITIALIZE_TIMES', initialTimes: [] });
      }, []);

    const submitData = formData => {
        const response = submitAPI(formData);
        if (response) {
            /* navigate(`/booking-confirmed/${formData.date}/${formData.time}/${formData.guests}`); */
            setBookingConfirmed(true);
        }
    }

    return (
        <section className="booking-section">
            {bookingConfirmed ? <ConfirmedBooking data={formData}/> :
            <>
                <h2 className="booking-heading">Table a reservation</h2>
                <BookingForm
                    availableTimes={availableTimes}
                    dispatchTimes={dispatchTimes}
                    formData={formData}
                    setFormData={setFormData}
                    submitData={submitData}/>
            </>}
        </section>
    );
}

export default BookingPage;