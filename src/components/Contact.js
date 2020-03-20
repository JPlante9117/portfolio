import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

const Contact = () => {
    return (
        <div className="footer">
            <div className="contact-container">
                <ScrollAnimation animateIn="fadeInDown" animateOnce={true}>
                    <span id="contact" />
                    <h1>Let's Get In Touch</h1>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInRight" delay={1000} animateOnce={true}>
                    <hr/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" delay={2000} animateOnce={true}>
                    <div className="contact-text">
                        Interested in having me on your team, or just want to say hi?<br/><br/>
                        You can click the button below to get in touch!
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" delay={2500} animateOnce={true}>
                    <a href="mailto:jacrplante@gmail.com" target="_blank" className="contactMe" rel="noopener noreferrer">Reach Out</a>
                </ScrollAnimation>
            </div>
        </div>
    )
}

export default Contact