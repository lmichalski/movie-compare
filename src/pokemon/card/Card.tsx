import React from 'react'
import { PokeStats } from 'src/types/PokeStats'
import { PokemonImage } from './PokemonImage'
import { PokemonTypes } from './PokemonTypes'
import { PokemonStats } from './PokemonStats'
import './Card.scss'
import { PokemonAbility } from './PokemonAbilities'

type Props = {
	pokemonName: string
	url: string
	type1: string
	type2: string
	ability1: string
	ability2: string
	abilityHidden: string
	stats: PokeStats
}

export const Card: React.FC<Props> = ({
	pokemonName,
	url,
	type1,
	type2,
	ability1,
	ability2,
	abilityHidden,
	stats,
}) => {
	return (
		<div className="pokemon__card">
			<div className="pokemon__card--name">{pokemonName}</div>
			<PokemonImage url={url} />
			<PokemonTypes type1={type1} type2={type2} />
			<PokemonAbility ability1={ability1} ability2={ability2} abilityHidden={abilityHidden} />
			<PokemonStats stats={stats} />
		</div>
	)
}
