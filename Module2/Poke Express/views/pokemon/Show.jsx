const React = require('react')

class Show extends React.Component{
    render() {
        const {pokemon} = this.props
        return (
            <div>React Component!
                <h1>All Pokemon</h1>
                <h2>{pokemon.name}</h2>
                <img src={pokemon.img}/>
            
            
            </div>
        )
    }
}

module.exports = Show