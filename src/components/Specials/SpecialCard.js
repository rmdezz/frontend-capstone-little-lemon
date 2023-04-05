import React from "react";

function SpecialCard({special}) {
    return (
        <article className="card" aria-labelledby={`${special.name.replace(/ /g, "-").toLowerCase()}-title`}>
            <div className="card-image">
                <img src={special.image} alt={special.name}/>
            </div>
            <div className="card-content">
                <div className="dish-price">
                    <h3 id={`${special.name.replace(/ /g, "-").toLowerCase()}-title`}>{special.name}</h3>
                    <p className="price">Price: ${special.price.toFixed(2)}</p>
                </div>
                <p className="dish-description">{special.description}</p>
                <button className="btn-order" aria-label={`Order ${special.name} for delivery`}>Order a delivery</button>
            </div>
        </article>
    )
}

export default SpecialCard;