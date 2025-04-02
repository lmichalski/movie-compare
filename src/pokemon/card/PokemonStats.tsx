import React from 'react'
import { PokeStats } from 'src/types/PokeStats'

type Props = { stats: PokeStats }

export const PokemonStats: React.FC<Props> = ({ stats }) => {
	return (
		<table className="poke__stats">
			<tr>
				<td>Health</td>
				<td>{stats.hp}</td>
			</tr>
			<tr>
				<td>Attack</td>
				<td>{stats.attack}</td>
			</tr>
			<tr>
				<td>Defense</td>
				<td>{stats.defense}</td>
			</tr>
			<tr>
				<td>Special Attack</td>
				<td>{stats.specialAttack}</td>
			</tr>
			<tr>
				<td>Special Defense</td>
				<td>{stats.specialDefense}</td>
			</tr>
			<tr>
				<td>Speed</td>
				<td>{stats.speed}</td>
			</tr>
		</table>
	)
}
