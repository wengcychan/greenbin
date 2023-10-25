import * as AiIcons from 'react-icons/ai'
import RewardCheckBox from './RewardCheckBox'
import { useMediaQuery } from 'react-responsive'

const Goal = ({ progress, text }) => {

	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })

	const containerStyle = {
		border: '2px solid #e9e9e9',
		borderRadius: '5px',
		width: '50%',
		padding: '15px',
		backgroundColor: '#fafafa',
		flex: 1,
		marginRight: '30px'
	}

	const progressBarStyle = {
    backgroundColor: '#e9e9e9',
		position: 'relative',
		marginTop: '2px',
		marginBottom: '20px',
		width: '90%'
  }

  const progressStyle = {
		borderRadius: '10px',
    height: '20px',
    backgroundColor: '#006600',
    width: `${progress}%`
  }

	const circleContainer = {
		backgroundColor: '#006600',
		position: 'absolute',
		top: '0px',
		right: '0px',
		transform: 'translate(50%, -25%)',
		height: '30px',
		width: '30px',
		borderRadius: '50px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	}

	const progressIcon = {
		color: '#fff'
	}

	return (
		<div style={ isTabletOrMobile ? { ...containerStyle, ...{ width: '100%' } } : containerStyle }>
			<h3 style={{ marginBottom: '15px', color: '#1a3715' }}>My Goal</h3>
			<p style={{ fontWeight: 600, color: '#1a3715' }}>{ text }</p>
			<div style={ progressBarStyle }>
      	<div style={ progressStyle }></div>
				<div style={ circleContainer }>
					<AiIcons.AiFillGift style={ progressIcon } />
				</div>
    	</div>
			<RewardCheckBox />
		</div>
	)
}

export default Goal