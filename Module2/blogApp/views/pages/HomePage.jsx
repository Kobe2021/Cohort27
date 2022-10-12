const React = require('react')

class HomePage extends React.Component {
    render(){
        return(<div>
            <head>
                <link rel="stylesheet" href="/CSS/app.css" />
            </head>
            <h1>Welcome to my Blog App</h1>
        </div>)
    }
}

module.exports = HomePage