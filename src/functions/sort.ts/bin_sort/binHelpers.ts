import { BinnedInsertionResult } from './binSortTypes'

export const addToBinHelper = (ind: number): BinnedInsertionResult => ['add_to', ind]
export const createAtBinIndexHelper = (ind: number): BinnedInsertionResult => ['create_at', ind]
