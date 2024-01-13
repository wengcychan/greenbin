import Topbar from './components/Topbar.jsx'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Facts from './pages/Facts'
import Ranking from './pages/Ranking'
import Tips from './pages/Tips'
import NoPage from './pages/NoPage'
import { GlobalStyles } from './styles/Global.js'
import { styled, ThemeProvider } from 'styled-components'
import { theme } from './styles/Theme.js'
import { device } from './styles/BreakPoints.js'

const App = () => {

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router basename="/greenbin">
          <Topbar />
          <Container>
            <Navbar />
              <Section>
                <Routes>
                  <Route path='/' exact element={<Dashboard />} />
                  <Route path='/facts' element={<Facts />} />
                  <Route path='/ranking' element={<Ranking />} />
                  <Route path='/tips' element={<Tips />} />
                  <Route path='*' element={<NoPage />} />
                </Routes>
              </Section>
          </Container>
        </Router>
      </ThemeProvider>
    </>
  )
}

const Container = styled.div`
  display: flex;
  min-height: ${({theme}) => theme.layout.contentHeight};

  @media ${device.md} {
    flex-direction: column;
  }
`

const Section = styled.section`
  flex: 4;
  padding: 3em;
`

export default App
