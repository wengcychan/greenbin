import { useState } from 'react'
import './GreenBinBotChatbox.css'
import logo from '../assets/greenbin/logo.png'
import profilePic from '../assets/profile_pic.png'

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

	const containerStyle = {
		display: 'flex',
		flexDirection: 'column',
		border: '2px solid #d9d9d9',
		borderRadius: '5px',
		borderColor: '#d5d5d5',
		height: '43rem',
		width: '100%',
		flex: 1,
		backgroundColor: '#fff'
	}

	const headerStyle = {
		padding: '1rem 1.25rem',
		backgroundColor: '#ededed',
		borderBottom: '2px solid #d9d9d9',
		height: '4rem'
	}

	const footerStyle = {
		backgroundColor: '#ededed',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '10px',
		borderTop: '2px solid #d9d9d9',
		height: '4rem'
	}

	const inputBoxStyle = {
		width: '100%',
		height: '35px',
		fontSize: '16px',
		border: '0px',
		borderRadius: '5px',
		textIndent: '10px',
		outline: 'none'
	}

	const sendButtonStyle = {
		width:'70px',
		height: '35px',
		fontSize: '16px',
		backgroundColor: '#007bff',
		color: '#fff',
		padding: '0px 10px',
		border: '0px',
		borderRadius: '5px'
	}
	
	return (
		<div style={ containerStyle }>
			<div style={ headerStyle }>
				<p style={{ fontSize: '120%', fontWeight: 600 }}>GreenBinBot</p>
			</div>
      <div className="chat-body">
        <div className="direct-chat-messages">
          {messages.map((message) => (
            <div key={message.id} className={`direct-chat-msg ${message.user === 'User123' ? 'right' : ''}`}>
              <div className="direct-chat-infos clearfix">
                <span className="direct-chat-name">{message.user}</span>
              </div>
              <img className="direct-chat-img" src={ message.user === 'User123' ? profilePic : logo } alt={ message.user === 'User123' ? 'user' : 'logo' } width="38" height="32" />
              <div className="direct-chat-text" style={{ textAlign: message.user === 'User123' ? 'right' : 'left' }}>
                {message.text}
              </div>
            </div>
          ))}
        </div>
      </div>
			<div style={ footerStyle }>
				<div style={{ flex: 10 }}>
					<input type="text" name="message" placeholder="Type Message ..." value={ inputMessage } onChange={ (event) => setInputMessage(event.target.value) } style={ inputBoxStyle } />
				</div>
				<span style={{ flex: 1 }}>
					<button id="submit" style={ sendButtonStyle } onClick={ handleSend }>Send</button>
				</span>
			</div>
	</div>
	)
}

export default GreenBinBot