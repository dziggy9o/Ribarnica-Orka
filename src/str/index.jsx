import React from 'react'
import {Route} from 'react-router-dom'
import * as komp from '../komponente'


export const Rute = () => {
    return (
        <React.Fragment>
            <Route exact path='/'>
                <div id='slajder'>
                <komp.Slajder />
                </div>
            </Route>
            <Route exact path='/usluge'>
            <komp.Sadrzaj>
                <komp.GPost naslov='Pečeni program (grill)' naslovSlika='./images/slider3.jpg' >
                Skuša / Pastrmka / Oslić / Škarpina / Orada / Brancin / Smuđ / Dimljena pastrmka (filet) <br/> Dimljena Skuša (filet) / Som (filet) / Pastrmka (filet) / Škarpina (filet) / Oslić (filet) / Losos (filet) <br/> Šaran (filet) / Smuđ (filet) / Dimljeni Šaran / Lignje sa roštilja / Tuna / Zubatac / Losos Burger
                </komp.GPost>
                <komp.Postovi>
                <komp.Post naslov='Prženi program' Slika='./images/paniranekrabe.jpeg'>
                Šaran / Oslić / Papaline / Panirane Krabe / Panirane Lignje <br/> Panirani Škampi / Lignja Sir / Fiš. Lignje / Fišburger
                </komp.Post>
                <komp.Post naslov='Gotova jela i salate' Slika='./images/krompirsalata.jpg'>
                Krompir salata / Krompir blitva / Boranija salata <br/> Pasulj prebranac / Rižoto sa morskim plodovima <br/> Blanširano povrće / Riblja čorba od morske ribe <br/> Riblja čorba od rečne ribe / Pomfrit
                </komp.Post>
                </komp.Postovi>
                
            </komp.Sadrzaj>
            </Route>
            <Route exact path='/onama'>
            <div id='slajder'>
                <img src='./images/slider2.jpg' width='100%' alt='onama'/>
            </div>
            <komp.Sadrzaj>
                <p>
                Uslužno pečenje morske i rečne ribe, vrhunskog kvaliteta. Ribarnica ORKA je jedan topao dom sa tradicijom dužom od osamnaest godina, u kome možete uživati uz vašu omiljenu hranu. Na vama ostaje da dođete i procenite sami naš kvalitet. Čekamo Vas!
                <br/>
                U našoj ponudi takođe imamo razna vina, maslinovo ulje, više vrsta konzervirane ribe i balzamiko sirće.
                <br/>
                Porudžbine možete podići na našem prodajnom mestu. Omogućena dostava firmama u krugu prodajnog mesta.
                Svaki dan možete kupiti manje količine bez poručivanja.
                </p>
            </komp.Sadrzaj>

            </Route>
            <Route exact path='/kontakt'>
            <div id='slajder'>
            <iframe title='Adresa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.074293912637!2d20.400422715174404!3d44.820051079098704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a657f4e03930d%3A0xbad4b9ba4f405e05!2sRibarnica%20Orka!5e0!3m2!1sen!2srs!4v1593014117994!5m2!1sen!2srs" width="100%" height="300" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"/>
            </div>
            </Route>
            
        </React.Fragment>
    )
}