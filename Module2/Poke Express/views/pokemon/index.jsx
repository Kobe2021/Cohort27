const React = require('react')
const pokemon = require("../../models/pokemon");

class Index extends React.Component {
    render() {
        return (
            <div>React Component!
                <h1>All Pokemon</h1>
                <h2>{pokemon.name}</h2>
                
                <ul>
                    {pokemon.map((pokemon, _id) => (
                        <li>
                            <img src={pokemon.img} />
                            <a href={`/pokemon/${_id}`}>Pokemon Name</a>
                        </li>
                    ))}
                </ul>
            
            </div>
        )
    }
}
module.exports = Index