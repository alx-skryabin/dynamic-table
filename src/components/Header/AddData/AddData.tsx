import React, {useState} from 'react'
import {Button, Form, Offcanvas} from 'react-bootstrap'

const Columns = [
    'Name',
    'Surname',
    'Age',
    'Extension',
    'Mobile'
]

export default function AddData({addData}: any) {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const toggleShow = () => setShow((s) => !s)
    const handleSubmit = (e: any) => {
        e.preventDefault()
        const data = validationFields(e.target)
        if (!data) return
        handleClose()
        addData(data)
    }

    return (
        <>
            <Button
                className="dt__buttons"
                variant="outline-light"
                onClick={toggleShow}
            >
                <i className="fas fa-plus"/> Add row
            </Button>
            <Offcanvas show={show} onHide={handleClose} scroll={false} backdrop={true}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Add item to table</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Form className='dt__form-add' onSubmit={handleSubmit}>
                        {
                            Columns.map((item: string, index: number) => (
                                <Form.Control
                                    key={index}
                                    size="sm"
                                    type="text"
                                    name={item.toLowerCase()}
                                    placeholder={item}
                                />
                            ))
                        }
                        <Button type="submit" variant="dark">Add item</Button>
                    </Form>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

function validationFields($form: any) {
    let errors: number = 0
    const dataItem: any = {}

    Columns.map((item: string) => {
        const field = $form.elements[item.toLowerCase()]
        const value = field.value.trim()

        field.classList.remove('valid-success', 'valid-error')

        if (!value) {
            ++errors
            field.classList.add('valid-error')
        } else {
            if (item === 'Age' || item === 'Extension') {
                if (!Number(value)) {
                    ++errors
                    return field.classList.add('valid-error')
                }
            }

            dataItem[item.toLowerCase()] = value
            field.classList.add('valid-success')
        }
    })

    return errors ? false : dataItem
}
