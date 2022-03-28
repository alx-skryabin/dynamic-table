import React, {useState} from 'react'
import Button from './components/Button/Button'
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
                <Button loadData={loadData}/>
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
