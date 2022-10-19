const React = require("react");
const NavBar = require('../components/Navbar')

class Index extends React.Component {
  render() {
    const { blogs, loggedInUser } = this.props;
    return(<div>
      <head>
        <link rel="stylesheet" href="/CSS/app.css" />
      </head>
        
        <NavBar />
        <h1>All Blogs</h1>
        <a href="/blog/new">Create New Blog</a>

        <ul className="cardContainer">
          {blogs.map((blog, idx) => (
            <li className="card">
              <a href={`/blog/${blog._id}`}>{blog.title}</a> by: {blog.author}{" "}
              <br />
              <p>{blog.body}</p>
              <br />
              <form action={`/blog/${blog._id}?_method=DELETE`} method="post">
                <input type="submit" value="Delete" />
              </form>
              <a href={`/blog/${blog._id}/edit`}>Edit this Blog</a>
              <p> Created: {blog.created_at.getDate()}</p>
              {blog.author === loggedInUser ? (
                <div>
                  <a href={`/blog/${blog._id}/edit`}>Edit</a>
                </div>
              ) : null};
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

// How the file becomes accessible
module.exports = Index;
