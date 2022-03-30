import React, {useState} from 'react'
import Header from './components/Header/Header'
import Table from './components/Table/Table'
import Footer from './components/Footer/Footer'
import {Context, initialState} from './context'

function App() {
    const [state, setState] = useState(initialState)

    const loadData = (): void => {
        setState({...state, isLoading: true})
        request()
            .then(r => {
                setTimeout(() => {
                    setState({...state, data: r, isLoading: false})
                }, 1000)
            })
            .catch(() => {
                setState({...state, isLoading: false})
            })
    }

    const addData = (item: any): void => {
        const data: any = [...state.data, item]
        setState({...state, data})
    }

    const changeSort = (sortColumn: string, sortType: string): void => {
        setState({...state, sortColumn, sortType})
    }

    const changeFilter = (filterColumn: string, filterValue: string): void => {
        const filters = state.filters

        if (filterValue) {
            filters.set(filterColumn, filterValue)
        } else {
            filters.delete(filterColumn)
        }

        setState({...state, filters})
    }

    return (
        <Context.Provider value={state}>
            <div className="dt__app">
                <Header loadData={loadData} addData={addData}/>
                <Table changeSort={changeSort} changeFilter={changeFilter}/>
                <Footer/>
            </div>
        </Context.Provider>
    )
}

function request() {
    return fetch(
        './data.json',
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    ).then(r => r.json())
}

export default App
