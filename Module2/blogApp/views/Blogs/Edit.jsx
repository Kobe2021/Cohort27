const React = require('react')
const NavBar = require('../components/Navbar')
class Edit extends React.Component {
    render(){
        const {blog} = this.props
        return(
            <div>
                <head>
                    <liink rel="stylesheet" href="/CSS/app.css" />
                </head>
                <h1>Edit Page</h1>

                <NavBar />

                <form action={`/blog/${blog._id}?_method=put`} method='post'>
                    Title: <input type="text" name="title" /><br />
                    Body: <input type="text" name="body" /><br />
                    Author: <input type="text" name="author" /><br />
                    <input type="submit" value="Update blog" />
                </form>
            </div>
        )
    }
}

module.exports = Edit