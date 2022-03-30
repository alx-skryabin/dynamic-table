import React from 'react'
import LoadData from './LoadData/LoadData'
import AddData from './AddData/AddData'
import './Header.scss'

export default function Header(methods: any) {
    return (
        <div className='dt__header'>
            <LoadData loadData={methods.loadData}/>
            <AddData addData={methods.addData}/>
        </div>
    )
}
