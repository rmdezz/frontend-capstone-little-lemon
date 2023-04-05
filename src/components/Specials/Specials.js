import React, {useState, useEffect} from "react";
import "./Specials.css";
import { fetchSpecials } from "../../api/specialsAPI";
import SpecialCard from "./SpecialCard";

function Specials() {
    const [specials, setSpecials] = useState([]);

    useEffect(() => {
        fetchSpecials().then((data) => setSpecials(data));
    }, []);

    return (
        <section className="specials">
            <div className="container">
                <div className="section-header">
                    <h2>This Weeks Specials!</h2>
                    <button className="btn-menu" aria-label="Online Menu">Online Menu</button>
                </div>
                <div className="specials-cards">
                    {specials.map((special) => (
                        <SpecialCard key={special.id} special={special}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Specials;