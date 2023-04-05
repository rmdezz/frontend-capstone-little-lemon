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

    const [formErrors, setFormErrors] = useState({
        date: "",
        time: "",
        guests: "",
        occasion: "",
    });

    const [isBlurred, setIsBlurred] = useState({
        date: false,
        time: false,
        guests: false,
        occasion: false,
    });

    const [isFormValid, setIsFormValid] = useState(false);

    const updateFormValidity = () => {
        const isValid = !Object.values(formErrors).some((error) => error !== "");
        setIsFormValid(isValid);
    };

    const validateDate = () => {
        const errors = {};
        if (!formData.date) {
            errors.date = "Please select a date";
        } else {
            errors.date = "";
        }
        setFormErrors((prevState) => ({...prevState, ...errors}));
        updateFormValidity();
    }

    const validateTime = () => {
        const errors = {};
        if (!formData.time) {
            errors.time = "Please select a time";
        } else {
            errors.time = "";
        }
        setFormErrors((prevState) => ({...prevState, ...errors}));
        updateFormValidity();
    }

    const validateGuests = () => {
        const errors = {};
        if (!formData.guests) {
            errors.guests = "Please enter the number of guests";
        } else if (formData.guests < 1 || formData.guests > 10) {
            errors.guests = "Please enter a number between 1 and 10";
        } else {
            errors.guests = "";
        }
        setFormErrors((prevState) => ({...prevState, ...errors}));
        updateFormValidity();
    }

    const validateOccasion = () => {
        const errors = {};
        if (!formData.occasion) {
            errors.occasion = "Please select an occasion";
        } else {
            errors.occasion = "";
        }
        setFormErrors((prevState) => ({...prevState, ...errors}));
        updateFormValidity();
    }

    const handleBlur = (e) => {
        setIsBlurred((prevState) => ({...prevState, [e.target.id]: true}));
        switch (e.target.id) {
            case 'date':
                validateDate();
                break;
            case 'time':
                validateTime();
                break;
            case 'guests':
                validateGuests();
                break;
            case 'occasion':
                validateOccasion();
                break;
            default:
                break;
        };
    }

    const handleDateChange = (e) => {
        setFormData({...formData, date: e.target.value});
        /* setDate(e.target.value); */
        /* dispatchTimes(e.target.value); */
        dispatchTimes({type: 'UPDATE_TIMES', date: formData.date});
        updateFormValidity();
    };

    const handleTimeChange = (e) => {
        setFormData({...formData, time: e.target.value});
        updateFormValidity();
        /* setTime(e.target.value); */
    };

    const handleGuestsChange = (e) => {
        setFormData({...formData, guests: e.target.value});
        updateFormValidity();
        /* setGuests(e.target.value); */
    };

    const handleOccasionChange = (e) => {
        setFormData({...formData, occasion: e.target.value});
        updateFormValidity();
        /* setOccasion(e.target.value); */
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        submitData(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="booking-form">
            <label htmlFor="date">Choose date</label>
            <input type="date" id="date" required value={formData.date} onChange={handleDateChange} onBlur={handleBlur} {...(isBlurred.date && formErrors.date ? {"aria-describedby" : "date-error"} : {})}/>
            {isBlurred.date && formErrors.date && <div id="date-error" className="error">{formErrors.date}</div>}

            <label htmlFor="time">Choose time</label>
            <select data-testid="time" id="time" required value={formData.time} onChange={handleTimeChange} onBlur={handleBlur} {...(isBlurred.time && formErrors.time ? {"aria-describedby" : "time-error"} : {})}>
                {availableTimes && availableTimes.map(time => (
                    <option key={time} value={time}>{time}</option>
                ))}
            </select>
            {isBlurred.time && formErrors.time && <div id="time-error" className="error">{formErrors.time}</div>}

            <label htmlFor="guests">Number of guests</label>
            <input type="number" id="guests" required value={formData.guests} min="1" max="10" onChange={handleGuestsChange} onBlur={handleBlur} {...(isBlurred.guests && formErrors.guests ? {"aria-describedby" : "guests-error"} : {})}/>
            {isBlurred.guests && formErrors.guests && <div id="guests-error" className="error">{formErrors.guests}</div>}

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" required value={formData.occasion} onChange={handleOccasionChange} onBlur={handleBlur} {...(isBlurred.occasion && formErrors.occasion ? {"aria-describedby": "occasion-error"} : {})}>
                <option value="">Select an occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>
            {isBlurred.occasion && formErrors.occasion && <div id="occasion-error" className="error">{formErrors.occasion}</div>}

            <input className="btn-submit" id="btn-submit" type="submit" value="Make your reservation" disabled={!isFormValid}/>
        </form>
    );
}

export default BookingForm;