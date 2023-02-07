import "./Detailcar.css"
import Navbar from "../components-LP/Navbar"
import Footer from "../components-LP/Footer"
import Aboutpackage from "../components-detailcar/Aboutpackage"
import Disablefilter from "../components-detailcar/Disablefilter"
import { Link } from "react-router-dom";



const Detailcar = () => {
    
     
    return(
        <div>
            <Link className='links' to='/'><Navbar/></Link>
            <div className="div-add"></div>
            <Disablefilter/>
            <Aboutpackage/>
            <Footer/>
        </div>
    )
}

export default Detailcar;