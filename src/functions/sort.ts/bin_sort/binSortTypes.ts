export type BinnedInsertionResult = ['add_to', number] | ['create_at', number]

export type BinComparisonResult = '>' | '<' | '='

export type BinComparator<T> = (obj: T, bin: T[]) => BinComparisonResult
