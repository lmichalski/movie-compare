import React from 'react'
import { PokeStats } from 'src/types/PokeStats'
import './PokemonStats.scss'

type Props = { stats: PokeStats }

export const PokemonStats: React.FC<Props> = ({ stats }) => {
	return (
		<table className="poke__stats">
			<tbody>
				<tr>
					<td>Health</td>
					<td className="right__col">{stats.hp}</td>
				</tr>
				<tr>
					<td>Attack</td>
					<td className="right__col">{stats.attack}</td>
				</tr>
				<tr>
					<td>Defense</td>
					<td className="right__col">{stats.defense}</td>
				</tr>
				<tr>
					<td>Special Attack</td>
					<td className="right__col">{stats.specialAttack}</td>
				</tr>
				<tr>
					<td>Special Defense</td>
					<td className="right__col">{stats.specialDefense}</td>
				</tr>
				<tr>
					<td>Speed</td>
					<td className="right__col">{stats.speed}</td>
				</tr>
			</tbody>
		</table>
	)
}
