import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import * as komp from './komponente'
import {Rute} from './str'

export const RibarnicaOrka = props => (
    <Router>
        <komp.Intro />
        <komp.Header />
        <komp.Nav />
        <komp.MobNav />
        <Rute />
        <komp.Footer/>
        <komp.Copyright/>
    </Router>
)