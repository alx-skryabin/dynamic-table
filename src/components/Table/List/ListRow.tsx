import React from 'react'

interface rowProps {
    name: string
    surname: string
    age: number
    extension: number
    mobile: string
}

export default function ListRow({
                                    name,
                                    surname,
                                    age,
                                    extension,
                                    mobile
                                }: rowProps) {

    return (
        <tr>
            <td>{name}</td>
            <td>{surname}</td>
            <td>{age}</td>
            <td>{extension}</td>
            <td>{mobile}</td>
        </tr>
    )
}
