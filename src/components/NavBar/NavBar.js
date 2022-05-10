import React from 'react';
import './NavBar.css';

const NavBar= () =>{
  return (
    <nav style={{backgroundColor: 'lightgray', height: '70px' }}>
      <span className='menu-title'>Ecommerce Seba</span>
      <a className='menu-button' href="https://github.com/SebastianBiancoItPatagonia/ecommerce-react">Remeras</a>
      <a className='menu-button' href="https://github.com/SebastianBiancoItPatagonia/ecommerce-react">Pantalones</a>
      <a className='menu-button' href="https://github.com/SebastianBiancoItPatagonia/ecommerce-react">Zapatillas</a>
      <span className='login-title'><a className='login-anchor' href="https://mail.google.com">Login</a></span>
    </nav>
  );
}
export default NavBar;