import RankingTable from "../components/tables/RankingTable"
import AchievementTable from "../components/tables/AchievementTable"
import styled from "styled-components"
import { device } from '../styles/BreakPoints'

const Ranking = () => (
  <>
    <h1>Check out your ranking and achievements</h1>
    <Container>
      <RankingTable />
      <AchievementTable />
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

export default Ranking