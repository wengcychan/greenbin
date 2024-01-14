import { useState } from "react"
import Chart from "chart.js/auto"
import { CategoryScale } from "chart.js"
import { Line } from "react-chartjs-2"
import { Bar } from "react-chartjs-2"
import DisplayInfo from "../components/dashboard/DisplayInfo"
import Goal from "../components/dashboard/Goal"
import { costChartData, costChartOptions, costChartColor} from "../data/chartdata/costChartData"
import { emissionChartData, emissionChartOptions, emissionChartColor } from "../data/chartdata/emissionChartData"
import { rankingChartData, rankingChartOptions, rankingChartColor } from "../data/chartdata/rankingChartData"
import { sortingRateChartData, sortingRateChartOptions, sortingRateChartColor } from "../data/chartdata/sortingRateChartData"
import * as BsIcons from 'react-icons/bs'
import * as RiIcons from 'react-icons/ri'
import * as Io5Icons from 'react-icons/io5'
import * as Fa6Icons from 'react-icons/fa6'
import styled from "styled-components"

const Dashboard = () => {

  const [ chart, setChart ] = useState(<Bar data={ costChartData } height={350} options={ costChartOptions } />)
  const [ chartBorderColor, setChartBorderColor ] = useState( costChartColor )

  const handleChart = (chartType, borderColor) => {
    setChart(chartType)
    setChartBorderColor(borderColor)
  }

  Chart.register(CategoryScale)

  return (
    <>
      <h1>Welcome to GreenBin!</h1>
      <p>Sorting rate increases by 4%! One step closer to our goal. Keep it up for a sustainable future!</p>
      
      <ContainerGoalandChart>
        <Goal progress={ 80 } text='€120 of €150 saved' />
        <ChartContainer $color={chartBorderColor}>
				  { chart }
        </ChartContainer>
      </ContainerGoalandChart>

      <ContainerDisplayInfo>
        <DisplayInfo
          title='Cost'
          titleIcon={ <RiIcons.RiMoneyEuroCircleFill /> }
          backgroundColor={ costChartColor }
          currentValue='150€'
          trendIcon={ <BsIcons.BsFillCaretDownFill style={{ color: '#3aa04c' }} /> }
          trend='10€'
          handleChart={ () => handleChart(<Bar data={ costChartData } height={350} options={ costChartOptions } />, costChartColor) }
          chart={ chart }
        />
        <DisplayInfo
          title='CO2 Emission'
          titleIcon={ <Io5Icons.IoLeaf /> }
          backgroundColor={ emissionChartColor }
          currentValue='65kg'
          trendIcon={ <BsIcons.BsFillCaretDownFill style={{ color: '#3aa04c' }} /> }
          trend='3kg'
          handleChart={ () => handleChart(<Bar data={ emissionChartData } height={350} options={ emissionChartOptions } />, emissionChartColor) }
          chart={ chart }
        />
        <DisplayInfo
          title='Ranking'
          titleIcon={ <Fa6Icons.FaMedal /> }
          backgroundColor={ rankingChartColor }
          currentValue='No. 1'
          trendIcon={ <BsIcons.BsFillCaretUpFill style={{ color: '#3aa04c' }} /> }
          trend='1'
          handleChart={ () => handleChart(<Line data={ rankingChartData } height={350} options={ rankingChartOptions } />, rankingChartColor) }
          chart={ chart }
        />
        <DisplayInfo
          title='Sorting Rate'
          titleIcon={ <Io5Icons.IoStatsChartSharp /> }
          backgroundColor={ sortingRateChartColor }
          currentValue='53%'
          trendIcon={ <BsIcons.BsFillCaretUpFill style={{ color: '#3aa04c' }} /> }
          trend='4%'
          handleChart={ () => handleChart(<Line data={ sortingRateChartData } height={350} options={ sortingRateChartOptions } />, sortingRateChartColor) }
          chart={ chart }
        />
      </ContainerDisplayInfo>
    </>
  )
}

const Container = styled.div`
  display: flex; 
  justify-content: space-between;
  margin-top: 1.5em;
  gap: 2em;
`

const ContainerGoalandChart = styled(Container)`
  max-width: 1200px;

  @media (max-width: 1300px) {
    flex-direction: column;
  }
`

const ContainerDisplayInfo = styled(Container)`
  max-width: 1200px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

const ChartContainer = styled.div`
  border: 2px solid ${({$color}) => $color};
  border-radius: 0.5em;
  padding: 0.5em 1em;
  background-color: ${({theme}) => theme.colors.white};
  flex: 2;
  max-width: 700px;
`

export default Dashboard