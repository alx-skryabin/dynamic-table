import React, {useContext} from 'react'
import {Table as TableBT} from 'react-bootstrap'
import {Context} from '../../context'
import TitleRow from './Title/TitleRow'
import {EmptyRow} from './List/EmptyRow'
import List from './List/List'
import './Table.scss'

export default function Table(methods: any) {
    const {data, isLoading} = useContext(Context)

    return (
        <div className="dt__table">
            <TableBT striped bordered hover responsive variant="dark">
                <TitleRow handler={methods}/>
                {
                    data.length
                        ? <List/>
                        : <EmptyRow isLoading={isLoading}/>
                }
            </TableBT>
        </div>
    )
}
