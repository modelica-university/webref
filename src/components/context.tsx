import React from 'react'

export interface SearchAPI {
  search: string
  setTerm: (term: string) => void
}

export const searchContext = React.createContext<SearchAPI>(
  undefined as SearchAPI
)
