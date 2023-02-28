import "./Breadcrumb2.css"
import { AiOutlineArrowLeft, AiOutlineLine } from "react-icons/ai";
import stepone from "../assets/bc-step1.png"
import steptwo from "../assets/step2-blue.png"
import stepthree from "../assets/bc-step3.png"
import { useNavigate } from "react-router-dom";


const Breadcrumb2 = () => {
const navigate = useNavigate()
const bankId = localStorage.getItem('bank')

const handleBack = () => {
  return  navigate(-1)
}



    return (
         <div className="bread-crumb">
            <div className="bc-arrow">
            <a href='#' onClick={handleBack}><AiOutlineArrowLeft/>  {bankId}</a>
            <p>Order Id :</p>
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



export default Breadcrumb2;