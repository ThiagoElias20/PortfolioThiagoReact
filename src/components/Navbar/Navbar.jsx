import React from 'react';
import "./styles.css";

export function Navbar() {
    return (
      <header>
      <a href=".">th</a>
      <nav>
        <ul>
          <li class="active">Home</li>
          <li>Sobre</li>
          <li>Portfolio</li>
          <li>Contato</li>
        </ul>
      </nav>
    </header>
    );
}