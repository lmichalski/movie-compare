import React, { useEffect, useState } from 'react'
import styles from './App.module.css'
import { PokemonList } from './pokemon/PokemonList'
import axios from 'axios'
import { Pagination } from './pokemon/Pagination'
import { Card } from './pokemon/card/Card'
import { PokeStats } from './types/PokeStats'
import { poke_data } from './files/OtlData'
import { PokeDetails } from './types/PokeDetails'
import { CategorySelect } from './pokemon/card/CategorySelect'

const inTierRange = (val: number, lower: number, upper: number) => lower <= val && val <= upper

const getRandomItem = (arr: PokeDetails[]) => arr[Math.floor(Math.random() * arr.length)]

var between3and16 = poke_data.filter(x => inTierRange(x.Price, 3, 16))

const App: React.FC = () => {
	// for (const x of between3and16) {
	// 	console.log(x)
	// }

	const placeHolder = getRandomItem(between3and16.filter(x => x.Pivot == 'TRUE'))

	return (
		<div className={styles.App}>
			<CategorySelect />
			<div className={styles.box}>
				<Card
					key="first mon"
					pokemonName={mon1.Name}
					url={mon1.IconLink}
					type1={mon1.Type1}
					type2={mon1.Type2}
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
					key="second mon"
					pokemonName={mon2.Name}
					url={mon2.IconLink}
					type1={mon2.Type1}
					type2={mon2.Type2}
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
				<button>◀ Left</button>
				<button>-Even-</button>
				<button>Right ▶</button>
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
