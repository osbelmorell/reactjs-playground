import React from 'react';

class Square extends React.Component 
{
    //React components can have state by setting this.state in the constructor, which should be considered private to the component. Let's store the current value of the square in state, and change it when the square is clicked. First, add a constructor to the class to initialize the state:
    constructor ()
    {
        super (); // In JavaScript classes, you need to explicitly call super(); when defining the constructor of a subclass.
        this.state = {
            value:null,
        }
    }
    render ()
    {
        return (
            <button className="square" onClick={ () => this.setState({value: 'X'}) }>
                {this.state.value}
            </button>
            );
    }
}


export default Square;