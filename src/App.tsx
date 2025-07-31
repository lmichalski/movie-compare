import React, { useCallback, useEffect, useMemo, useState } from 'react'
import styles from './App.module.css'
import { Card } from './pokemon/card/Card'
import { poke_data } from './files/OtlData'
import { PokeDetails } from './types/PokeDetails'
import { parseIfNotNull } from './functions/parseIfNotNull'
import { filterByCategory } from './functions/filterByCategory'
import { Collage } from './pokemon/collage/Collage'
import { CategorySelect } from './pokemon/card/CategorySelect'

const inTierRange = (val: number, lower: number, upper: number) => lower <= val && val <= upper

const getRandomItem = (arr: PokeDetails[]) => arr[Math.floor(Math.random() * arr.length)]

function shuffle(array: any[]) {
	let currentIndex = array.length

	// While there remain elements to shuffle...
	while (currentIndex != 0) {
		// Pick a remaining element...
		let randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex--

		// And swap it with the current element.
		;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
	}

	return array
}

const categories = [
	'hpWall',
	'physAttacker',
	'physDefender',
	'specAttacker',
	'specDefender',
	'naturallyFast',
	'speedAbility',
]

const App: React.FC = () => {
	// for (const x of between3and16) {
	// 	console.log(x)
	// }

	const monsBetween6and16: PokeDetails[] = poke_data
		.filter(x => inTierRange(x.Price, 6, 16))
		.filter(x => x.IsMega == 'FALSE')

	shuffle(monsBetween6and16)

	const [category, setCategory] = useState<string>(
		parseIfNotNull(localStorage.getItem('category')) || 'hpWall',
	)

	const [monsList, setMonsList] = useState(
		parseIfNotNull(localStorage.getItem('monsList' + category)) ||
			shuffle(filterByCategory(monsBetween6and16, category)),
	)

	const [comparisonMonIndex, setComparisonMonIndex] = useState(
		parseIfNotNull(localStorage.getItem('comparisonMonIndex' + category)) || 1,
	)

	const [bins, setBins] = useState<PokeDetails[][]>(
		parseIfNotNull(localStorage.getItem('bins' + category)) || [[monsList[0]]],
	)

	const [left, setLeft] = useState(0)
	const [right, setRight] = useState(bins.length)

	const comparisonMon = useMemo(() => monsList[comparisonMonIndex], [monsList, comparisonMonIndex])

	const currentBinIndex = useMemo(() => Math.floor((left + right) / 2), [left, right])

	const currentBin = useMemo(() => bins[currentBinIndex], [bins, currentBinIndex, monsList])

	useEffect(
		() =>
			setMonsList(
				parseIfNotNull(localStorage.getItem('monsList' + category)) ||
					shuffle(filterByCategory(monsBetween6and16, category)),
			),
		[category],
	)

	useEffect(() => localStorage.setItem('monsList' + category, JSON.stringify(monsList)), [monsList])

	useEffect(
		() => setBins(parseIfNotNull(localStorage.getItem('bins' + category)) || [[monsList[0]]]),
		[monsList],
	)

	useEffect(
		() => localStorage.setItem('comparisonMonIndex' + category, JSON.stringify(comparisonMonIndex)),
		[comparisonMonIndex],
	)

	useEffect(() => {
		localStorage.setItem('bins' + category, JSON.stringify(bins))
	}, [bins])

	const handleMonCompare = useCallback(
		(result: '=' | '<' | '>') => {
			console.log({ left, right, currentBinIndex, bins, comparisonMonIndex, comparisonMon })
			console.log(monsList.length)
			if (result == '=') {
				bins[currentBinIndex].push(comparisonMon)
				setBins(bins.slice())
				setComparisonMonIndex(Math.min(comparisonMonIndex + 1, monsList.length - 1))
				setLeft(0)
				setRight(bins.length)
			} else if (result == '<') {
				if (left == currentBinIndex) {
					bins.splice(currentBinIndex, 0, [comparisonMon])
					setBins(bins.slice())
					setComparisonMonIndex(Math.min(comparisonMonIndex + 1, monsList.length - 1))
					setLeft(0)
					setRight(bins.length)
				} else {
					setRight(currentBinIndex)
				}
			} else if (result == '>') {
				if (right == currentBinIndex + 1) {
					bins.splice(currentBinIndex + 1, 0, [comparisonMon])
					setBins(bins.slice())
					setComparisonMonIndex(Math.min(comparisonMonIndex + 1, monsList.length - 1))
					setLeft(0)
					setRight(bins.length)
				} else {
					setLeft(currentBinIndex + 1)
				}
			} else {
				throw new Error('how did i get here')
			}
		},
		[bins, currentBinIndex, left, right, comparisonMon],
	)

	return (
		<div className={styles.App}>
			<div className={'clear-local-storage'}>
				<button onClick={() => localStorage.clear()}>CAUTION: Clear Local Storage</button>
			</div>
			<CategorySelect initial={category} func={setCategory} />

			<div className={styles.box}>
				<Card
					key="card__mon1"
					pokemonName={comparisonMon.Name}
					url={comparisonMon.IconLink}
					type1={comparisonMon.Type1}
					type2={comparisonMon.Type2}
					ability1={comparisonMon.Ability1}
					ability2={comparisonMon.Ability2}
					abilityHidden={comparisonMon.AbilityHidden}
					stats={{
						hp: comparisonMon.HP,
						attack: comparisonMon.Atk,
						defense: comparisonMon.Def,
						specialAttack: comparisonMon.SpA,
						specialDefense: comparisonMon.SpD,
						speed: comparisonMon.Spe,
					}}
				/>

				<Collage imageUrls={currentBin.map(item => item.IconLink)}></Collage>
			</div>
			<div className={styles.temp__buttons}>
				<button onClick={() => handleMonCompare('>')}>^ Better</button>
				<button onClick={() => handleMonCompare('=')}>= Equal</button>
				<button onClick={() => handleMonCompare('<')}>v Worse</button>
			</div>
			<div>
				{bins.toReversed().map(b => (
					<Collage imageUrls={b.map(i => i.IconLink)}></Collage>
				))}
			</div>
			<div>
				{bins.map((b, i) => (
					<ul>
						{b.map(item => (
							<li>{`${item.Name}, ${i}`}</li>
						))}
					</ul>
				))}
			</div>
		</div>
	)
}

export default App
