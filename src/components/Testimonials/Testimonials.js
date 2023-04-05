import React, { useState, useEffect } from "react";
import customer1 from "../../customer1.jpg";
import customer2 from "../../customer2.jpg";
import customer3 from "../../customer3.jpg";
import "./Testimonials.css";
import { fetchTestimonials } from "../../api/testimonialsAPI";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
    const [testimonials, setTestimonials] = useState([]);
    useEffect(() => {
        fetchTestimonials().then((data) => setTestimonials(data));
    }, []);

    return (
        <section className="testimonials" aria-labelledby="testimonials-title">
            <div className="container">
                <header className="section-header">
                    <h2 id="testimonials-title">Testimonials</h2>
                </header>
                <div className="testimonials-cards">
                    {testimonials.map((testimonial) => (
                        <TestimonialCard key={testimonial.id} testimonial={testimonial}/>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Testimonials;