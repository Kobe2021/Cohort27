const React = require('react')
const NavBar = require('../components/Navbar')

class SignUp extends React.Component {
    render(){
        return(
            <div>
                <NavBar />
                <h1>Create New Account</h1>

                <form action='/user/signup' method='post'>
                    <fieldset>
                        <legend>Create an Account</legend>

                        <label htmlFor='username'>Username</label>
                        <br />
                        <input type='text' name='username' required /><br />
                        <label htmlFor='email'>Email</label>
                        <br />
                        <input type='text' name='email' required /><br />
                        <label htmlFor='password'>Password</label>
                        <br />
                        <input type='password' name='password' required /><br />
                        <input type='submit' value='Signup' /><br />
                    </fieldset>
                </form>

                <div>
                    <p>
                        Already have an Account? <a href="/user/signin">Sign In</a>{" "}
                    </p>
                </div>
            </div>

        )
    }
}

module.exports = SignUp