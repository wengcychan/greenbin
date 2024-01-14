import { useState } from 'react'
import logo from '../assets/greenbin/logo.png'
import styled from 'styled-components'
import { user } from '../data/user'

const GreenBinBot = () => {

	const [ inputMessage, setInputMessage ] = useState('')

	const [ messages, setMessages ] = useState([
    {
      id: 1,
      text: "You can ask me anything. For instance, 'What type of garbage is a battery?'",
      user: 'GreenBinBot'
    }
  ])

	const handleSend = () => {
    if (inputMessage.trim() === '')
      return

    const newMessage = {
      id: messages.length + 1,
      text: inputMessage,
      user: 'User123'
    }

		const replyMessage = {
      id: messages.length + 2,
      text: 'Sorry, I could not understand your message.',
      user: 'GreenBinBot'
    }

    setMessages([...messages, newMessage, replyMessage])
    setInputMessage('')
  }

	return (
		<Container>
			<Header>
				GreenBinBot
			</Header>

			<ChatBody>
				{messages.map((message) => (
					<ChatMessgae key={message.id} $user={message.user}>
						<div className="user">
							{message.user}
						</div>
						<img 
							src={ message.user === user.username ? user.icon.src : logo }
							alt={ message.user === user.username ? user.icon.alt : 'logo' }
							width="35px"
							height="35px"
						/>
						<div className="text">
							{message.text}
						</div>
					</ChatMessgae>
				))}
			</ChatBody>

			<Footer>
				<input 
					type="text"
					name="message"
					placeholder="Type Message ..."
					value={ inputMessage }
					onChange={ ({target}) => setInputMessage(target.value) }
				/>
				<button
					id="submit"
					onClick={ handleSend }
				>
					Send
				</button>
			</Footer>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	border: 2px solid ${({theme}) => theme.colors.border};
	border-radius: 0.5em;
	height: 100%;
	width: 100%;
	max-width: 500px;
	flex: 1;
	overflow: auto;
`

const Header = styled.div`
	padding-left: 1.25em;
	background-color: ${({theme}) => theme.colors.grey};
	border-bottom: 2px solid ${({theme}) => theme.colors.border};
	height: 3em;
	font-size: ${({theme}) => theme.fontSizes.large};
	font-weight: 600;
  display: flex;
  align-items: center;
	border-radius: 0.5em 0.5em 0 0;
`

const ChatBody = styled.div`
	overflow: auto;
	padding: 1em;
	height: 40em;
	background-color: ${({theme}) => theme.colors.white};
`

const ChatMessgae = styled.div`
	margin-bottom: 1em;

	.user {
		font-size: ${({theme}) => theme.fontSizes.small};
		margin-bottom: 0.5em;
		font-weight: 600;
	}

	img {
		float: ${({$user}) => $user === user.username ? 'right' : 'left'};
		border-radius: ${({$user}) => $user === user.username ? '50%' : ''};
	}

	.text {
		border-radius: 0.7em;
		background-color: ${({theme}) => theme.colors.blue};
		color: ${({theme}) => theme.colors.white};
		margin: 5px 0 0 50px;
		padding: 0.5em 1em;
		max-width: 65%;
		word-wrap: break-word;
		margin-left: ${({$user}) => $user === user.username ? '7em' : ''};
		margin-right: ${({$user}) => $user === user.username ? '50px' : ''};
		text-align: ${({$user}) => $user === user.username ? 'right' : 'left'};
	}
`

const Footer = styled.div`
	background-color: ${({theme}) => theme.colors.grey};
	padding: 0.6em;
	border-top: 2px solid ${({theme}) => theme.colors.border};
	border-radius: 0 0 0.5em 0.5em;
	height: 3.5em;

	input {
		height: 2em;
		border-radius: 0.2em;
		text-indent: 10px;
		background-color: ${({theme}) => theme.colors.white};
		width: 85%;

		@media (max-width: 410px) {
			width: 50%;
		}
	}

	button {
		width: 15%;
		height: 2em;
		background-color: ${({theme}) => theme.colors.blue};
		color: ${({theme}) => theme.colors.white};
		padding: 0px 1em;
		border-radius: 0.2em;
		min-width: 50px;
	}
`



export default GreenBinBot