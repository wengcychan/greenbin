import { Link } from 'react-router-dom'
import { NavbarData } from '../assets/NavbarData'
import './Navbar.css'
import { IconContext } from 'react-icons'
import * as AiIcons from 'react-icons/ai'

const Navbar = () => {
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='nav-menu'>
          <ul>
            <li className='nav-menu-header'>
              <AiIcons.AiFillHome />
              <div id='location'>Hankaniemi 11</div>
            </li>
            <hr className="solid"/>
            {NavbarData.map((item, index) =>
              <li key={index} className='nav-text'>
                <Link to={item.path}>
                  {item.icon}
                  <span className='title'>{item.title}</span>
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
