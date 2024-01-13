import styled from "styled-components"

export const TableContainer = styled.div`
  overflow: hidden;
	border: 2px solid ${({theme}) => theme.colors.grey};
  border-radius: 0.5em;
	flex: 1;
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: ${({theme}) => theme.colors.white};
	height: 100%;
`

export const TableNameHeader = styled.thead`
	border-bottom: 2px solid ${({theme}) => theme.colors.grey};
	background-color: #f4f4f4;
	font-size: ${({theme}) => theme.fontSizes.large};
	text-align: left;
	height: 3em;

	th {
		padding-left: 1em;
	}
`