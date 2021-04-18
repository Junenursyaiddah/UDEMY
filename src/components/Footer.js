import React from "react"

const Footer = () => {
  return(
    <div style={footer}>
      <h1>footer</h1>
    </div>
  )
}

export default Footer 

const footer = {
  display: "flex",
  background: "#eedeff",
  justifyContent: "center",
  color: "#6b08d6",
  alignItems: "center",
  position: "absolute",
  bottom: "0",
  width: "100%"
}



