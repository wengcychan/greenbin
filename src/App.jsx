import './App.css'
import Topbar from './components/Topbar.jsx'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Facts from './pages/Facts'
import Ranking from './pages/Ranking'
import Tips from './pages/Tips'
import NoPage from './pages/NoPage'
import { useMediaQuery } from 'react-responsive'

const App = () => {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })

  return (
    <>
      <Router basename="/greenbin">
        <Topbar />
        <div className={ isTabletOrMobile ? 'mediaQuery' : 'container' }>
          <Navbar />
          <Routes>
            <Route path='/' exact element={<Dashboard />} />
            <Route path='/facts' element={<Facts />} />
            <Route path='/ranking' element={<Ranking />} />
            <Route path='/tips' element={<Tips />} />
            <Route path='*' element={<NoPage />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
