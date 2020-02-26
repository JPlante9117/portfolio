import React from 'react'

const School = (props) => {

    return (
        <div className="school">
            <h2 className="schoolTitle">{props.title}</h2>
            <p className="schoolDegree">{props.degree}</p>
            <div className="schoolDesc">
                <p className="schoolDesc">
                    {props.desc}
                </p>
            </div>
            {/* <img className="schoolImg" src={props.img} /> */}
            <b>Enrolled: </b> {props.time}
        </div>
    )
}

export default School