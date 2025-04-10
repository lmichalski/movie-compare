export const parseIfNotNull = (value: string | null) => {
	if (value === null) {
		return null
	} else {
		return JSON.parse(value)
	}
}
