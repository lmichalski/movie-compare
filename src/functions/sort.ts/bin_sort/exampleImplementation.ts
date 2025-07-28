import { computeBinInsertionResult } from './binSort'
import { BinComparator } from './binSortTypes'

const comp: BinComparator<number> = (n, b) => {
	if (Math.floor(n / 10) == Math.floor(b[0] / 10)) {
		return '='
	} else if (n < b[0]) {
		return '<'
	} else if (n > b[0]) {
		return '>'
	} else {
		throw new Error('this is not my beautiful house')
	}
}

const runBinSortOnArray = <T>(arr: T[], comparator: BinComparator<T>) => {
	let result: T[][] = []

	for (const n of arr) {
		const [o, i] = computeBinInsertionResult(result, comparator, n)

		if (o == 'add_to') {
			result[i].push(n)
		}

		if (o == 'create_at') {
			result.splice(i, 0, [n])
		}
	}

	return result
}

const testArray = [0, 1, 23, 25, 33, 11, 99, 77, 55, 34, 7, 25]

console.log(runBinSortOnArray(testArray, comp))
