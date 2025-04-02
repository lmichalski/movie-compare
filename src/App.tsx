import React, { useEffect, useState } from 'react'
import './App.css'
import { PokemonList } from './pokemon/PokemonList'
import axios from 'axios'
import { Pagination } from './pokemon/Pagination'
import { Card } from './pokemon/card/Card'
import { PokeStats } from './types/PokeStats'

const tempStats: PokeStats = {
	hp: 100,
	attack: 50,
	defense: 80,
	specialAttack: 95,
	specialDefense: 80,
	speed: 65,
}

const App: React.FC = () => {
	return (
		<div className="select">
			<div className="box">
				<Card
					key="first mon"
					pokemonName={'FakeMon'}
					url={'https://www.serebii.net/art/th/719.png'}
					types={['fire', 'water']}
					stats={tempStats}
				/>

				<Card
					key="second mon"
					pokemonName={'FakeMon'}
					url={'https://www.serebii.net/art/th/409.png'}
					types={['fire', 'water']}
					stats={tempStats}
				/>
			</div>
			<div className="temp__buttons">
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
