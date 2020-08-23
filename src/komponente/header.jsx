import React from 'react'
import {Link} from 'react-router-dom'

export const Header = props => (
    <header id="header">
        <Link to='/' className='logo'>
            <img alt='Ribarnica Orka' src='./images/orka-logo-za-web.png'/>
        </Link>
        
    </header>
)