import Header from "../components/Header"
import { useMediaQuery } from 'react-responsive'
import RankingTable from "../components/tables/RankingTable"
import AchievementTable from "../components/tables/AchievementTable"

const Ranking = () => {

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

  return (
    <div className='content'>
      <Header text='Check out your ranking and achievements'/>
      <div style={ isTabletOrMobile ? { ...containerStyle, ...mediaQueryContainerStyle } : containerStyle }>
        <RankingTable />
        <AchievementTable />
      </div>
    </div>    
  )
}

export default Ranking