import React from 'react'
import ColumnSort from './ColumnSort'
import ColumnFilter from './ColumnFilter'

const Columns = [
    'Name',
    'Surname',
    'Age',
    'Extension',
    'Mobile'
]

export default function TitleRow({handler}: any) {
    const handlerSort = (e: any): void => {
        const {sortColumn, sortType} = e.target.closest('th').dataset
        handler.changeSort(sortColumn, defineNextSort(sortType))
    }

    const handlerFilter = (e: any): void => {
        const {filterColumn} = e.target.closest('th').dataset
        handler.changeFilter(filterColumn, e.target.value.trim())
    }

    const defineNextSort = (current: string): string => {
        return (current === 'down') ? 'up' : 'down'
    }

    return (
        <thead className="dt__table-head">
        <tr onClick={handlerSort}>
            {
                Columns.map((name, index) => (
                    <ColumnSort key={index} name={name}/>
                ))
            }
        </tr>
        <tr onInput={handlerFilter}>
            {
                Columns.map((name, index) => (
                    <ColumnFilter key={index} name={name}/>
                ))
            }
        </tr>
        </thead>
    )
}
