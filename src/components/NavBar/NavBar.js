import React from 'react';
import './NavBar.css';
import CartWiddget from '../CartWidget/CartWidget.js';

const NavBar= () =>{
  return (
    <nav style={{backgroundColor: 'lightgray', height: '70px' }}>
      <h1 className='menu-title'>Ecommerce Seba</h1>
      <a className='menu-button' href="https://github.com/SebastianBiancoItPatagonia/ecommerce-react">Remeras</a>
      <a className='menu-button' href="https://github.com/SebastianBiancoItPatagonia/ecommerce-react">Pantalones</a>
      <a className='menu-button' href="https://github.com/SebastianBiancoItPatagonia/ecommerce-react">Zapatillas</a>
      <span className='login-title'><a className='login-anchor' href="https://mail.google.com">Login</a></span>
      <CartWiddget />
    </nav>
  );
}
export default NavBar;