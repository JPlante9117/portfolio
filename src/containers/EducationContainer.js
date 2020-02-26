import React, { Component } from 'react'
import School from '../components/School'

import flatironIcon from '../images/schoolImages/flatironschool.png'
import wcsuIcon from '../images/schoolImages/wcsulogo.png'
import ScrollAnimation from 'react-animate-on-scroll'

const schools = [
    {title: "Flatiron School", image: `${flatironIcon}`,date: "October 2019 - March 2020", degree: "Software Engineering", description: "I studied Software Engineering at Flatiron School. Here I gained strong knowledge on developmental practices and coding languages. Additionally, I utilized my teaching skills to assist my colleagues on assignments and projects and during pair programming." },
    {title: "Western Connecticut State University", image: `${wcsuIcon}`, date: "September 2014 - May 2018", degree: "Bachelor's of Science in Music Education", description: "I studied music education for four years at Western Connecticut State University. During my time at there,  I developed communication, team building, and teaching skills in addition to honing my musical skills. These skills have helped me communicate effectively and unite a team to accomplish goals." }
]

export default class EducationContainer extends Component {
    generateEducation(){
        return schools.map(school => <School title={school.title} time={school.date} degree={school.degree} desc={school.description} img={school.image} />)
    }
    
    render() {
        return(
            <div className="educationSection">
                <ScrollAnimation animateOnce={true} animateIn="slideInLeft">
                    <div>
                        <a id="education"><h1 className="alignRight">Education</h1></a>
                        <div className="rightLine" />
                        {this.generateEducation()}
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}