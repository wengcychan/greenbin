import * as AiIcons from 'react-icons/ai'
import RewardCheckBox from './RewardCheckBox'
import styled from "styled-components"

const Goal = ({ progress, text }) => (
	<Container>
		<p className='title'>My Goal</p>
		<p>{ text }</p>
		<ProgressBar $progress={progress}>
			<div className='progress'></div>
			<div className='iconContainer'>
				<AiIcons.AiFillGift className='icon' />
			</div>
		</ProgressBar>
		<RewardCheckBox />
	</Container>
)

const Container = styled.div`
	border: 2px solid ${({theme}) => theme.colors.border};
	border-radius: 0.5em;
	width: 50%;
	padding: 1em;
	background-color: ${({theme}) => theme.colors.white};
	flex: 1;
	color: ${({theme}) => theme.colors.darkGreyText};
	font-weight: bold;

	.title {
		margin-bottom: 0.8em;
	}

	@media (max-width: 1024px) {
		width: 100%;
  }
`

const ProgressBar = styled.div`
	background-color: ${({theme}) => theme.colors.grey};
	position: relative;
	margin-top: 0.2em;
	margin-bottom: 1.5em;
	width: 90%;
	border-radius: 2em;

	.progress {
		border-radius: 2em;
    height: 1.2em;
    background-color: #006600;
    width: ${({ $progress }) => $progress}%;
	}

	.iconContainer {
		background-color: #006600;
		position: absolute;
		top: 0px;
		right: 0px;
		transform: translate(50%, -25%);
		height: 30px;
		width: 30px;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.icon {
		color: ${({theme}) => theme.colors.white};
	}
`

export default Goal