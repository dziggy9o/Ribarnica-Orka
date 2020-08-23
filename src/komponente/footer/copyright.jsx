import React from 'react'

const trenutnaGodina = new Date().getFullYear();
export const Copyright = () => (
    <div id="copyright">
        <ul><li>&copy; {trenutnaGodina}</li><li><a target='_blank' rel="noopener noreferrer" href="http://citymarketingservice.rs/"><div className='cms' /></a></li></ul>
    </div>
)