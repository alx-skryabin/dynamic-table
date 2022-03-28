import React from 'react'
import {Badge} from 'react-bootstrap'
import './Footer.scss'

export default function Footer() {
    return (
        <div className="dt__footer">
            <div className="dt__footer-item">
                <div className="dt__footer-badge">
                    <Badge pill><i className="fab fa-react"/> React JS</Badge>
                    <Badge pill><i className="fab fa-js"/> TypeScript</Badge>
                    <Badge pill><i className="fab fa-bootstrap"/> Bootstrap</Badge>
                    <Badge pill><i className="fab fa-sass"/> Sass</Badge>
                    <Badge pill><i className="fas fa-server"/> Firebase</Badge>
                </div>
            </div>
            <div className="dt__footer-item">
                <i className="fas fa-code-branch"/> GitHub:
                <a href="https://github.com/alx-skryabin/dynamic-table" target="_blank">this project</a>
            </div>
            <div className="dt__footer-item">
                <i className="fab fa-github"/> GitHub:
                <a href="https://github.com/alx-skryabin" target="_blank">my account</a>
            </div>
        </div>
    )
}
