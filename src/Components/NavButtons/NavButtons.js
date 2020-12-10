import React from 'react'
import "./NavButtons.css"
const navButtons = (props) => (
    <button className="navButton" onClick={props.clicked}>{props.category}</button>
)
export default navButtons