import "./Register.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import rectangle from "../assets/Rectangle62.png"
import lpimage from "../assets/landingpage-img.png"
import { Link } from "react-router-dom";

const Register = (props) => {
    return(
        <div className="login">
            <div className="login-left">
                <div className="login-left-top"><Link to='/'><img src={rectangle} alt="rectangle"/></Link></div>
                <div className="login-left-bottom">
                    <h1>Sign Up</h1>
                    <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                 <Form.Label>Email address</Form.Label>
                 <Form.Control onChange={props.handleEmail} type="email" placeholder="Enter email" />
                 </Form.Group>
                 <Form.Group className="mb-3" controlId="formBasicPassword">
                 <Form.Label>Password</Form.Label>
                    <Form.Control onChange={props.handlePassword} type="password" placeholder="Password" />
                  </Form.Group>
                 <Button onClick={props.handleRegis} variant="primary">
                 Sign Up
                 </Button>
                     </Form>
                     <p>Already have an account? <Link to='/Login'><strong>Sign in here</strong></Link></p>
                    {
                         !!props.error.length && <p className="handle-error-p">{props.error}</p>
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

export default Register;