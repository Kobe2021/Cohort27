const React = require('react')
const Navbar = require('../components/Navbar')

class SignIn extends React.Component{
    render(){
        return(
            <div>
                <Navbar />
                <h1>Sign In Page</h1>
                <form action='/user/signin' method='post'>
                    <fieldset>
                        <legend>Sign in to your account</legend>

                        <label htmlFor='email'>Email</label><br />
                        <input type='text' name='email' required/>
                        <br />

                        <label htmlFor='password'>Password</label><br />
                        <input type='password' name='password' required/>
                        <br />

                        <input type='submit' value='Signin' />
                    </fieldset>
                </form>
            </div>
        )
    }
}

module.exports = SignIn