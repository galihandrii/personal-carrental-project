
import "./Navbar.css";
import logo from "../assets/logo.png"
import {Link} from "react-router-dom";


const Navbar = () => {
    return (
        
            <div className="navbar">
                <div className="logo"><Link to="/"><img src={logo}/></Link></div>
                 <div className="nav-list">
                     <ul>
                         <li><a href="#ourservice">Our Service</a></li>
                        <li><a href="#whyus">Why Us</a></li>
                        <li><a href="#testimonial">Testimonial</a></li>
                         <li><a href="#faq">FAQ</a></li>
                         <li><Link>Login</Link></li>
                     </ul>
                 </div>
                 
            </div>
        
        
    )
}

export default Navbar;