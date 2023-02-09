
import "./Navbar.css";
import logo from "../assets/logo.png"
import {Link} from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { TbUserCircle } from "react-icons/tb"


const Navbar = () => {
    const [isLogin, setIsLogin] = useState(false);
    const navigate = useNavigate();


    useEffect(()=>{
        const token = localStorage.getItem("token");
        if (!token){
            setIsLogin(false);
        } else {
            setIsLogin(true);
        }
    },[])

    const handleLogout = () => {
        localStorage.removeItem("token");
        //api logout ... di be harus remove di cookies
        navigate("/");
    }    

    return (
        
            <div className="navbar">
                <div className="logo"><Link to="/"><img src={logo}/></Link></div>
                 <div className="nav-list">
                     <ul>
                         <li><a href="#ourservice">Our Service</a></li>
                        <li><a href="#whyus">Why Us</a></li>
                        <li><a href="#testimonial">Testimonial</a></li>
                         <li><a href="#faq">FAQ</a></li>
                         <li>
                            {
                                isLogin ? (<a href=''  onClick={handleLogout}><TbUserCircle size={22}/></a>) : (
                                    <Link to='/login'>
                                     <a>Log In</a>
                                    </Link>
                                   
                                )
                            }
                         </li>
                     </ul>
                 </div>
                 
            </div>
        
        
    )
}

export default Navbar;