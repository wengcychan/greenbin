import { Link } from 'react-router-dom'
import { navbarData } from '../data/navbarData'
import { IconContext } from 'react-icons'
import * as AiIcons from 'react-icons/ai'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import { user } from '../data/user'

const Navbar = () => (
  <Container>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Title>
          <AiIcons.AiFillHome />
          <span>{user.community}</span>
        </Title>
        <HorizontalBar />
        <ul>
          {navbarData.map((link) =>
            <li key={uuidv4()}>
              <NavLink to={link.path}>
                {link.icon}
                <span>{link.title}</span>
              </NavLink>
            </li>
          )}
        </ul>
      </IconContext.Provider>
  </Container>
)


const Container = styled.nav`
  background-color: ${({theme}) => theme.colors.navbarBackground};
  color: ${({theme}) => theme.colors.white};
  flex: 1;
`

const Title = styled.div`
  font-size: ${({theme}) => theme.fontSizes.large};
  display: flex;
  align-items: center;
  padding: 2em 0 2em 1.5em;

  span {
    margin-left: 10px;
    font-weight: bold;
  }
`

const HorizontalBar = styled.div`
  left: 50%;
  position: relative;
  transform: translate(-50%, -50%);
  width: 70%;
  border: 0.2px solid #373737;
  margin-bottom: 1.5em;
`

const NavLink = styled(Link)`
  font-size: ${({theme}) => theme.fontSizes.medium};
  height: 3em;
  display: flex;
  align-items: center;
  padding: 0 1em;
  margin: 1em;
  border-radius: 0.3em;

  span {
    margin-left: 0.8em;
  }

  &:hover {
    background-color: #07a255;
  }
`

export default Navbar
