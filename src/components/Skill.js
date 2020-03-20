import React from 'react'

const Skill = (props) => {
    return (
        <div className="skill">
            <img src={props.image} className="skillsImg" alt={props.title} />
            <span className="skillTitle">{props.title}</span>
        </div>
    )
}

export default Skill