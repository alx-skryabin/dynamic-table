import React, {useContext} from 'react'
import {Button} from 'react-bootstrap'
import {Context} from '../../../context'

export default function LoadData({loadData}: any) {
    const {data, isLoading} = useContext(Context)
    const title = !!data.length
        ? <><i className="fas fa-check"/> Data uploaded</>
        : <><i className="fas fa-download"/> Click to load</>

    return (
        <Button
            className="dt__buttons dt__btn-load"
            variant="outline-light"
            disabled={!!data.length || isLoading}
            onClick={loadData}
        >
            {
                isLoading
                    ? <i className="fas fa-spinner fa-spin"/>
                    : title
            }
        </Button>
    )
}
