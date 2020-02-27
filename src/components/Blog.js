import React from 'react'

const Blog = props => {
    return (
        <a href={props.link} className="blog">
            <h2>{props.title}</h2>
            <p className="blogDate">Posted {props.posted}</p>
            <p className="blogDesc">{props.desc}</p>
        </a>
    )
}

export default Blog