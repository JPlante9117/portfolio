import React, { Component } from 'react'
import SocialMediaContainer from './SocialMediaContainer'
import 'animate.css/animate.min.css'
import ScrollAnimation from 'react-animate-on-scroll'

export default class HeaderContainer extends Component {
    render() {
        return(
            <div className="header">
                <ScrollAnimation animateIn="flipInX" animateOnce={true}>
                    <div className="row">
                        <h1 className="mainHeader">Jacques Plante</h1>
                    </div>
                    <hr />
                    <div className="row">
                        <p className="title">
                            SOFTWARE ENGINEER | WEB DEVELOPER
                        </p>
                    </div>
                    <div className="row">
                        <SocialMediaContainer />
                    </div>
                </ScrollAnimation>
                <div className="tabs">
                        <a className="tabLinks" href="#about">About Me</a>
                        <a className="tabLinks" href="#skills">Skills</a>
                        <a className="tabLinks" href="#education">Education</a>
                        <a className="tabLinks" href="#projects">Projects</a>
                        <a className="tabLinks" href="#contact">Contact Me</a>
                    </div>
            </div>
        )
    }
}