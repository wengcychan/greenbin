import wasteCost from '../assets/facts/waste_cost.png'
import mixWasteCompo from '../assets/facts/mixed_waste_composition.png'
import wasteCompo from '../assets/facts/waste_composition.png'
import Header from '../components/Header'
import { useMediaQuery } from 'react-responsive'

const Facts = () => {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })

  const imageStyle = {
    width: '70%',
    marginTop: 20
  }

  const mediaQueryImageStyle = {
    width: '100%'
  }

  return (
    <div className='content'>
      <Header text='Facts and data about your waste ...'/>
      <img src={ wasteCost } alt="cost of waste" style={ isTabletOrMobile ? { ...imageStyle, ...mediaQueryImageStyle } : imageStyle } />
			<img src={ mixWasteCompo } alt="mixed waste composition" style={ isTabletOrMobile ? { ...imageStyle, ...mediaQueryImageStyle } : imageStyle } />
      <img src={ wasteCompo } alt="waste composition" style={ isTabletOrMobile ? { ...imageStyle, ...mediaQueryImageStyle } : imageStyle } />
    </div>
  )
}

export default Facts