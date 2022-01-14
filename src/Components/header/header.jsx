import './header.css'

import Nav from '../nav/nav';
import logotype from '../../Assets/image/logo.svg';


function Header () {
  return (
  <header className='header'>
    <div className='header__block container'>

      <a className='header__link-logo' href="#link">
        <img className='header__logotype' src={logotype} alt="this logotype" width='130' height='22' />
      </a>

      <Nav />

      <a className='header__get' href='#link'>Get consultation</a>

      <a className='header__login' href="#link">Log in / Register</a>
    </div>
  </header>
  )
}

export default Header;