const Header = ({ text }) => {

	const headerStyle = {
		fontSize: '2rem',
		marginBottom: '10px'
	}

	return <h1 style={headerStyle}>{text}</h1>
}

export default Header