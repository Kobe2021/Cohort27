const React = require('react')
// const fruits = require('../models/fruits')


class IndexVeggies extends React.Component{
    render(){
        const {vegetables} = this.props
        return(
            <div>
                <h1>All Vegetables</h1>
                <ul>
                    {
                        vegetables.map((vegetable, idx) => (
                            <li>
                                <a href={`/vegetables/${idx}`}>{vegetable.name}</a> is {vegetable.color}{" "} <br />
                                {vegetable.readyToEat ? `It is ready to eat` : `It is not ready to eat`}
                                
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

// How the file becomes accessible
module.exports = IndexVeggies;