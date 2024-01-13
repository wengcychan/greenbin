import { user } from "../../data/user"
import { rankingTableData } from "../../data/tabledata/rankingTableData"
import styled from "styled-components"
import { v4 as uuidv4 } from 'uuid'
import { TableContainer, Table, TableNameHeader } from "../../styles/Table"

const RankingTable = () => (
	<TableContainer>
		<Table>
			<TableNameHeader>
				<tr>
					<th colSpan="4">Ranking</th>
				</tr>
			</TableNameHeader>
			<TableInfoHeader>
				<tr>
					<th className="ranking">#</th>
					<th className="community">Community</th>
					<th className="rate">Rate</th>
					<th className="type">Type</th>
				</tr>
			</TableInfoHeader>
			<tbody>
				{rankingTableData.map((item, index) =>
					<TableRow key={ uuidv4() } $index={index} $community={item.community}>
						<td className="ranking" aria-label={item.rankingAriaLabel ? item.rankingAriaLabel : ""}>{ item.ranking }</td>
						<td>{ item.community }</td>
						<td className="community"><Badge $rate={item.rate}>{ item.rate }%</Badge></td>
						<td>{ item.type }</td>
					</TableRow >
				)}
			</tbody>
		</Table>
	</TableContainer>
)

const TableInfoHeader = styled.thead`
	height: 2.5em;

	.ranking {
		width: 10%;
	}

	.community {
		width: 30%;
		text-align: left;
	}

	.rate {
		width: 20%;
	}

	.type {
		text-align: left;
	}
`

const TableRow = styled.tr`
	height: 2.5em;
	background-color: ${({$index, $community, theme}) => $community === user.community 
		? theme.colors.yellowHighlight
		: $index % 2 ? '' : theme.colors.grey};

	.ranking,
	.community {
		text-align: center;
	}
`

const Badge = styled.span`
	padding: 0.35em 0.65em;
	font-size: 0.75em;
	font-weight: bold;
	color: ${({theme}) => theme.colors.white};
	border-radius: 0.5em;
	display: inline-block;
	text-align: center;
	white-space: nowrap;
	vertical-align: baseline;

	background-color: ${({$rate}) => {
		if ($rate >= 90 && $rate <= 100)
			return '#107d0c'
		else if ($rate >= 70 && $rate < 90)
			return '#0066cc'
		else if ($rate >= 40 && $rate < 70)
			return '#ed9a01'
		else
			return '#cf0018'
	}}
`

export default RankingTable