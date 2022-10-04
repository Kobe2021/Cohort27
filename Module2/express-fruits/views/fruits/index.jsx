const React = require('react')
// const fruits = require('../models/fruits')


class Index extends React.Component{
    render(){
        const {fruits} = this.props
        return(
            <div>
                <h1>All Fruits</h1>
                <a href='/fruits/new'>Create New Fruit</a>


                <ul>
                    {
                        fruits.map((fruit, idx) => (
                            <li>
                                <a href={`/fruits/${idx}`}>{fruit.name}</a> is {fruit.color}{" "} <br />
                                {fruit.readyToEat ? `It is ready to eat` : `It is not ready to eat`}
                                
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

// How the file becomes accessible
module.exports = Index