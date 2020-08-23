import React, {useEffect, useState} from 'react'

export const Intro = props => {
    const [skrolKlasa, setSkrolKlasu] = useState('')

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 230 ? setSkrolKlasu('hidden') : setSkrolKlasu('')
        })
    })
    return (
    <div id="intro" className={skrolKlasa}>
        <img height='250' src='./images/orcalogo.png' alt='orca logo'/>
        <p>Ako ste pravi ljubitelji ribe, a još niste pronašli pravo mesto da u njemu uživate, ribarnica ORKA vam je na usluzi.</p>
        <ul className="actions">
            <li><a href="#header" className="button icon solid solo fa-arrow-down scrolly">Nastavi</a></li>
        </ul>
    </div>
    )
}