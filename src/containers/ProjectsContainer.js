import React, { Component } from 'react'
import Project from '../components/Project'
import ScrollAnimation from 'react-animate-on-scroll'

import organizer from '../images/projectImages/gameorganizer.png'
import forum from '../images/projectImages/forummaker.png'
import research from '../images/projectImages/researchlogger.png'
import runegame from '../images/projectImages/runenumbergame.png'
import appaday from '../images/projectImages/appaday.png'

const projects = [
    {title: "App A Day", languages: "React | Redux", image: `${appaday}`, description: "Organize your job applications all into one place and set personal goals to keep you on track.", github: "https://github.com/JPlante9117/app-a-day-frontend", demo: "https://www.youtube.com/watch?v=HICSW-_vnOw"},
    {title: "Game Organizer", languages: "JavaScript | Ruby on Rails", image: `${organizer}`, description: "An app designed to help game collectors pick the perfect game for their next event.", github: "https://github.com/JPlante9117/javascript_project", demo: "https://jplante9117.github.io/javascript_project"},
    {title: "Forum Maker", languages: "Ruby on Rails", image: `${forum}`, description: "Create and customize a forum of your favorite fandom with this app!", github: "https://github.com/JPlante9117/forum_rails_project", demo: "https://www.youtube.com/watch?v=XSHETtlJeOQ&t"},
    {title: "Pokémon Research Logger", languages: "Ruby | Sinatra", image: `${research}`, description: "Play the role of a Pokémon researcher in this entry logging app.", github: "https://github.com/JPlante9117/sinatra-project", demo: "https://www.youtube.com/watch?v=fxdVBzxdm3M&t"}
]

const others = [
    {title: "Rune Number Game", languages: "JavaScript", image: `${runegame}`, description: "A C++ terminal game turned JavaScript. Solve the five mathematical runes to unlock the treasure!", github: "https://github.com/JPlante9117/RuneNumberGameJS", demo: "https://jplante9117.github.io/RuneNumberGameJS"}
]

export default class ProjectsContainer extends Component {
    generateProjects(projects){
        return projects.map(project => <Project title={project.title} languages={project.languages} image={project.image} desc={project.description} gitlink={project.github} demolink={project.demo} />)
    }

    render(){
        return (
            <div className="projectsSection">
                <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                    <div className="projectsContainer">
                        <a id="projects" className="anchor" />
                        <h1>Recent Projects</h1>
                        <div className="centeredLine" />
                        {this.generateProjects(projects)}
                        {this.generateProjects(others)}
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}