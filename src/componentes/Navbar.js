import React from "react";
import '../hojas-de-estilos/Navbar.css';
import AirBnbLogo from '../imagenes/airbnb-logo.jpeg';

export default function Navbar() {
  return (
    <nav>
        <img src={AirBnbLogo} alt='Logo de AirBnb' className='nav--logo'  />
    </nav>
  )
}
