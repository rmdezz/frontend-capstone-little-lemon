import React, { useState } from "react";
import "./BookingForm.css";

function BookingForm({availableTimes, dispatchTimes, formData, setFormData, submitData}) {
    /* const [formData, setFormData] = useState({
        date: "",
        time: "",
        guests: "1",
        occasion: ""
    }); */

    /* const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('1');
    const [occasion, setOccasion] = useState(''); */

    const handleDateChange = (e) => {
        setFormData({...formData, date: e.target.value});
        /* setDate(e.target.value); */
        /* dispatchTimes(e.target.value); */
        dispatchTimes({type: 'UPDATE_TIMES', date: formData.date});
    };

    const handleTimeChange = (e) => {
        setFormData({...formData, time: e.target.value});
        /* setTime(e.target.value); */
    };

    const handleGuestsChange = (e) => {
        setFormData({...formData, guests: e.target.value});
        /* setGuests(e.target.value); */
    };

    const handleOccasionChange = (e) => {
        setFormData({...formData, occasion: e.target.value});
        /* setOccasion(e.target.value); */
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        submitData(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="booking-form">
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={formData.date} onChange={handleDateChange}/>

            <label htmlFor="res-time">Choose time</label>
            <select data-testid="res-time" id="res-time" value={formData.time} onChange={handleTimeChange}>
                {availableTimes && availableTimes.map(time => (
                    <option key={time} value={time}>{time}</option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input type="number" id="guests" value={formData.guests} min="1" max="10" onChange={handleGuestsChange}/>

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={formData.occasion} onChange={handleOccasionChange}>
                <option value="">Select an occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>

            <input className="btn-submit" id="btn-submit" type="submit" value="Make your reservation"/>
        </form>
    );
}

export default BookingForm;