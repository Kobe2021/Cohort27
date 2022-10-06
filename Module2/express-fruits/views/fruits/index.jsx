const React = require('react')
// const fruits = require('../models/fruits')


class Index extends React.Component{
    render(){
        const {fruits} = this.props
        return(
            <div style={styles.container}>
                <h1 style={styles.header}>All Fruits</h1>
                <a href='/fruits/new'>Create New Fruit</a>


                <ul>
                    {
                        fruits.map((fruit, idx) => (
                            <li>
                                <a href={`/fruits/${fruit._id}`}>{fruit.name}</a> is {fruit.color}{" "} <br />
                                {fruit.readyToEat ? `It is ready to eat` : `It is not ready to eat`}
                                
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

const styles = {
    container: {
        backgroundColor: 'royalblue',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    header: {
        fontSize: '32px',
        color: '#fff',
    }
}

// How the file becomes accessible
module.exports = Index