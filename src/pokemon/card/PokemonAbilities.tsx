import React from 'react'
import './PokemonAbilities.scss'

type Props = { ability1: string; ability2: string; abilityHidden: string }

export const PokemonAbility: React.FC<Props> = ({ ability1, ability2, abilityHidden }) => {
	const ifAbility = (ab: string, abLabel: 'One' | 'Two' | 'Hidden') => {
		if (ab == '') {
			return <br />
		} else {
			return (
				<div className={`pokemon__ability pokemon__ability--${abLabel.toLowerCase}`}>
					Ability {abLabel}: {ab}
				</div>
			)
		}
	}
	return (
		<div className="abilities">
			<div className={`pokemon__ability pokemon__ability--one`}>Ability One: {ability1}</div>
			{ifAbility(ability2, 'Two')}
			{ifAbility(abilityHidden, 'Hidden')}
		</div>
	)
}
