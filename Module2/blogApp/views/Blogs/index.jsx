const React = require("react");
const NavBar = require('../components/Navbar')

class Index extends React.Component {
  render() {
    const { blogs } = this.props;
    return (
      <div>
        <head>
          <liink rel="stylesheet" href="/CSS/app.css" />
        </head>

        <NavBar />
        <h1>All Blogs</h1>
        <a href="/blog/new">Create New Blog</a>

        <ul>
          {blogs.map((blog, idx) => (
            <li>
              <a href={`/blog/${blog._id}`}>{blog.title}</a> by: {blog.author}{" "}
              <br />
              <form action={`/Blogs/${blog._id}?_method=DELETE`} method="post">
                <input type="submit" value="Delete" />
              </form>
              <a href={`/Blogs/${blog._id}/edit`}>Edit this Blog</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// How the file becomes accessible
module.exports = Index;
