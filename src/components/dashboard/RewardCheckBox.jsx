import styled from "styled-components"

const RewardCheckBox = () => (
	<Container>
		<p className="title">Reward</p>
		<ul>
			<li>
				<input type='checkbox' name='Free sauna session'/>
				<label htmlFor='Free sauna session'>Free sauna session</label>
			</li>
			<li>
				<input type='checkbox' name='Party'/>
				<label htmlFor='Party'>Party</label>
			</li>
			<li>
				<input type='checkbox' name='Garden'/>
				<label htmlFor='Garden'>Garden</label>
			</li>
			<li>
				<input type='checkbox' name='Upgrade playground'/>
				<label htmlFor='Upgrade playground'>Upgrade playground</label>
			</li>
			<li>
				<input type='checkbox' name='Toy'/>
				<label htmlFor='Toy'>Toy</label>
			</li>
		</ul>
	</Container>
)

const Container = styled.div`
	background-color: ${({theme}) => theme.colors.background};
	border-radius: 0.5em;
	padding: 1.5em;
	color: ${({theme}) => theme.colors.darkGreyText};

	.title {
		margin-bottom: 0.8em;
		font-size: ${({theme}) => theme.fontSizes.medium};
	}

	ul {
		line-height: 2em;
	}

	input {
		margin-right: 0.5em;
	}
`

export default RewardCheckBox