import React from 'react'

const SocialMedia = props => {
    return(
        <div className="socials">
            <a href={props.link} target="_blank"><img className="socialImg" src={props.image} /></a>
        </div>
    )
}

export default SocialMedia