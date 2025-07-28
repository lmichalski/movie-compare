import { arrayMid } from '../../arrayMid'
import { createAtBinIndexHelper, addToBinHelper } from './binHelpers'
import { BinnedInsertionResult, BinComparator } from './binSortTypes'

type ComputeBinInsertionResult = <T>(
	bins: T[][],
	comparator: BinComparator<T>,
	item: T,
) => BinnedInsertionResult

export const computeBinInsertionResult: ComputeBinInsertionResult = (bins, comparator, item) => {
	if (bins.length == 0) {
		return createAtBinIndexHelper(0)
	} else {
		const pivot = arrayMid(bins)
		const result = comparator(item, bins[pivot])

		if (result == '=') {
			return addToBinHelper(pivot)
		} else if (result == '<') {
			return computeBinInsertionResult(bins.slice(0, pivot), comparator, item)
		} else if (result == '>') {
			const [operation, index] = computeBinInsertionResult(bins.slice(pivot + 1), comparator, item)
			return [operation, index + pivot + 1]
		} else {
			throw new Error('how did i get here')
		}
	}
}

type AsyncComputeBinInsertionResult = <T>(
	bins: T[][],
	comparator: BinComparator<T>,
	item: T,
) => Promise<BinnedInsertionResult>

export const asyncComputeBinInsertionResult: AsyncComputeBinInsertionResult = (b, c, i) =>
	Promise.resolve(computeBinInsertionResult(b, c, i))
