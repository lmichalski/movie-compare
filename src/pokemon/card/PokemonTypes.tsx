import React from 'react'
import { PokemonType } from './PokemonType'
import './PokemonTypes.scss'

type Props = { type1: string; type2: string }

export const PokemonTypes: React.FC<Props> = ({ type1, type2 }) => {
	return (
		<div className="pokemon__types">
			<PokemonType pokemonType={type1} /> <PokemonType pokemonType={type2} />
		</div>
	)
}
