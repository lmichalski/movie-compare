export type CompareItems<T> = (left: T) => (right: T) => boolean

export const compNumb: CompareItems<number> = left => right => {
	if (left < right) {
		return true
	} else if (left > right) {
		return false
	} else {
		throw new Error(`illegal comparison, values are equal: ${left}, ${right}`)
	}
}

export type AsyncCompareItems<T> = (left: T) => (right: T) => Promise<boolean>

export const asyncCompNumb: AsyncCompareItems<number> = left => right => {
	if (left < right) {
		return Promise.resolve(true)
	} else if (left > right) {
		return Promise.resolve(false)
	} else {
		throw new Error(`illegal comparison, values are equal: ${left}, ${right}`)
	}
}
