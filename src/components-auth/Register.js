import "./Login.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import rectangle from "../assets/Rectangle62.png"
import lpimage from "../assets/landingpage-img.png"
import { Link } from "react-router-dom";

const Register = () => {
    return(
        <div className="login">
            <div className="login-left">
                <div className="login-left-top"><img src={rectangle} alt="rectangle"/></div>
                <div className="login-left-bottom">
                    <h1>Sign Up</h1>
                    <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                 <Form.Label>Email address</Form.Label>
                 <Form.Control type="email" placeholder="Enter email" />
                 </Form.Group>

                 <Form.Group className="mb-3" controlId="formBasicPassword">
                 <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                 <Button variant="primary" type="submit">
                 Sign Up
                 </Button>
                     </Form>
                     <p>Already have an account? <Link to='/Login'><strong>Sign in here</strong></Link></p>

                </div>
            </div>
            <div className="login-right">
                <div className="login-right-top"><h1>Binar Car Rental</h1></div>
                <div className="login-right-bottom"><img src={lpimage}/></div>
            </div>
        </div>
    )
}

export default Register;