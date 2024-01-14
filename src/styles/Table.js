import styled from "styled-components"

export const TableContainer = styled.div`
  overflow: hidden;
	border: 2px solid ${({theme}) => theme.colors.grey};
  border-radius: 0.5em;
	flex: 1;
	max-width: 500px;
	overflow: auto;
	height: 100%;
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: ${({theme}) => theme.colors.white};
`

export const TableCaption = styled.caption`
	border-bottom: 2px solid ${({theme}) => theme.colors.grey};
	background-color: #f4f4f4;
	font-size: ${({theme}) => theme.fontSizes.large};
	font-weight: bold;
	text-align: left;
	height: 3em;
	padding-left: 1em;
	padding-top: 0.8em;
`