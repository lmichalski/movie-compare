import React from 'react'
import { PokeStats } from 'src/types/PokeStats'
import { PokemonImage } from './PokemonImage'
import { PokemonTypes } from './PokemonTypes'
import { PokemonStats } from './PokemonStats'
import './Card.scss'

type Props = {
	pokemonName: string
	url: string
	types: [string, string]
	stats: PokeStats
}

export const Card: React.FC<Props> = ({ pokemonName, url, stats }) => {
	return (
		<div className="pokemon__card">
			<div className="pokemon__card--name">{pokemonName}</div>
			<PokemonImage url={url} />
			<PokemonTypes pokemonTypes={['fire', 'water']} />
			<PokemonStats stats={stats} />
		</div>
	)
}
