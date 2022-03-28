import React from 'react'

const initialState = {
  data: [],
  isLoading: false,
  sortColumn: 'Name',
  sortType: 'up', // up, down, default
  filters: new Map()
}

const Context = React.createContext(initialState)

export {Context, initialState}
