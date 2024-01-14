import RankingTable from "../components/tables/RankingTable"
import AchievementTable from "../components/tables/AchievementTable"
import styled from "styled-components"

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
  max-width: 1100px;
  
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

export default Ranking