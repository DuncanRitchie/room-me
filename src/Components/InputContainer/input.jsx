import React from 'react'

let Input = (props) => {
    return ( 
      <div className="message-container"> 
        <input className="message-bar" type="text" onChange={props.inputHandler}/>
      </div>
    )
}

export default Input