import styled from "styled-components"

const RewardCheckBox = () => (
	<Container>
		<p className="title">Reward</p>
		<ul>
			<li>
				<input type='checkbox' id='freeSauna' name='freeSauna'/>
				<label htmlFor='freeSauna'>Free sauna session</label>
			</li>
			<li>
				<input type='checkbox' id='party' name='party'/>
				<label htmlFor='party'>Party</label>
			</li>
			<li>
				<input type='checkbox' id='garden' name='garden'/>
				<label htmlFor='garden'>Garden</label>
			</li>
			<li>
				<input type='checkbox' id='upgradePlayground' name='upgradePlayground'/>
				<label htmlFor='upgradePlayground'>Upgrade playground</label>
			</li>
			<li>
				<input type='checkbox' id='toy' name='toy'/>
				<label htmlFor='toy'>Toy</label>
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