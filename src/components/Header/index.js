import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './styles.css';

import Button from '../ui/Button';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img src={logo} alt="logo" className="Logo" />
      </Link>

      <Button as={Link} to="/cadastro/video">Novo Video</Button>

    </nav>
  );
}

export default Menu;
