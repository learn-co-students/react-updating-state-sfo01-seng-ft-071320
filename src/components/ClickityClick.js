import React from 'react'

class ClickityClick extends React.Component {
    constructor(){
        super();
        //Define the initial state
        this.state = {
            toggled: false
        }
    }

    handleClick = () => {
        // update our state here
        this.setState(previousState => {
            return {
                toggled: !previousState.toggled
              }
        }) 
    }

    render(){
        console.log(this.state)

        return(
            <div>
            <button onClick={this.handleClick}>{this.state.toggled ? "ON" : "OFF"}</button>
          </div> 
        )
    }
}

export default ClickityClick