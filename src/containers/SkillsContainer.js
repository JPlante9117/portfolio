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
    {id: 1, title: "Ruby", image: `${rubyIcon}`},
    {id: 2, title: "Ruby on Rails", image: `${railsIcon}` },
    {id: 3, title: "JavaScript", image: `${jsIcon}`},
    {id: 4, title: "React", image: `${reactIcon}`},
    {id: 5, title: "Sinatra", image: `${sinatraIcon}`}
]

export default class SkillsContainer extends Component {

    generateSkills() {
        return skillData.map(skill => <Skill key={skill.id} title={skill.title} image={skill.image} />)
    }
    
    render(){
        return (
            <div className="skillsSection" >
                <ScrollAnimation animateIn="slideInRight" animateOnce={true}>
                    <div>
                        <span id="skills" className="anchor" />
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