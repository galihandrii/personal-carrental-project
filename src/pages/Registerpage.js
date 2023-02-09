import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Register from "../components-auth/Register";

const Registerpage = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [username, setUsername] = useState('');
const navigate = useNavigate();

const handleEmail = (e) => {
    setEmail(e.target.value)
    
}

const handleUsername = (e) => {
    setUsername(e.target.value)
    
}


const handlePassword = (e) => {
    setPassword(e.target.value)
    
}
const handleRegis = () => {
    const payload = {
        email: email,
        username: username,
        password: password,
        role:'admin'
       
    }
    console.log(payload);
    axios.post("https://bootcamp-rent-cars.herokuapp.com/admin/auth/register",payload)
    .then((res)=>{
        navigate('/Login');
    })
    .catch((err)=>(err.message))
}




    return(
        <div>
            <Register handleEmail={handleEmail} handlePassword={handlePassword} handleRegis={handleRegis} handleUsername={handleUsername}/>
        </div>

    )
}

export default Registerpage;