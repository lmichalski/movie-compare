import React from 'react'
import './PokemonImage.scss'

type Props = { url: string }

export const PokemonImage: React.FC<Props> = ({ url }) => {
	return (
		<div className="image__container">
			<img src={url} className="image__container--pic" alt={url}></img>
		</div>
	)
}
