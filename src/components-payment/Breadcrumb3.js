import "./Breadcrumb3.css"
import { AiOutlineArrowLeft, AiOutlineLine } from "react-icons/ai";
import stepone from "../assets/bc-step1.png"
import steptwo from "../assets/step2-blue.png"
import stepthree from "../assets/step3-blue.png"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

const Breadcrumb3 = () => {
const navigate = useNavigate()
//const bankId = localStorage.getItem('bank')
const [order, setOrder] = useState('')
const {id} = useParams()

const handleBack = () => {
  return  navigate(-1)
}
const handleOrderId = async() => {
  const token = localStorage.getItem("token")
  const config = {
      headers: {
          access_token: token
      },  
  }

  try {
      const res = await axios.get(`https://bootcamp-rent-cars.herokuapp.com/customer/order/${id}`,config)
      console.log(res.data)
       setOrder(res.data);
  } catch (error) {
      console.log(error.message);
  }
}

  useEffect(() => {
    handleOrderId()
  },[])



    return (
         <div className="bread-crumb">
            <div className="bc-arrow">
            <a href='#' onClick={handleBack}><AiOutlineArrowLeft/> Tiket</a>
            <p>Order Id : {order.id}</p>
            </div>
            <div className="bc-step">
            <div className="bc-step-flex">
                <div><img src={stepone}/></div>
                <div className="bc-word"><h6>Pilih Metode</h6></div>
                <div className="bc-line"><AiOutlineLine/><AiOutlineLine/><AiOutlineLine/></div>
            </div>
            <div className="bc-step-flex">
            <div><img src={steptwo}/></div>
            <div className="bc-word"><h6>Bayar</h6></div>
            <div className="bc-line"><AiOutlineLine/><AiOutlineLine/><AiOutlineLine/></div>
            </div>
            <div className="bc-step-flex">
            <div><img src={stepthree}/></div>
            <div className="bc-word"><h6>Tiket</h6></div>  
            </div>
              
            </div>  

         </div>
    )
}



export default Breadcrumb3;