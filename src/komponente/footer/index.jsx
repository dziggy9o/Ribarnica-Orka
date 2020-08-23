import React from 'react'
import Kontakt from './kontakt'
import {KontaktInfo} from './kontaktinfo'
import {konfiguracijaKontaktForme} from './konfiguracija'
export {Copyright} from './copyright'


export const Footer = () => (
    <footer id='footer'>
        <Kontakt config={konfiguracijaKontaktForme} />
        <KontaktInfo />
    </footer>
)