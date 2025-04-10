import { CompareItems, AsyncCompareItems } from './compareItems'

export type Merge = <T>(func: CompareItems<T>) => (left: T[]) => (right: T[]) => T[]

export const merge: Merge = func => left => right => {
	let l = left
	let r = right

	let sortedArr = []

	if (l.length == 0 && r.length == 0) {
		return []
	}

	if (l.length == 0) {
		return r
	}

	if (r.length == 0) {
		return l
	}

	if (l.length == 1 && r.length == 1) {
		if (func(l[0])(r[0])) {
			return [l[0], r[0]]
		} else {
			return [r[0], l[0]]
		}
	}

	if (func(l[0])(r[0])) {
		sortedArr.push(l[0])
		sortedArr.push(...merge(func)(l.slice(1))(r))
	} else {
		sortedArr.push(r[0])
		sortedArr.push(...merge(func)(l)(r.slice(1)))
	}

	return sortedArr
}

export type AsyncMerge = <T>(
	func: AsyncCompareItems<T>,
) => (left: T[]) => (right: T[]) => Promise<T[]>

export const asyncMerge: AsyncMerge = func => left => async right => {
	let l = left
	let r = right

	let sortedArr = []

	if (l.length == 0 && r.length == 0) {
		return Promise.resolve([])
	}

	if (l.length == 0) {
		return Promise.resolve(r)
	}

	if (r.length == 0) {
		return Promise.resolve(l)
	}

	if (l.length == 1 && r.length == 1) {
		if (await func(l[0])(r[0])) {
			return [l[0], r[0]]
		} else {
			return [r[0], l[0]]
		}
	}

	if (await func(l[0])(r[0])) {
		sortedArr.push(l[0])
		sortedArr.push(...(await asyncMerge(func)(l.slice(1))(r)))
	} else {
		sortedArr.push(r[0])
		sortedArr.push(...(await asyncMerge(func)(l)(r.slice(1))))
	}

	return sortedArr
}
