import React from 'react'
import './CategorySelect.scss'

export const CategorySelect: React.FC = () => {
	return (
		<>
			<label>Choose a Category:</label>
			<select className="category">
				<optgroup label="Specific Categories">
					<option value="Bulky">Bulky</option>
					<option value="Attacker">Attacker</option>
					<option value="FastBoi">Fast Boi</option>
					<option value="Pivot">Pivot</option>
				</optgroup>
				<optgroup label="General Categories">
					<option value="hpWall">HP Wall</option>
					<option value="physAttacker">Physical Attacker</option>
					<option value="specAttacker">Special Attacker</option>
					<option value="physDefender">Physical Defender</option>
					<option value="specDefender">Special Defender</option>
					<option value="naturallyFast">Naturally Fast</option>
					<option value="SpeedAbility">Speed Ability</option>
				</optgroup>
			</select>
		</>
	)
}
