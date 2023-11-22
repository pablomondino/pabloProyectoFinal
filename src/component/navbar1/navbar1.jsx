import React from 'react';
import { Link } from 'react-router-dom';

const NavBar1 = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/categoryId/modulares">Modulares</Link>
        </li>
        <li>
          <Link to="/categoryId/sillas">Sillas</Link>
        </li>
        {/* Agrega más categorías según sea necesario */}
      </ul>
    </nav>
  );
};

export default NavBar1;