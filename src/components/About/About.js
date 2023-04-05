import React from "react";
import image1 from "../../owners1.jpg";
import image2 from "../../owners2.jpg";
import "./About.css";

function About() {
    return (
        <section className="about" aria-labelledby="about-title">
            <div className="about-container">
                <div className="about-text">
                    <div className="about-header">
                        <h2 id="about-title" className="visually-hidden">Little Lemon</h2>
                        <h3>Chicago</h3>
                    </div>
                    <div className="about-content">
                        <p>
                            Little Lemon is a family-owned restaurant located in the heart of
                            Chicago. Our passion for great food and service has made us a local
                            favorite for over 30 years. Our menu features a wide variety of
                            dishes, ranging from classic American fare to international
                            specialties.
                        </p>
                    </div>
                </div>
                <div className="about-images">
                    <img src={image1} alt="Mario and Adrian A"/>
                    <img src={image2} alt="Mario and Adrian B"/>
                </div>
            </div>
        </section>
    )
}

export default About;