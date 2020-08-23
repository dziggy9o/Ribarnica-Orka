import React, {useState} from 'react'
import {Link,useRouteMatch} from 'react-router-dom'

const navitems = [
    {id: 1, name: 'Početna', link: '/'},
    {id: 2, name: 'Usluge', link: '/usluge'},
    {id: 3, name: 'O nama', link: '/onama'},
    {id: 4, name: 'Kontakt', link: '/kontakt'},
]

export const Nav = props => (
    <nav id="nav">
        <ul className="links">
        {navitems.map(x => {
            return <ROnav key={x.id} roNav={true} to={x.link} label={x.name}/>
        })}
        </ul>
        <ul className="icons">
            <li><a href="https://www.facebook.com/RibarnicaOrka/" target='_blank' rel="noopener noreferrer" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
            <li><a href="https://www.instagram.com/ribarnica_orka/" target='_blank' rel="noopener noreferrer" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
        </ul>
    </nav>
)

function ROnav ({label, to, roNav}) {
    let match = useRouteMatch({
        path: to,
        exact: roNav
    });
    return (
        <li className={match ? 'active' : ''}>
            <Link to={to} >{label}</Link>
        </li>
    )
}
export const MobNav = () => {
    const [meni, prikaziMeni] = useState(false);
    const MobilniMeni = meni ? 'prikaz' : '';
    const CloseIcon = meni ? 'active' : '';
    
    const handleClick = () => {
        prikaziMeni(!meni)
    }

    return (
        <React.Fragment>
        <button className='MobNav' onClick={handleClick}>
            <div className={CloseIcon} />
        </button>
        <div className={`MobilniMeni ${MobilniMeni}`}>
            <ul >
            {navitems.map(x => {
                return <li><Link onClick={handleClick} key={x.id} to={x.link}>{x.name}</Link></li>
            })}
            </ul>
        </div>
        </React.Fragment>
        )

}