import React from 'react'
import "./MenuItem.css"

const menuItem = ({ image, name, price, details }) => (
    <article className="menuItem">
        <div className="menuItem__image">
            <img className="image--style" src={image} alt={name} />
        </div>
        <div className="menuItem__details">
            <h4>
                <p>{name}</p>
                <span className="price">{price}</span>
            </h4>
            <p className="details">
                {details}
            </p>
        </div>
    </article>
)
export default menuItem