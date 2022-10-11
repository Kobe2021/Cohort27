const React = require('react')

class New extends React.Component{
    render(){
        const {pokemon} = this.props
        return (
            <div>
                <h1>New Pokemon</h1>
                
                <form action="/pokemon">
                    Name: <input type="text" name="name" />
                    Image: <input type="text" name="img" />
                    <input type="submit" value="add new pokemon" />
                </form>
            
            
            </div>
        )
    }
}
module.exports = New