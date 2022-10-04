const React = require('react');
const vegetables = require('../../models/vegetables');

class Show extends React.Component{
    render(){
        //Receive data from fruits.js
        const vegetable = this.props.vegetable
        const presentDate = this.props.date
        return(
            <div style={{backgroundColor: 'grey'}}>
                <h1>Show Page</h1>
                <h3>The vegetable name is {vegetable.name} and the color is {vegetable.color}</h3>
                <h4>{vegetable.readyToEat ? 'Its ready to eat' : 'Not ready....Cant touch this'}</h4>
                <h6>Year: {presentDate}</h6>
                <br />
                
                <img src={vegetable.image}></img>
                
            </div>
            
        )
    }
}

module.exports = Show;