import image from '../../Assets/image/computer.png'
import play from '../../Assets/image/play.png'

import './main.css';

function Main() {
  return (
    <main className="main">
      <div className='main__block container'>
        <div className="main__block-left">
          <span className='main__inline'>
            <img className='main__player' src={play} alt="" width="52" height='52' />
            Play showreel
          </span>

          <h1 className="main__heading">
            Enjoy stuying with Createx Online Courses
          </h1>

          <a href="#link" className="main__link-left">About us</a>
          <a href="#link" className="main__link-right">Explore courses</a>

        </div>

        <div className="main__block-right">
          <img className='main__image' src={image} alt="" width='450' height='auto' />
        </div>
      </div>
    </main>
  )
}

export default Main;