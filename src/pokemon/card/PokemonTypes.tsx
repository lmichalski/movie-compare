import React from 'react'
import { PokemonType } from './PokemonType'
import './PokemonTypes.scss'

type Props = { pokemonTypes: [string, string] }

export const PokemonTypes: React.FC<Props> = ({ pokemonTypes }) => {
	return (
		<div className="pokemon__types">
			<PokemonType pokemonType={pokemonTypes[0]} /> <PokemonType pokemonType={pokemonTypes[1]} />
		</div>
	)
}
