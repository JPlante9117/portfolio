import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

const Contact = () => {
    return (
        <div className="footer">
            <ScrollAnimation animateIn="fadeInDown">
                <a id="contact"><h1>Let's Get In Touch</h1></a>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInRight" delay={1000}>
                <hr/>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" delay={2000}>
                <div style={{margin: 10 + "px"}}>
                    Interested in having me on your team, or just want to say hi?<br/>
                    You can click the button below to get in touch!
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" delay={2500}>
                <a href="mailto:jacrplante@gmail.com" target="_blank" className="contactMe">Reach Out</a>
            </ScrollAnimation>
        </div>
    )
}

export default Contact