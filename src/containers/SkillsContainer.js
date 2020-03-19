import React, { Component } from 'react'
import Skill from '../components/Skill'

import railsIcon from '../images/skillImages/railsicon.png'
import jsIcon from '../images/skillImages/jsicon.png'
import rubyIcon from '../images/skillImages/rubyicon.png'
import sinatraIcon from '../images/skillImages/sinatraicon.png'
import reactIcon from '../images/skillImages/reacticon.png'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'

const skillData = [
    {title: "Ruby", image: `${rubyIcon}`},
    {title: "Ruby on Rails", image: `${railsIcon}` },
    {title: "JavaScript", image: `${jsIcon}`},
    {title: "React", image: `${reactIcon}`},
    {title: "Sinatra", image: `${sinatraIcon}`}
]

export default class SkillsContainer extends Component {
    generateSkills() {
        return skillData.map(skill => <Skill title={skill.title} image={skill.image} />)
    }
    
    render(){
        return (
            <div className="skillsSection">
                <ScrollAnimation animateIn="slideInRight" animateOnce={true}>
                    <div>
                        <a id="skills" className="anchor" />
                        <h1 className="alignLeft">Skills</h1>
                        <div className="leftLine" />
                        <p>
                            I've worked with a variety of programming languages in creating wep applications. I primarily use a Ruby on Rails API back-end with a JavaScript or React front-end.
                        </p>
                        <br/>
                        <p>
                            Additionally, I have lots of experience working on teams through my career as a music educator.
                        </p>
                        <div className="skillImgRow">
                            {this.generateSkills()}
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}