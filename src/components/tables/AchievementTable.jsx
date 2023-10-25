import { AchievementTableData } from "../../assets/tabledata/AchievementTableData"

const AchievementTable = () => {

	const tableContainerStyle = {
		border: '2px solid #e9e9e9',
		borderRadius: '10px',
		overflow: 'hidden',
		flex: 1
	}

	const tableStyle = {
		borderCollapse: 'collapse',
		width: '100%',
		backgroundColor: '#fff',
		height: '100%'
	}

	const headerStyle = {
		borderBottom: '2px solid #e9e9e9',
		backgroundColor: '#f4f4f4',
		fontSize: '1.2rem',
		textAlign: 'left',
		paddingLeft: '15px',
		height: '60px' 
	}

	return (
		<div style={ tableContainerStyle }>
			<table style={ tableStyle }>
				<thead>
					<tr>
						<th style={ headerStyle } colSpan="4">Achievements</th>
					</tr>
				</thead>
				<tbody>
					{AchievementTableData.map((item, index) =>
						<tr key={ index } style={{ borderBottom: '1px solid #ddd' }}>
							<td style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
								<div style={{ flex: 1 }}>
									<img src={ item.img.src } alt={ item.img.alt } style={{ marginLeft: '20px', width: '60%' }}/>
								</div>
								<div style={{ flex: 4 }}>
									<p style={{ fontSize: '1.15rem', marginBottom: '5px' }}>{ item.achievement }</p>
									<p style={{ fontSize: '0.95rem', color: '#7a7a7a' }}>{ item.date }</p>
								</div>
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	)
}

export default AchievementTable