import './CategorySelect.scss'

type Props = { initial: string; func: (state: string) => void }

export const CategorySelect: React.FC<Props> = ({ initial, func }) => {
	return (
		<>
			<label>Choose a Category:</label>
			<select className="category" value={initial} onChange={e => func(e.target.value)}>
				<option value="">{initial}</option>
				<optgroup label="Specific Categories">
					<option value="Bulky">Bulky</option>
					<option value="Attacker">Attacker</option>
					<option value="FastBoi">Fast Boi</option>
					<option value="Pivot">Pivot</option>
				</optgroup>
				<optgroup label="General Categories">
					<option value="hpWall">HP Wall</option>
					<option value="physAttacker">Physical Attacker</option>
					<option value="physDefender">Physical Defender</option>
					<option value="specAttacker">Special Attacker</option>
					<option value="specDefender">Special Defender</option>
					<option value="naturallyFast">Naturally Fast</option>
					<option value="speedAbility">Speed Ability</option>
				</optgroup>
			</select>
		</>
	)
}
