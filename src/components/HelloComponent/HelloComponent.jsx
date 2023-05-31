import React from 'react'

// const HelloComponent = () => {
//     return React.createElement("div", { id: "text" }, 
//     React.createElement("p", null, "Hello World!"));
// }

const HelloComponent = (props) => {
    return (
        <React.Fragment>
            <h1>Heading</h1>
            <p>Hello {props.name}! Your age is {props.age}</p>
        </React.Fragment>
    )
}

export default HelloComponent