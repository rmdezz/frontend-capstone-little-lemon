import React from "react";
import Hero from "./Hero/Hero";
import Specials from "./Specials/Specials";
import Testimonials from "./Testimonials/Testimonials";
import About from "./About/About";
import Homepage from "./Homepage";
import BookingPage from "./Booking/BookingPage";
import {Routes, Route} from "react-router-dom";

function Main() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/hero" element={<Hero/>}/>
                <Route path="/specials" element={<Specials/>}/>
                <Route path="/testimonials" element={<Testimonials/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/booking" element={<BookingPage/>}/>
            </Routes>
        </main>
    )
}

export default Main;