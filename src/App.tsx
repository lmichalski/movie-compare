import React, { useEffect, useRef, useState } from 'react'
import styles, { select } from './App.module.css'
import { PokemonList } from './pokemon/PokemonList'
import axios from 'axios'
import { Pagination } from './pokemon/Pagination'
import { Card } from './pokemon/card/Card'
import { PokeStats } from './types/PokeStats'
import { poke_data } from './files/OtlData'
import { PokeDetails } from './types/PokeDetails'
import { CategorySelect } from './pokemon/card/CategorySelect'
import { parseIfNotNull } from './functions/parseIfNotNull'
import { filterByCategory } from './functions/filterByCategory'
import { asyncMergeSort } from './functions/sort.ts/mergeSort'
import { asyncCompNumb } from './functions/sort.ts/compareItems'
import { resolveConfig } from 'vite'

const inTierRange = (val: number, lower: number, upper: number) => lower <= val && val <= upper

const getRandomItem = (arr: PokeDetails[]) => arr[Math.floor(Math.random() * arr.length)]

const App: React.FC = () => {
	// for (const x of between3and16) {
	// 	console.log(x)
	// }

	const monsBetween4and16: PokeDetails[] = poke_data.filter(x => inTierRange(x.Price, 4, 16))

	const mons5Random = [
		monsBetween4and16[5],
		monsBetween4and16[1],
		monsBetween4and16[3],
		monsBetween4and16[98],
		monsBetween4and16[80],
	]

	const [monsList, setMonsList] = useState(filterByCategory(monsBetween4and16, 'FastBoi'))

	const [monCategory, setMonCategory] = useState(
		localStorage.getItem('category') || '--Please choose an option--',
	)

	const [mon1, setMon1] = useState(
		parseIfNotNull(localStorage.getItem('mon1')) || getRandomItem(monsList),
	)
	const [mon2, setMon2] = useState(
		parseIfNotNull(localStorage.getItem('mon2')) || getRandomItem(monsList),
	)

	useEffect(() => {
		localStorage.setItem('mon1', JSON.stringify(mon1))
	}, [mon1])

	useEffect(() => {
		localStorage.setItem('mon2', JSON.stringify(mon2))
	}, [mon2])

	// useEffect(() => {
	// 	localStorage.setItem('category', monCategory)
	// 	setMonsList(filterByCategory(monsBetween3and16, monCategory))
	// }, [monCategory])

	const resolveAsyncPokeCompare = useRef<(leftIsBetter: boolean) => void>(() => {})

	const asyncPokeCompare =
		(left: PokeDetails) =>
		(right: PokeDetails): Promise<boolean> => {
			setMon1(left)
			setMon2(right)
			return new Promise((resolve, reject) => {
				resolveAsyncPokeCompare.current = resolve
			})
		}

	useEffect(() => {
		// console.log(mons5Random.map(x => x.Name))
		asyncMergeSort(asyncPokeCompare)(monsList).then(sorted => console.log(sorted.map(x => x.Name)))
	}, [])

	return (
		<div className={styles.App}>
			<CategorySelect initial={monCategory} func={setMonCategory} />
			<div className={styles.box}>
				<Card
					key="card__mon1"
					pokemonName={mon1.Name}
					url={mon1.IconLink}
					type1={mon1.Type1}
					type2={mon1.Type2}
					ability1={mon1.Ability1}
					ability2={mon1.Ability2}
					abilityHidden={mon1.AbilityHidden}
					stats={{
						hp: mon1.HP,
						attack: mon1.Atk,
						defense: mon1.Def,
						specialAttack: mon1.SpA,
						specialDefense: mon1.SpD,
						speed: mon1.Spe,
					}}
				/>

				<Card
					key="card__mon2"
					pokemonName={mon2.Name}
					url={mon2.IconLink}
					type1={mon2.Type1}
					type2={mon2.Type2}
					ability1={mon2.Ability1}
					ability2={mon2.Ability2}
					abilityHidden={mon2.AbilityHidden}
					stats={{
						hp: mon2.HP,
						attack: mon2.Atk,
						defense: mon2.Def,
						specialAttack: mon2.SpA,
						specialDefense: mon2.SpD,
						speed: mon2.Spe,
					}}
				/>
			</div>
			<div className={styles.temp__buttons}>
				<button onClick={() => resolveAsyncPokeCompare.current(true)}>◀ Left</button>
				<button onClick={() => resolveAsyncPokeCompare.current(false)}>Right ▶</button>
			</div>
		</div>
	)
}

//Example App
// const App: React.FC = () => {
// 	const [pokemon, setPokemon] = useState([])

// 	const [currentUrl, setCurrentUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
// 	const [nextUrl, setNextUrl] = useState('')
// 	const [prevUrl, setPrevUrl] = useState('')
// 	const [loading, setLoading] = useState(true)

// 	useEffect(() => {
// 		setLoading(true)
// 		let cancel: any
// 		axios.get(currentUrl, { cancelToken: new axios.CancelToken(c => (cancel = c)) }).then(res => {
// 			setLoading(false)
// 			setNextUrl(res.data.next)
// 			setPrevUrl(res.data.previous)
// 			setPokemon(res.data.results.map((p: { name: string }) => p.name))
// 		})

// 		return () => {
// 			cancel()
// 		}
// 	}, [currentUrl])

// 	function gotoNextPage() {
// 		setCurrentUrl(nextUrl)
// 	}

// 	function gotoPrevPage() {
// 		setCurrentUrl(prevUrl)
// 	}

// 	if (loading) {
// 		return 'Loading...'
// 	}

// 	return (
// 		<>
// 			<PokemonList pokemon={pokemon} />
// 			<Pagination gotoNextPage={gotoNextPage} gotoPrevPage={gotoPrevPage} />
// 		</>
// 	)
// }

export default App
