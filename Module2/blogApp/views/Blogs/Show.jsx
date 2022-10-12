const React = require('react');


class Show extends React.Component{
    render(){
        //Receive data from blogs.js
        const blog = this.props.blog
        const presentDate = this.props.date
        return(
            <div style={{backgroundColor: 'royalblue'}}>
                <h1>Show Page</h1>
                <h3>The Blog</h3>
                <h4>{blog.title}</h4>
                <h5>{blog.author}</h5>
                <p>{blog.body}</p>
                <h6>Year: {presentDate}</h6>
            </div>
            
        )
    }
}

module.exports = Show;