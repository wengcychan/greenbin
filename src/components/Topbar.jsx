import logo from '../images/greenbin/logo.png'
import profilePic from '../images/profile_pic.png'
import './Topbar.css'
import { useMediaQuery } from 'react-responsive'

const Topbar = () => {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })

  return (
    <>
      <div className='topbar'>
        <div id='appNameContainer'>
          <img src={logo} alt='logo' width='38' height='32' style={ isTabletOrMobile ? { marginLeft: '20px' }: {}}/>
          <div id='appName'>GreenBin</div>
        </div>
        <div id='userInfo' style={ isTabletOrMobile ? { display: 'none' }: {} }>
          <span>Welcome,<span id='userName'>User123</span> !</span>
          <img src={profilePic} alt='profile picture' id='profilePic' />
        </div>
      </div>
    </>
  )
}

export default Topbar