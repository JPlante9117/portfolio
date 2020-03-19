import React from 'react'
import img from '../images/portfolio picture.png'
import ScrollAnimation from 'react-animate-on-scroll'

const imageStyle = {
    'text-align': 'center'
}

const About = () => {
    return(
        <div className="aboutSection">
            <ScrollAnimation animateIn="fadeIn" duration="2" animateOnce={true}>
                <div>
                    <a id="about" className="anchor" />
                    <h1>About Me</h1>
                    <div className="centeredLine" />
                        <img className="selfImage" src={img} />
                    <div className="about-info">
                        <h2 className="aboutIntro">Hello! I'm Jacques.</h2>
                        <p className="aboutTopLine">
                            I'm a Software Engineer and Web Developer from Danbury, Connecticut.
                            I enjoy taking on a challenge and conquering problems presented in
                            code. I love the logic and structure behind code and strive to make it as
                            elegant and efficient as possible, whether it be JavaScript, Ruby,
                            React, or others!
                        </p>
                    </div>
                    <div className="about-interests">
                        <p>
                            When I'm not elbows-deep in code, you'll find me:
                        </p>
                        <ul>
                            <li>Playing and learning about video games and board games,</li>
                            <li>Doodling something on my computer,</li>
                            <li>Attending trivia events with my wife,</li>
                            <li>Concocting terrible puns,</li>
                            <li>And teaching my dog new tricks.</li>
                        </ul>
                    </div>
                </div>
            </ScrollAnimation>
        </div>
    )
}

export default About