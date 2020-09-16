// Code ClickityClick Component Here
import React from 'react';

class ClickityClick extends React.Component {
    constructor() {
        super()

        this.state = {
            hasBeenClicked: false
        }
    }

    handleClick = () => {
        //Update the state here
        //To update the state we use this.setState() and pass in an object
        this.setState({
            hasBeenClicked: true
        }, () => console.log(this.state.hasBeenClicked))
    }





    render() {
        return (
            <div>
                <p> I have {this.state.hasBeenClicked ? null : 'not'} been clicked! </p>
            </div>
        )
    }
}

export default ClickityClick;