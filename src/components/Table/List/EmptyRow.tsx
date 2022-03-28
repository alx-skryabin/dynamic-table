import React from 'react'

interface EmptyProps {
    isLoading: boolean
}

function EmptyRow({isLoading}: EmptyProps) {
    return (
        <tbody>
        <tr>
            <td colSpan={5} className="text-center">
                {
                    isLoading
                        ? <i className="fas fa-spinner fa-spin"/>
                        : <>No data <i className="far fa-frown"/></>
                }
            </td>
        </tr>
        </tbody>
    )
}

function NotFoundRow() {
    return (
        <tr>
            <td colSpan={5} className="text-center">
                <i className="fas fa-search"/> Not found
            </td>
        </tr>
    )
}

export {EmptyRow, NotFoundRow}
