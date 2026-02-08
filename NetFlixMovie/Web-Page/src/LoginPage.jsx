import logo from './assets/netflix-logo.png'
import net from './assets/netflix-logo-png-2564.png'
import bkimg from './assets/thibault-penin-GrzoKN1aqSg-unsplash.jpg'
import { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';







function LoginPage(){

const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(false);
const navigate = useNavigate();
 const handleLogin = () => {
    const validEmail = "m123@gmail.com";
    const validPassword = "Mari@1234";

    if (email === validEmail && password === validPassword) {
      console.log("✅ Login Successful!");
      alert("✅ Login Successful!");
      setMessage(true);
     navigate('/first');

    } else {
      setMessage(false);
      console.log("❌ Invalid email or password");
      alert("❌ Invalid email or password");
    }
  };
  

    return(
        <>
        <img src={net} alt="" />
        <div className='login'>    
        <span>Sign in</span>
         <div className='input'>
        <div className="form-floating mb-3 ">
  <input type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} className="form-control bg-black text-white" id="floatingInput" />
  <label  className='flot my-auto text-white text-opacity-50 '  >Email address</label>
</div>
<div className="form-floating">
  <input  type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} className="form-control bg-black my-4 text-white" id="floatingPassword" />
  <label className='flot1 my-auto text-white text-opacity-50' >Password</label>
</div></div>
       
        <button onClick={handleLogin} id='sign'>Sign in</button>
       
        <br />
        <span id="sp1">OR</span>
        <button id='use'>Use a Sign-in code</button>
        <a href="">Forgot password?</a>
        <input type="checkbox" name="Remember me" id="cb" /> <label> Remember me</label>
       
       
        </div>
      
     


        </>
        
    );
}

export default LoginPage