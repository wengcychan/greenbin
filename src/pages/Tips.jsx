import Header from '../components/Header'
import sortingTip from '../images/sorting_tip.png'
import GreenBinBot from '../components/GreenBinBot'
import { useMediaQuery } from 'react-responsive'

const Tips = () => {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })
  
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '30px'
  }

  const mediaQueryContainerStyle = {
    flexDirection: 'column',
    gap: '20px'
  }

  const sortingTipsStyle = {
    flex: 1,
    backgroundColor: '#ffffff',
    marginRight: '30px',
    borderRadius: '5px',
    border: '2px solid #d9d9d9'
  }

  return (
    <div className='content'>
      <Header text='Discover recycling inspiration'/>
      <div style={ isTabletOrMobile ? { ...containerStyle, ...mediaQueryContainerStyle } : containerStyle }>
        <div style={ isTabletOrMobile ? { ...sortingTipsStyle, ...{ marginRight: '0px' } } : sortingTipsStyle }>
          <div style={{ height: '65px' }}>
            <h3 style={{ padding: '20px', color: '#494949' }} >Sorting Tips</h3>
          </div>
          <img src={ sortingTip } alt='sorting tip' width='80%' style={{ marginLeft: '15px' }}/>
        </div>
        <GreenBinBot/>
      </div>
    </div>
  )
}

export default Tips