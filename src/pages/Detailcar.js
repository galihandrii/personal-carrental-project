import "./Detailcar.css"
import Navbar from "../components-LP/Navbar"
import Footer from "../components-LP/Footer"
import Aboutpackage from "../components-detailcar/Aboutpackage"
import Disablefilter from "../components-detailcar/Disablefilter"



const Detailcar = () => {
    
     
    return(
        <div>
            <Navbar/>
            <div className="div-add"></div>
            <Disablefilter/>
            <Aboutpackage/>
            <Footer/>
        </div>
    )
}

export default Detailcar;