import React, { Component } from 'react'
import githubIcon from '../images/socialImages/githubicon.png'
import externalIcon from '../images/socialImages/external.png'

class Project extends Component {
    state = {
        class: "projectCard"
    }

    componentDidMount(){
        this.setState({
            bgImage: this.props.image
        })
    }

    flipped = () => {
        if (this.state.class === "projectCard"){
            this.setState({
                class: "projectCard isFlipped"
            })
        } else {
            this.setState({
                class: "projectCard"
            })
        }
    }

    render() {
        return (
            <div className="project" >
                <div className={this.state.class} >
                    <div className="projectCardFace projectFront">
                        <img src={this.state.bgImage} alt={this.props.title} />
                        <h2>{this.props.title}</h2>
                    </div>
                    <div className="projectCardFace projectBack">
                        <p className="languages">{this.props.languages}</p>
                        <p>{this.props.desc}</p>
                        <div className="linkDiv">
                            <a href={this.props.gitlink} target="_blank" rel="noopener noreferrer"><img src={githubIcon} className="linkTo" alt="github" /></a>
                            <a href={this.props.demolink} target="_blank" rel="noopener noreferrer"><img src={externalIcon} className="linkTo" alt="demo" /></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Project