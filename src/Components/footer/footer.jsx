import './footer.css'

function Footer() {
  return (
    <footer className="footer">
      <ul className="footer__unordered container">
        <li className="footer__list">
          <p className="footer__number">1200</p>
          <p className="footer__text">Students graduated</p>
        </li>

        <li className="footer__list">
          <p className="footer__number">84</p>
          <p className="footer__text">Completed courses</p>
        </li>

        <li className="footer__list">
          <p className="footer__number">16</p>
          <p className="footer__text">Qualified tutors</p>
        </li>

        <li className="footer__list">
          <p className="footer__number">5</p>
          <p className="footer__text">Years of experience</p>
        </li>
      </ul>
    </footer>
  )
}

export default Footer;