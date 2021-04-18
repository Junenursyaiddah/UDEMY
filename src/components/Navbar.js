import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return(
    <div style={nav}>
      <h1>Header</h1>
      <ul style={myUl}>
        <li><Link to="/" style={link}>Home</Link></li>
        <li><Link to="/about" style={link}>Aboout</Link></li>
        <li><Link to="/contact" style={link}>Contact</Link></li>
      </ul>
    </div>
  )
}

export default Navbar

const link = {
  textDecoration: "none",
  color: "#6b08d6"
}

const nav = {
  display: "flex",
  background: "#eedeff",
  padding: "0 6rem",
  justifyContent: "space-between",
  color: "#6b08d6",
  alignItems: "center"
}

const myUl = {
  listStyle: "none",
  display: "flex",
  justifyContent: "space-between",
  width: "20%"
}

