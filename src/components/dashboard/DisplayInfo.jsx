import * as BsIcons from 'react-icons/bs'
import { useMediaQuery } from 'react-responsive'

const DisplayInfo = ({ title, titleIcon, backgroundColor, currentValue, trendIcon, trend, handleChart }) => {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })

	const darkenColor = (color, percentage) => {
		const hex = color.replace(/^#/, '')
		const r = parseInt(hex.slice(0, 2), 16)
		const g = parseInt(hex.slice(2, 4), 16)
		const b = parseInt(hex.slice(4, 6), 16)
	
		const darkenedR = Math.max(0, Math.floor(r * (1 - percentage / 100)))
		const darkenedG = Math.max(0, Math.floor(g * (1 - percentage / 100)))
		const darkenedB = Math.max(0, Math.floor(b * (1 - percentage / 100)))
	
		const darkenedColor = `#${darkenedR.toString(16).padStart(2, '0')}${darkenedG.toString(16).padStart(2, '0')}${darkenedB.toString(16).padStart(2, '0')}`
		return darkenedColor;
	}

	const displayStyle = {
		backgroundColor: backgroundColor,
		width: '23%',
		borderRadius: '5px',
	}

	const infoStyle = {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
		padding: '8px 15px 2px'
	}

	const titleIconStyle = {
		fontSize: '2.5rem',
		opacity: '20%',
		marginBottom: '5px',
	}

	const viewDetailStyle = {
		backgroundColor: '#fafafa',
		borderBottomLeftRadius: '5px',
		borderBottomRightRadius: '5px',
		height: '20%',
		border: `2px solid ${backgroundColor}`
	}

	const buttonStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%'
  }

	const arrowIconStyle = {
		fontSize: '1.1rem',
		marginTop: '0.3rem',
		marginRight: '1rem',
		color: darkenColor(backgroundColor, 10)
	}

	return (
		<div style={ isTabletOrMobile ? { ...displayStyle, ...{ width: '70%' } } : displayStyle }>
			<div style={ infoStyle }>
				<div style={{ flex: 1 }}>
					<p style={{ fontSize: '1.1rem', fontWeight: 600, lineHeight: '2rem' }}>{ title }</p>
					<p style={{ fontSize: '1.8rem', fontWeight: 700 }}>{ currentValue }</p>
					<div>
						{ trendIcon } <span style={{ fontSize: '0.9rem', fontWeight: 600, lineHeight: '3rem' }}>{ trend }</span>
					</div>
				</div>
				<div style={ titleIconStyle }>
					{ titleIcon }
				</div>
			</div>
			<div style={ viewDetailStyle }>
				<button style={ buttonStyle } onClick={ handleChart }>
					<div style={{ marginLeft: '1rem', color: darkenColor(backgroundColor, 10), fontWeight:600 }}>View Details</div> 
					<div>{ <BsIcons.BsFillArrowRightCircleFill style={ arrowIconStyle } /> }</div>
				</button>
			</div>
		</div>
	)
}

export default DisplayInfo