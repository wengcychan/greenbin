import sortingTip from '../assets/sorting_tip.png'
import GreenBinBot from '../components/GreenBinBot'
import styled from "styled-components"
import { device } from '../styles/BreakPoints'

const Tips = () => (
  <>
    <h1>Discover recycling inspiration</h1>
    <Container>
      <SortingTipsContainer>
        <p>Sorting Tips</p>
        <img src={ sortingTip } alt='sorting tip' width='400px' height='578px'/>
      </SortingTipsContainer>
      <GreenBinBot/>
    </Container>
  </>
)


const Container = styled.div`
  display: flex; 
  justify-content: space-between;
  margin-top: 1em;
  gap: 2em;
  
  @media ${device.md} {
    flex-direction: column;
  }
`

const SortingTipsContainer = styled.div`
  flex: 1;
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 0.5em;
  border: 2px solid ${({theme}) => theme.colors.border};
  text-align: center;

  p {
    padding-top: 1.8em;
    font-weight: bold;
    border-radius: 0.5em;
    font-size: ${({theme}) => theme.fontSizes.large};
    font-family: Georgia;
    color: ${({theme}) => theme.colors.darkText};
  }

  img {
    margin: 2em;
  }
`

export default Tips