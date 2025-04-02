import React from 'react'
import './PokemonType.scss'

type Props = { pokemonType: string }

export const PokemonType: React.FC<Props> = ({ pokemonType }) => {
	return <div className={`pokemon__type pokemon__type--${pokemonType}`}>{pokemonType}</div>
}
