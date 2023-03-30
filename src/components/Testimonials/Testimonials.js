import React from "react";
import customer1 from "../../customer1.jpg";
import customer2 from "../../customer2.jpg";
import customer3 from "../../customer3.jpg";
import "./Testimonials.css";

function Testimonials() {
    return (
        <section className="testimonials">
            <div className="container">
                <div className="section-header">
                    <h2 id="testimonials-title">Testimonials</h2>
                </div>
                <div className="testimonials-cards">
                    <div className="card">
                        <img src={customer1} alt="Customer 1"/>
                        <div className="card-content">
                            <h3>John Doe</h3>
                            <p className="review-text">"I had a great experience at Little Lemon. The food was amazing and the service was excellent. Highly recommended!"</p>
                            <div className="rating">
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src={customer2} alt="Customer 2"/>
                        <div className="card-content">
                            <h3>Bob Smith</h3>
                            <p className="review-text">"I had the best meal of my life at Little Lemon. The flavors were incredible and the presentation was stunning. I can't wait to come back!"</p>
                            <div className="rating">
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src={customer3} alt="Customer 3"/>
                        <div className="card-content">
                            <h3>Alice Johnson</h3>
                            <p className="review-text">"The food at Little Lemon is simply amazing. The chefs clearly put a lot of love and care into each dish, and it shows in the taste and presentation."</p>
                            <div className="rating">
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Testimonials;