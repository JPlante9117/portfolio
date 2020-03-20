import React from 'react'
import SocialMedia from '../components/SocialMedia'

import githubIcon from '../images/socialImages/githubicon.png'
import linkedinIcon from '../images/socialImages/linkedinicon.png'
import twitterIcon from '../images/socialImages/twittericon.png'
import emailIcon from '../images/socialImages/gmailicon.png'
import instaIcon from '../images/socialImages/instagram.png'

const socials = [
    {id: 1, title: "Email", image: `${emailIcon}`, link: "mailto:jacrplante@gmail.com"},
    {id: 2, title: "GitHub", image: `${githubIcon}`, link: "https://www.github.com/JPlante9117"},
    {id: 3, title: "LinkedIn", image: `${linkedinIcon}`, link: "https://www.linkedin.com/in/jacques-plante/"},
    {id: 4, title: "Twitter", image: `${twitterIcon}`, link: "https://twitter.com/jpfriskyboots"},
    {id: 5, title: "Instagram", image: `${instaIcon}`, link: "https://instagram.com/friskybootsart"}
]

const SocialMediaContainer = () => {
    return(
        <div className="socials-container">
            {socials.map(social => <SocialMedia key={social.id} image={social.image} link={social.link} />)}
        </div>
    )
}

export default SocialMediaContainer