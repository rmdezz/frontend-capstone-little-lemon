import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import "./ConfirmedBooking.css";

const ConfirmedBooking = ({data}) => {
    /* const {date, time, guests} = useParams(); */

    return (
        <section className="confirmed-booking-section">
            <div className="confirmed-booking-wrapper">
                <h2 className="confirmed-booking-heading">Booking Confirmed</h2>
                <div className="confirmed-booking-content">
                    <div className="confirmed-booking-icon">
                        <FontAwesomeIcon icon={faCircleCheck} />
                    </div>
                    <div className="confirmed-booking-details">
                        <p className="confirmed-booking-message">Your booking for:</p>
                        <ul className="confirmed-booking-list">
                            <li className="confirmed-booking-data"><span className="confirmed-booking-label">Date:</span> {data.date}</li>
                            <li className="confirmed-booking-data"><span className="confirmed-booking-label">Time:</span> {data.time}</li>
                            <li className="confirmed-booking-data"><span className="confirmed-booking-label">Guests:</span> {data.guests}</li>
                        </ul>
                    </div>
                </div>
                <p className="confirmed-booking-thankyou">has been confirmed. Thank you for choosing Little Lemon!</p>
            </div>
        </section>
    )
}

export default ConfirmedBooking;
