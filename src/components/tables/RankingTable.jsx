import { RankingTableData } from "../../data/tabledata/RankingTableData"
import { useMediaQuery } from 'react-responsive'

const RankingTable = () => {

	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })

	const getBadgeBackgroundColor = (rate) => {
		if (rate >= 90 && rate <= 100)
			return '#107d0c'
		else if (rate >= 70 && rate < 90)
			return '#0066cc'
		else if (rate >= 40 && rate < 70)
			return '#ed9a01'
		else
			return '#cf0018'
	}

	const tableContainerStyle = {
		border: '2px solid #e9e9e9',
		borderRadius: '10px',
		overflow: 'hidden',
		flex: 1,
		marginRight: '30px'
	}

	const tableStyle = {
		borderCollapse: 'collapse',
		backgroundColor: '#fff',
		width: '100%'
	}

	const headerStyle = {
		borderBottom: '2px solid #e9e9e9',
		backgroundColor: '#f4f4f4',
		fontSize: '1.2rem',
		textAlign: 'left',
		paddingLeft: '15px',
		height: '60px' 
	}

	const badgeStyle = {
    padding: '0.35em 0.65em',
    fontSize: '0.75em',
    fontWeight: 700,
    color: '#fff',
    borderRadius: '0.375rem',
    display: 'inline-block',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'baseline'
	}

	return (
		<div style={ isTabletOrMobile ? { ...tableContainerStyle, ...{ marginRight: '0px' } } : tableContainerStyle }>
			<table style={ tableStyle }>
				<thead>
					<tr>
						<th style={ headerStyle } colSpan="4">Ranking</th>
					</tr>
				</thead>
				<thead style={{ height: '45px' }}>
					<tr>
						<th style={{ width: '10%' }}>#</th>
						<th style={{ width: '30%', textAlign: 'left' }}>Community</th>
						<th style={{ width: '20%' }}>Rate</th>
						<th style={{ textAlign: 'left' }}>Type</th>
					</tr>
				</thead>
				<tbody>
					{RankingTableData.map((item, index) =>
						<tr key={ index } style={{ ...{ height: '45px' }, ...(index % 2 ? { backgroundColor: '#e9e9e9' } : {}), ...(index === 0 ? { backgroundColor: '#fcfeb5' } : {}) }}>
							<td style={{ textAlign: 'center' }}>{ item.no }</td>
							<td>{ item.community }</td>
							<td style={ {textAlign: 'center' }}><span style={{ ...badgeStyle, backgroundColor: getBadgeBackgroundColor(item.rate) }}>{ item.rate }%</span></td>
							<td>{ item.type }</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	)
}

export default RankingTable