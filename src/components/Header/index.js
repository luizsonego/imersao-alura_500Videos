import React from 'react';
import logo from '../../assets/images/logo.png'
import './styles.css'

import Button from '../ui/Button'

function Menu(){
  return (
    <nav className="Menu">
      <a href="/">
        <img src={logo} alt='logo' className="Logo"/>
      </a>

      <Button as="a" href="/">Novo Video</Button>
      
    </nav>
  )
}

export default Menu