import Breadcrumb from "../components-payment/Breadcrumb";
import Paymentdetail from "../components-payment/Paymentdetail";
import Navbar from "../components-LP/Navbar";
import "./Paymentpage.css"
import Bankdetail from "../components-payment/Bankdetail";
import Footer from "../components-LP/Footer"
import { useEffect,useState } from "react";




const Paymentpage = () => {
    return (
        <div>
            <Navbar/>
            <Breadcrumb />
            <div className="bg-plain-2"></div>
            <Paymentdetail className='bg-plain-2-comp'/>
            <Bankdetail/>
            <Footer/>
        </div>
    )
}

export default Paymentpage;