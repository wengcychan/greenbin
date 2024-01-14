import { achievementTableData } from "../../data/tabledata/achievementTableData"
import styled from "styled-components"
import { v4 as uuidv4 } from 'uuid'
import { TableContainer, Table, TableCaption } from "../../styles/Table"

const AchievementTable = () => (
	<TableContainer>
		<Table>
			<TableCaption>
				Achievements
			</TableCaption>
			<tbody>
				{achievementTableData.map(item =>
					<TableRow key={ uuidv4() }>
						<TableData>
							<img src={ item.img.src } alt={ item.img.alt } width="60px" height="60px"/>
							<div>
								<p className="achievement">{ item.achievement }</p>
								<p className="date">{ item.date }</p>
							</div>
						</TableData>
					</TableRow>
				)}
			</tbody>
		</Table>
	</TableContainer>
)

const TableRow = styled.tr`
	border-bottom: 1px solid ${({theme}) => theme.colors.grey};

	&:last-child {
    border-bottom: none;
  }
`

const TableData = styled.td`
	display: flex;
	align-items: center;
	height: 100%;
	gap: 2em;
	padding: 1.5em;

	.achievement {
		font-size: ${({theme}) => theme.fontSizes.medium};
		margin-bottom: 5px;
	}

	.date {
		font-size: ${({theme}) => theme.fontSizes.small};
		color: ${({theme}) => theme.colors.darkGreyText};
	}
`

export default AchievementTable