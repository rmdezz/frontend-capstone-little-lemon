import React, { useState } from "react";
import "./BookingForm.css";

function BookingForm({availableTimes, dispatchTimes}) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('1');
    const [occasion, setOccasion] = useState('');

    const handleDateChange = (e) => {
        setDate(e.target.value);
        /* dispatchTimes(e.target.value); */
        dispatchTimes({type: 'UPDATE_TIMES', date});
    };

    const handleTimeChange = (e) => {
        setTime(e.target.value);
    };

    const handleGuestsChange = (e) => {
        setGuests(e.target.value);
    };

    const handleOccasionChange = (e) => {
        setOccasion(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
    };

    return (
        <form onSubmit={handleSubmit} className="booking-form">
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={handleDateChange}/>

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={handleTimeChange}>
                {availableTimes && availableTimes.map(time => (
                    <option key={time} value={time}>{time}</option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input type="number" id="guests" value={guests} min="1" max="10" onChange={handleGuestsChange}/>

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={handleOccasionChange}>
                <option value="">Select an occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>

            <input className="btn-submit" id="btn-submit" type="submit" value="Make your reservation"/>
        </form>
    );
}

export default BookingForm;