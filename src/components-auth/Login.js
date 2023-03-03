import "./Login.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import rectangle from "../assets/Rectangle62.png"
import lpimage from "../assets/landingpage-img.png"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e) =>{
        setPassword(e.target.value);
    };
    
    const handleLogin = async() => {
        if (!email.length && !password.length){
            setError('Maskan email dan Password')
        }
        else if (!email.length ){
            setError('Masukan email')
        }
         else if (!password.length){
            setError('Masukan Password')
        }
        else {
            const payloadLogin = {
                email: email,
                password: password,
               
            };
        console.log(payloadLogin);
        try {
            const res = await axios.post("https://bootcamp-rent-cars.herokuapp.com/customer/auth/login",payloadLogin);
            localStorage.setItem('token', res.data.access_token);
            navigate("/cari-mobil");
            alert('selamat anda berhasil Login, Selamat datang di Binar Rentall Car')
        } catch (error) {
            console.log(error.response.data.message);
            setError(error.response.data.message)
        }
        }
    }


       

    return (
        <div className="login">
            <div className="login-left">
            <div className="login-left-top"><Link to='/'><img src={rectangle} alt="rectangle"/></Link></div>
                        <div className="login-left-bottom">
                            <h1>Welcome Back!</h1>
                            <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                         <Form.Label>Email address</Form.Label>
                         <Form.Control onChange={handleEmail} type="email" placeholder="Enter email" />
                         </Form.Group>
        
                         <Form.Group className="mb-3" controlId="formBasicPassword">
                         <Form.Label>Password</Form.Label>
                            <Form.Control onChange={handlePassword} type="password" placeholder="Password" />
                          </Form.Group>
                         <Button onClick={handleLogin} variant="primary">
                         Sign In
                         </Button>
                             </Form>
                             <p>Dont have an account? <Link to='/Register'><strong>Sign up for free</strong></Link></p>
                            {
                                !!error.length && <p className="handle-error-p">{error}</p>
                            }
                        </div>
                
            </div>
            <div className="login-right">
                <div className="login-right-top"><h1>Binar Car Rental</h1></div>
                <div className="login-right-bottom"><img src={lpimage}/></div>
            </div>
        </div>
    )
}

export default Login;