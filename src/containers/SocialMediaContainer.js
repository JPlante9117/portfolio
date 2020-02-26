import React from 'react'
import SocialMedia from '../components/SocialMedia'

import githubIcon from '../images/socialImages/githubicon.png'
import linkedinIcon from '../images/socialImages/linkedinicon.png'
import twitterIcon from '../images/socialImages/twittericon.png'
import emailIcon from '../images/socialImages/gmailicon.png'

const socials = [
    {title: "Email", image: `${emailIcon}`, link: "mailto:jacrplante@gmail.com"},
    {title: "GitHub", image: `${githubIcon}`, link: "https://www.github.com/JPlante9117"},
    {title: "LinkedIn", image: `${linkedinIcon}`, link: "https://www.linkedin.com/in/jacques-plante/"},
    {title: "Twitter", image: `${twitterIcon}`, link: "https://twitter.com/jpfriskyboots"}
]

const SocialMediaContainer = () => {
    return(
        socials.map(social => <SocialMedia image={social.image} link={social.link} />)
    )
}

export default SocialMediaContainer