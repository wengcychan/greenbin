const RewardCheckBox = () => {
	
	const containerStyle = {
		backgroundColor: '#f5f5f5',
		borderRadius: '5px',
		margin: '0px',
		padding: '20px'
	}

	return (
		<div style={ containerStyle }>
			<h4 style={{ marginBottom: '8px', color: '#1a3715', fontSize: '1.1rem' }}>Reward</h4>
			<ul style={{ listStyle: 'none', lineHeight: '2rem' }}>
				<li>
					<input type='checkbox' style={{ marginRight: '10px' }}/> Free sauna session
				</li>
				<li>
					<input type='checkbox' style={{ marginRight: '10px' }} /> Party
				</li>
				<li>
					<input type='checkbox' style={{ marginRight: '10px' }} /> Garden
				</li>
				<li>
					<input type='checkbox' style={{ marginRight: '10px' }} /> Upgrade playground
				</li>
				<li>
					<input type='checkbox' style={{ marginRight: '10px' }} /> Toy
				</li>
			</ul>
		</div>
	)
}

export default RewardCheckBox