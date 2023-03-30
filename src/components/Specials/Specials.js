import React from "react";
import greeksalad from "../../greek-salad.jpg";
import bruschetta from "../../bruchetta.png";
import lemondessert from "../../lemon-dessert.jpg";
import "./Specials.css";

function Specials() {
    return (
        <section className="specials">
            <div className="container">
                <div className="section-header">
                    <h2>This Weeks Specials!</h2>
                    <button className="btn-menu">Online Menu</button>
                </div>
                <div className="specials-cards">
                    <div className="card">
                        <div className="card-image">
                            <img src={greeksalad} alt="Greek Salad"/>
                        </div>
                        <div className="card-content">
                            <div className="dish-price">
                                <h3>Greek Salad</h3>
                                <p className="price">Price: $12.99</p>
                            </div>
                            <p className="dish-description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                            <button className="btn-order">Order a delivery</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image">
                            <img src={bruschetta} alt="Bruschetta"/>
                        </div>
                        <div className="card-content">
                            <div className="dish-price">
                                <h3>Bruschetta</h3>
                                <p className="price">Price: $5.99</p>
                            </div>
                            <p className="dish-description">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                            <button className="btn-order">Order a delivery</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image">
                            <img src={lemondessert} alt="Lemon Dessert"></img>
                        </div>
                        <div className="card-content">
                            <div className="dish-price">
                                <h3>Lemon Dessert</h3>
                                <p className="price">Price: $5.00</p>
                            </div>
                            <p className="dish-description">This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                            <button className="btn-order">Order a delivery</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Specials;