import React from 'react'
import { PokeStats } from 'src/types/PokeStats'
import { PokemonImage } from './PokemonImage'
import { PokemonTypes } from './PokemonTypes'
import { PokemonStats } from './PokemonStats'
import './Card.scss'

type Props = {
	pokemonName: string
	url: string
	type1: string
	type2: string
	stats: PokeStats
}

export const Card: React.FC<Props> = ({ pokemonName, url, type1, type2, stats }) => {
	return (
		<div className="pokemon__card">
			<div className="pokemon__card--name">{pokemonName}</div>
			<PokemonImage url={url} />
			<PokemonTypes type1={type1} type2={type2} />
			<PokemonStats stats={stats} />
		</div>
	)
}
