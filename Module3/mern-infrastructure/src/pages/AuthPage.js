import { useState } from "react";
import SignUpForm from "../components/SignUpForm/SignUpForm";
import LoginForm from "../components/LoginForm";


const Auth = ({setUser}) => {
  const [showSignUp, setShowSignUp] = useState(true)
    return (
      <div>
        <h1>AuthPage</h1>
        {showSignUp ? <SignUpForm setUser={setUser} /> : <LoginForm setUser={setUser}/>}
        
      </div>
    );
}

export default Auth;