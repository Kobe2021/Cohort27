const React = require('react')

class Edit extends React.Component {
    render(){
        const {fruit} = this.props
        return(
            <div>
                <h1>Edit Page</h1>

                <form action={`/fruits/${fruit._id}?_method=put`} method='post'>
                    Name: <input type='text' name='name' defaultValue={fruit.name} /><br />
                    Color: <input type='text' name='color' defaultValue={fruit.color} /><br />
                    Ready to Eat: {fruit.readyToEat ? <input type='checkbox' name='readyToEat' defaultChecked /> : <input type='checkbox' name='readyToEat' />}<br />
                    <input type='submit' value='Update Fruit' />
                </form>
            </div>
        )
    }
}

module.exports = Edit