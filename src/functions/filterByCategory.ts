import { PokeDetails } from 'src/types/PokeDetails'

export const filterByCategory = (arr: PokeDetails[], cat: string) => {
	let out: PokeDetails[] = []

	console.log(cat)

	switch (cat) {
		case 'Bulky':
			return arr.filter(
				x => x.HpWall == 'TRUE' || x.PhysDefender == 'TRUE' || x.SpecDefender == 'TRUE',
			)
		case 'Attacker':
			return arr.filter(x => x.PhysAttacker == 'TRUE' || x.SpecAttacker == 'TRUE')
		case 'FastBoi':
			return arr.filter(x => x.Fast == 'TRUE' || x.SpeedAbility == 'TRUE')
		case 'Pivot':
			return arr.filter(x => x.Pivot == 'TRUE')
		case 'hpWall':
			return arr.filter(x => x.HpWall == 'TRUE')
		case 'physAttacker':
			return arr.filter(x => x.PhysAttacker == 'TRUE')
		case 'physDefender':
			return arr.filter(x => x.PhysDefender == 'TRUE')
		case 'specAttacker':
			return arr.filter(x => x.SpecAttacker == 'TRUE')
		case 'specDefender':
			return arr.filter(x => x.SpecDefender == 'TRUE')
		case 'naturallyFast':
			return arr.filter(x => x.Fast == 'TRUE')
		case 'speedAbility':
			return arr.filter(x => x.SpeedAbility == 'TRUE')
		default:
			console.log(`Sorry, invalid category: ${cat}.`)
	}

	for (const x of out) {
		console.log(x)
	}

	return out
}
