const React = require('react')
const NavBar = require('../components/Navbar')
class Blogs extends React.Component {
    render(){
        console.log(this.props.blogs);
        return (
            <div>
                <head>
                    <liink rel="stylesheet" href="/CSS/app.css" />
                </head>

                <NavBar />
                <h1>Blogs</h1>
                <section>
                    <section>
                        {blogs.map((blog) => (
                            <div style={styles.wrapper} className="card">
                                <a href={`/blog/${blog._id}`}>{" "}</a>
                                
                            </div>
                        ))}
                    </section>
                </section>
            </div>
        )
    }
}

module.exports = Blogs