import React from 'react'

export const GPost = props => {
    return (
        <React.Fragment>
        {props.naslov ? 
        <article className="post featured">
            <header className="major">
                {props.datum ? <span className="date">{props.datum}</span> : null}
                {props.naslov ? <React.Fragment>
                <h2><a href={props.naslovLink}>{props.naslov}</a></h2>
                <p>{props.podnaslov}</p>
                </React.Fragment>: null }  
            </header>
            <a href={props.naslovLink} className="image main"><img src={props.naslovSlika} alt="" /></a>
                <p>{props.children}</p>
        </article>
        : null
        }
        </React.Fragment>
        
    )
}
export const Postovi = props => (
    <section className="posts">
        {props.children}   
    </section>
)
export const Post = props => {
    return (
        <React.Fragment>
        {props.naslov ? 
        <article className="post featured">
            <header >
                {props.datum ? <span className="date">{props.datum}</span> : null}
                {props.naslov ? <React.Fragment>
                <h2><a href={props.naslovLink}>{props.naslov}</a></h2>
                <p>{props.podnaslov}</p>
                </React.Fragment>: null }  
            </header>
            <a href={props.naslovLink} className="image fit"><img src={props.Slika} alt="" /></a>
                <p>{props.children}</p>
        </article>
        : null
        }
        </React.Fragment>
    )
}