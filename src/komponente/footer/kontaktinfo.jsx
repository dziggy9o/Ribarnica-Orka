import React from 'react'

export const KontaktInfo = props => (
    <section className="split contact">
        <section className="alt">
            <h3>Radno<br/>vreme</h3>
            <p>Utorak - Petak  od <b>08:00</b> do <b>17:00</b>
            <br/>Subota od <b>08:00</b> do <b>16:00</b>
            <br/>Nedelja od <b>08:00</b> do <b>14:00</b>
            <br/>Ponedeljkom ne radimo</p>
        </section>
        <section className="alt">
            <h3>Adresa</h3>
            <p><a href='https://goo.gl/maps/2aj4MSfiNyYs9xz16' target='_new'>Narodnih Heroja 42, 11000 Beograd</a></p>
        </section>
        <section>
            <h3>Telefon</h3>
            <p><a href="tel:+381607131235">(060) 7131-235</a><br/><a href="tel:+381117131235">(011) 7131-235</a></p>
            
            
        </section>
        <section>
            <h3>Email</h3>
            <p><a href="mailto:office@ribarnicaorka.rs">office@ribarnicaorka.rs</a></p>
        </section>
        <section>
            <h3>Društvene mreže</h3>
            <ul className="icons alt">
                
                <li><a href="https://www.facebook.com/RibarnicaOrka/" rel="noopener noreferrer" target="_blank" className="icon brands alt fa-facebook-f"><span className="label">Facebook</span></a></li>
                <li><a href="https://www.instagram.com/ribarnica_orka/" rel="noopener noreferrer" target="_blank"className="icon brands alt fa-instagram"><span className="label">Instagram</span></a></li>
                
            </ul>
        </section>
    </section>
)