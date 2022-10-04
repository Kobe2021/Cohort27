const React = require('react');
const fruits = require('../../models/fruits');

class Show extends React.Component{
    render(){
        //Receive data from fruits.js
        const fruit = this.props.fruit
        const presentDate = this.props.date
        return(
            <div style={{backgroundColor: 'royalblue'}}>
                <h1>Show Page</h1>
                <h3>The fruit name is {fruit.name} and the color is {fruit.color}</h3>
                <h4>{fruit.readyToEat ? 'Its ready to eat' : 'Not ready....Cant touch this'}</h4>
                <h6>Year: {presentDate}</h6>
            </div>
            
        )
    }
}

module.exports = Show;