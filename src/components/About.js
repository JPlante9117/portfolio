import React from 'react'
import img from '../images/tester.jpg'
import ScrollAnimation from 'react-animate-on-scroll'

const imageStyle = {
    'text-align': 'center'
}

const About = () => {
    return(
        <div className="aboutSection">
            <ScrollAnimation animateIn="fadeIn" duration="2" animateOnce={true}>
                <div>
                    <a id="about"><h1>About Me</h1></a>
                    <div className="centeredLine" />
                    <div className="col-1-3" style={imageStyle}>
                        <img className="selfImage" src={img} />
                    </div>
                    <div className="col-1-3">
                        <h2>Hello!</h2>
                        <p>
                            Some personal bio here!
                        </p>
                        <p>
                        BLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAH
                        BLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAH
                        BLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAH BLAHBLAH BLAH
                        BLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAH
                        BLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAH
                        BLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAH
                        BLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAHBLAH BLAH
                        </p>
                    </div>
                    <div className="col-1-3">
                        <h2>My Interests</h2>
                        <p>
                            When I'm not working on code, I enjoy spending time:
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