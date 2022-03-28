import React, {useContext} from 'react'
import {Button as ButtonBT} from 'react-bootstrap'
import {Context} from '../../context'
import './Button.scss'

export default function Button({loadData}: any) {
    const {data, isLoading} = useContext(Context)
    const title = !!data.length
        ? <><i className="fas fa-check"/> Data uploaded</>
        : <><i className="fas fa-download"/> Click to load</>

    return (
        <ButtonBT
            className="dt__button-load"
            variant="outline-light"
            disabled={!!data.length || isLoading}
            onClick={loadData}
        >
            {
                isLoading
                    ? <i className="fas fa-spinner fa-spin"/>
                    : title
            }
        </ButtonBT>
    )
}
