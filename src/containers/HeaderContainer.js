import React, { Component } from 'react'
import SocialMediaContainer from './SocialMediaContainer'
import 'animate.css/animate.min.css'
import ScrollAnimation from 'react-animate-on-scroll'
import Navbar from '../components/Navbar'

export default class HeaderContainer extends Component {
    render() {
        return(
            <div className="header">
                <ScrollAnimation animateIn="fadeInDown" animateOnce={true}>
                    <div className="row">
                        <h1 className="mainHeader">Jacques Plante</h1>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInRight" animateOnce={true} delay={2000}>
                    <hr />
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={1000}>
                    <div className="row">
                        <p className="title">
                            SOFTWARE ENGINEER<br/>WEB DEVELOPER
                        </p>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={3000} offset={0}>
                    <div className="row">
                        <SocialMediaContainer />
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}