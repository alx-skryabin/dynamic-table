import React, {useContext} from 'react'
import ListRow from './ListRow'
import {NotFoundRow} from './EmptyRow'
import {Context} from '../../../context'

export default function List() {
    let {sortColumn, sortType, filters, data} = useContext(Context)
    sortColumn = sortColumn.toLowerCase()

    if (filters.size) {
        data = filtering(data, filters)
    }

    data = sorting(data, sortColumn, sortType)

    return (
        <tbody>
        {
            data.length
                ?
                data.map((item: any, index: number) => (
                    <ListRow {...item} key={index}/>
                ))
                : <NotFoundRow/>
        }
        </tbody>
    )
}

function filtering(data: any, filters: any) {
    const countFilters = filters.size

    return data.filter((row: any) => {
        let res = mapToArray(filters).filter((filter: any) => {
            let {column, value} = filter
            column = column.toLowerCase()
            value = value.toLowerCase()
            return ~row[column].toString().toLowerCase().indexOf(value)
        })

        return (countFilters === res.length) ? row : false
    })
}

function sorting(data: any, sortColumn: string, sortType: string) {
    if (sortColumn === 'age' || sortColumn === 'extension') {
        if (sortType === 'down') {
            data.sort((a: any, b: any) => {
                return b[sortColumn] - a[sortColumn]
            })
        }

        if (sortType === 'up') {
            data.sort((a: any, b: any) => {
                return a[sortColumn] - b[sortColumn]
            })
        }
    } else {
        data.sort((a: any, b: any) => {
            a = a[sortColumn].toLowerCase()
            b = b[sortColumn].toLowerCase()

            if (sortType === 'up') {
                if (a < b) return -1
                if (a > b) return 1
            }

            if (sortType === 'down') {
                if (a < b) return 1
                if (a > b) return -1
            }
            return 0
        })
    }

    return data
}

function mapToArray(map: any): string[] {
    const arr: any = []
    map.forEach((value: string, column: string) => {
        arr.push({column, value})
    })
    return arr
}


