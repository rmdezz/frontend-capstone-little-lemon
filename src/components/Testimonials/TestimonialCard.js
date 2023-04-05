import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar as fullStar} from '@fortawesome/free-solid-svg-icons';
import {faStarHalfStroke as halfStar} from '@fortawesome/free-solid-svg-icons';
import "./TestimonialCard.css";

const ratingLevels = { '0.5': halfStar, '1': fullStar};

function TestimonialCard({testimonial}) {
    return (
        <article className="card">
            <img src={testimonial.profilePicture} alt={`${testimonial.name}'s profile`}/>
            <div className="card-content">
                <h3>{testimonial.name}</h3>
                <blockquote className="review-text">{testimonial.text}</blockquote>
                <div className="rating" aria-label={`Rating: ${testimonial.rating.reduce((a, b) => a + b)} stars`}>
                    {testimonial.rating.map((rating, index) => (
                        <FontAwesomeIcon className="star" key={index} icon={ratingLevels[rating]}/>
                    ))}
                </div>
            </div>
        </article>
    );
}

export default TestimonialCard;