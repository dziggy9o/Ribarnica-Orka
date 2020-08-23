import React, {useState} from 'react'
import {Carousel} from 'react-bootstrap'

const pocetnaSlajder = [
    {id: 1, naziv: 'Prvi slajd', slika: './images/slider1.jpg'},
    {id: 2, naziv: 'Drugi slajd', slika: './images/slider2.jpg'},
    {id: 3, naziv: 'Treci slajd', slika: './images/slider3.jpg'},
    {id: 4, naziv: 'Cetvrti slajd', slika: './images/slider4.jpg'},
]

export const Slajder = props => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {pocetnaSlajder.map(x => {
                return ( 
                    <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={x.slika}
                    alt={`${x.id} slajd`}
                    />
                    <img className='rowatermark' src='./images/orcawatermark.png' alt='ribarnica orka'/>
                    </Carousel.Item>
                    )
            })}
        </Carousel>

    )
}
