import logo from '../images/greenbin/logo.png'
import profilePic from '../images/profile_pic.png'
import './Topbar.css'

const Topbar = () => {
  return (
    <>
      <div className='topbar'>
        <div id='appNameContainer'>
          <img src={logo} alt='logo' width='38' height='32' />
          <div id='appName'>GreenBin</div>
        </div>
        <div id='userInfo'>
          <span>Welcome,<span id='userName'>User123</span> !</span>
          <img src={profilePic} alt='profile picture' id='profilePic' />
        </div>
      </div>
    </>
  )
}

export default Topbar