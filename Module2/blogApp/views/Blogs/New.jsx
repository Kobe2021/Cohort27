const React = require('react')
const NavBar = require('../components/Navbar')
class New extends React.Component{
    render(){
        return (
            <div>
                <head>
                    <link rel="stylesheet" href="/CSS/app.css" />
                </head>
                <NavBar />
                <h1>Create New Blog</h1>
                
                <form action="/blog" method="post">
                    Title: <input type="text" name="title" /><br />
                    Body: <input type="text" name="body" style={{height: 300, width: 500}} /><br />
                    {/* Author: <input type="text" name="author" /><br /> */}
                    <input type="submit" value="add new blog" />
                </form>
            
            
            </div>
        )
    }
}
module.exports = New