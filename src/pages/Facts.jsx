import wasteCost from '../assets/facts/waste_cost.png'
import mixWasteCompo from '../assets/facts/mixed_waste_composition.png'
import wasteCompo from '../assets/facts/waste_composition.png'
import styled from 'styled-components'
import { device } from '../styles/BreakPoints'

const Facts = () => (
  <>
    <h1>Facts and data about your waste ...</h1>
    <Img src={ wasteCost } alt="cost of waste" width="70%" height="auto" />
    <Img src={ mixWasteCompo } alt="mixed waste composition" width="70%" height="auto" />
    <Img src={ wasteCompo } alt="waste composition" width="70%" height="auto" />
  </>
)

const Img = styled.img`
  margin-top: 1em;

  @media ${device.md} {
    width: 100%;
    height: 100%;
  }
`

export default Facts