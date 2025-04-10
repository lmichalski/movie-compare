import { CompareItems, AsyncCompareItems } from './compareItems'
import { merge, asyncMerge } from './merge'

export type MergeSort = <T>(func: CompareItems<T>) => (arr: T[]) => T[]

export const mergeSort: MergeSort = func => arr => {
	if (arr.length <= 1) return arr

	let mid = Math.floor(arr.length / 2)

	let left = mergeSort(func)(arr.slice(0, mid))
	let right = mergeSort(func)(arr.slice(mid))

	return merge(func)(left)(right)
}

export type AsyncMergeSort = <T>(func: AsyncCompareItems<T>) => (arr: T[]) => Promise<T[]>

export const asyncMergeSort: AsyncMergeSort = func => async arr => {
	if (arr.length <= 1) return Promise.resolve(arr)

	let mid = Math.floor(arr.length / 2)

	let left = await asyncMergeSort(func)(arr.slice(0, mid))
	let right = await asyncMergeSort(func)(arr.slice(mid))

	return Promise.resolve(asyncMerge(func)(left)(right))
}
