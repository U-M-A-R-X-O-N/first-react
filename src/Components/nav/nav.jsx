import './nav.css';

const Nav = () => {
  return (
    <ul className='novalidate'>
      <li className='novalidate__list'>
        <a className='novalidate__link' href="#link">About Us</a>
      </li>
      <li className="novalidate__list">
        <a className='novalidate__link' href="#link">Courses</a>
      </li>
      <li className="novalidate__list">
        <a className='novalidate__link' href="#link">Events</a>
      </li>
      <li className="novalidate__list">
        <a className='novalidate__link' href="#link">Blog</a>
      </li>
      <li className="novalidate__list">
        <a className='novalidate__link' href="#link">Contacts</a>
      </li>
    </ul>
  )
}

export default Nav;

