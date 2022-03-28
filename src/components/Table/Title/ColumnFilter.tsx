import React from 'react'
import {Form} from 'react-bootstrap'

interface FilterProps {
    name: string
}

export default function ColumnFilter({name}: FilterProps) {
    return (
        <th data-filter-column={name}>
            <Form.Control type="text" placeholder={name}/>
        </th>
    )
}
