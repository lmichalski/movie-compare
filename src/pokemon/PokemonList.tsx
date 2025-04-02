import React from 'react'

type Props = { pokemon: string[] }

export const PokemonList: React.FC<Props> = ({ pokemon }) => {
	return (
		<div>
			{pokemon.map(p => (
				<div key={p}>{p}</div>
			))}
		</div>
	)
}
