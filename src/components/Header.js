import React from 'react'

export default function Header() {

    return (
        <h1 style = {headerStyle}>Random Quote Generator</h1>
    )
}



const headerStyle = {
    background: "#42413c",
    color: "#fff",
    textAlign: "center",
    padding: "10px", 
    fontFamily: 'georgia'
};