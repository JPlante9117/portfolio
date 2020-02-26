import React, { Component } from 'react'

const projects = [
    {title: "Game Organizer", image: "", description: "" }
]

export default class ProjectsContainer extends Component {
    render(){
        return (
            <div className="projectsSection">
                <div className="projectsContainer">
                    <a id="projects"><h1>Projects</h1></a>
                    <div className="centeredLine" />
                    {}
                </div>
            </div>
        )
    }
}