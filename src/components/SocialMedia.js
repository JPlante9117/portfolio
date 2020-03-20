import React from 'react'

const SocialMedia = props => {
    return(
        <div className="socials">
            <a href={props.link} target="_blank" rel="noopener noreferrer"><img className="socialImg" src={props.image} alt="social" /></a>
        </div>
    )
}

export default SocialMedia