import React from 'react'

type Props = { gotoNextPage: () => void; gotoPrevPage: () => void }

export const Pagination: React.FC<Props> = ({ gotoNextPage, gotoPrevPage }) => {
	return (
		<div>
			{gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button>}
			{gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
		</div>
	)
}
