const React = require('react')

class Blogs extends React.Component {
    render(){
        console.log(this.props.blogs);
        return (
            <div>
                <h1>Blogs</h1>
            </div>
        )
    }
}

module.exports = Blogs