import React, {useContext} from 'react'
import {Context} from '../../../context'

interface SortProps {
    name: string
}

export default function ColumnSort({name}: SortProps) {
    const {sortColumn, sortType} = useContext(Context)
    const sort: string = (sortColumn === name) ? sortType : 'default'

    const defineClassSort = (): string => {
        let className = 'fas fa-sort'
        if (sort === 'up') className = 'fas fa-sort-up'
        if (sort === 'down') className = 'fas fa-sort-down'
        return className
    }

    return (
        <th data-sort-column={name} data-sort-type={sort}>
            <span>{name}</span>
            <i className={defineClassSort()}/>
        </th>
    )
}
