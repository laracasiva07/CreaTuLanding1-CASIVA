import React from "react"
import "./NavBar.css"
import CardWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <header>
            <h1>Corralon Brochero</h1>
            <nav>
                <ul>
                    <li>Materiales de Construcion</li>
                    <li>Herramientas</li>
                    <li>Accesorios</li>
                </ul>
            </nav>

            <CardWidget/>

        </header>
    )
}
export default NavBar
