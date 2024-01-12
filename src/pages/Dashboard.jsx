import { useState } from "react"
import { useMediaQuery } from 'react-responsive'
import Chart from "chart.js/auto"
import { CategoryScale } from "chart.js"
import { Line } from "react-chartjs-2"
import { Bar } from "react-chartjs-2"
import Header from "../components/Header"
import DisplayInfo from "../components/dashboard/DisplayInfo"
import Goal from "../components/dashboard/Goal"
import { costChartData, costChartOptions, costChartColor} from "../data/chartdata/CostChartData"
import { emissionChartData, emissionChartOptions, emissionChartColor } from "../data/chartdata/EmissionChartData"
import { rankingChartData, rankingChartOptions, rankingChartColor } from "../data/chartdata/RankingChartData"
import { sortingRateChartData, sortingRateChartOptions, sortingRateChartColor } from "../data/chartdata/SortingRateChartData"
import * as BsIcons from 'react-icons/bs'
import * as RiIcons from 'react-icons/ri'
import * as Io5Icons from 'react-icons/io5'
import * as Fa6Icons from 'react-icons/fa6'

const Dashboard = () => {

  const [ chart, setChart ] = useState(<Bar data={ costChartData } height={250} options={ costChartOptions } />)
  const [ chartBorderColor, setChartBorderColor ] = useState( costChartColor )

  const handleChart = (chartType, borderColor) => {
    setChart(chartType)
    setChartBorderColor(borderColor)
  }

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })
  const twoRows = useMediaQuery({ query: '(max-width: 1300px)' })

  Chart.register(CategoryScale)

  const containerStyle = {
    display: 'flex', 
    justifyContent: 'space-between',
    marginTop: '30px'  
  }

  const mediaQueryContainerStyle = {
    flexDirection: 'column',
    gap: '20px'
  }

  const displayChartStyle = {
		border: `2px solid ${chartBorderColor}`,
		borderRadius: '5px',
		padding: '10px 20px',
		backgroundColor: '#fafafa',
    flex: 2,
  }

  return (
    <div className='content'>
      <Header text='Welcome to GreenBin!'/>
      <p>Sorting rate increases by 4%! One step closer to our goal. Keep it up for a sustainable future!</p>
      <div style={ twoRows ? { ...containerStyle, ...mediaQueryContainerStyle }: containerStyle }>
        <Goal progress={ 80 } text='€120 of €150 saved'/>
        <div style={ displayChartStyle }>
				  { chart }
		    </div>
      </div>
      <div style={ isTabletOrMobile ? { ...containerStyle, ...mediaQueryContainerStyle }: containerStyle }>
        <DisplayInfo title='Cost' titleIcon={ <RiIcons.RiMoneyEuroCircleFill /> } backgroundColor={ costChartColor } currentValue='150€' trendIcon={ <BsIcons.BsFillCaretDownFill style={{ color: '#3aa04c' }} /> } trend='10€' handleChart={ () => handleChart(<Bar data={ costChartData } height={250} options={ costChartOptions } />, costChartColor) } chart={ chart } />
        <DisplayInfo title='CO2 Emission' titleIcon={ <Io5Icons.IoLeaf /> } backgroundColor={ emissionChartColor } currentValue='65kg' trendIcon={ <BsIcons.BsFillCaretDownFill style={{ color: '#3aa04c' }} /> } trend='3kg' handleChart={ () => handleChart(<Bar data={ emissionChartData } height={250} options={ emissionChartOptions } />, emissionChartColor) } chart={ chart } />
        <DisplayInfo title='Ranking' titleIcon={ <Fa6Icons.FaMedal /> } backgroundColor={ rankingChartColor } currentValue='No. 1' trendIcon={ <BsIcons.BsFillCaretUpFill style={{ color: '#3aa04c' }} /> } trend='1' handleChart={ () => handleChart(<Line data={ rankingChartData } height={250} options={ rankingChartOptions } />, rankingChartColor) } chart={ chart } />
        <DisplayInfo title='Sorting Rate' titleIcon={ <Io5Icons.IoStatsChartSharp /> } backgroundColor={ sortingRateChartColor } currentValue='53%' trendIcon={ <BsIcons.BsFillCaretUpFill style={{ color: '#3aa04c' }} /> } trend='4%' handleChart={ () => handleChart(<Line data={ sortingRateChartData } height={250} options={ sortingRateChartOptions } />, sortingRateChartColor) } chart={ chart } />
      </div>
    </div>
  )
}

export default Dashboard