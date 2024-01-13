import logo from '../assets/greenbin/logo.png'
import { user } from '../data/user'
import styled from 'styled-components'
import { device } from '../styles/BreakPoints'

const Topbar = () => (
  <Container>
    <Logo>
      <img src={logo} alt='logo' width='38' height='32'/>
      <span>GreenBin</span>
    </Logo>
    <UserInfo>
      <span>
        Welcome, 
        <span className='userName'>{user.username}</span>
        !
      </span>
      <img src={user.icon.src} alt={user.icon.alt} width='38' height='38'/>
    </UserInfo>
  </Container>
)

const Container = styled.div`
  padding: 0 3em;
  display: flex;
  justify-content: space-between;
  background-color: ${({theme}) => theme.colors.topbarBackground};
  height: ${({theme}) => theme.layout.topbarHeight};
  color: ${({theme}) => theme.colors.white};
`

const Logo = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-left: 8px;
    font-size: ${({theme}) => theme.fontSizes.extraLarge};
    font-weight: bold;
  }
`

const UserInfo = styled.div`
  display: flex;
  align-items: center;

  .userName {
    margin-left: 5px;
    font-weight: bold;
  }

  img {
    border-radius: 50%;
    margin-left: 15px;
  }

  @media ${device.sm} {
    display: none;
  }
`

export default Topbar