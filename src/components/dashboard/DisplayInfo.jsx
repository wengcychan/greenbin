import * as BsIcons from 'react-icons/bs'
import styled from 'styled-components'

const DisplayInfo = ({ title, titleIcon, backgroundColor, currentValue, trendIcon, trend, handleChart }) => (
	<Container $backgroundColor={backgroundColor}>
		
		<Info>
			<div className='infoText'>
				<p className='title'>{ title }</p>
				<p className='value'>{ currentValue }</p>
				<div className='trend'>
					{ trendIcon }
					<span className='trendText'>{ trend }</span>
				</div>
			</div>
			<div className='icon'>
				{ titleIcon }
			</div>
		</Info>

		<Button $backgroundColor={backgroundColor} onClick={ handleChart } >
			<div className='text'>View Details</div> 
			<div className='icon'><BsIcons.BsFillArrowRightCircleFill /></div>
		</Button>

	</Container>
)

const Container = styled.div`
	background-color: ${({$backgroundColor}) => $backgroundColor};
	border-radius: 0.5em;
	width: 100%;

	@media (max-width: 1024px) {
		max-width: 200px;
	}
`

const Info = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0.5em 1em 0.2em;
	border-radius: 0.5em;

	.infoText {
		flex: 1;
	}

	.title {
		font-size: ${({theme}) => theme.fontSizes.medium};
		font-weight: 600;
		line-height: 2em; 
	}

	.value {
		font-size: 1.8rem;
		font-weight: 700;
	}

	.trend {
		display: flex;
		align-items: center;
	}

	.trendText {
		font-size: ${({theme}) => theme.fontSizes.small};
		font-weight: 600;
		line-height: 3em;
	}

	.icon {
		font-size: 2.5rem;
		opacity: 20%;
	}
`

const Button = styled.button`
	background-color: ${({theme}) => theme.colors.white};
	height: 20%;
	border: 2px solid ${({$backgroundColor}) => $backgroundColor};
	border-radius: 0 0 0.5em 0.5em;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	color: ${({theme}) => theme.colors.darkGreyText};

	.text {
		margin-left: 1em;
		font-weight: 600;
		font-size: ${({theme}) => theme.fontSizes.small};
	}

	.icon {
		font-size: ${({theme}) => theme.fontSizes.medium};
		margin-top: 0.3em;
		margin-right: 0.5em;
		opacity: 50%;
	}
`

export default DisplayInfo