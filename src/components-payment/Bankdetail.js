import "./Bankdetail.css"
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment/moment";
import 'moment/locale/id'
import { FiUser ,FiChevronDown, FiCheck} from "react-icons/fi";


const Bankdetail = () => {
const {id} = useParams();
const [car, setCar] = useState({});
const navigate = useNavigate();
const [isBcaTrue, setIsBcaTrue] = useState(false)
const [isBniTrue, setIsBniTrue] = useState(false)
const [isMandiriTrue, setIsMandiriTrue] = useState(false)
const [startDate, setStartDate] = useState(new Date());
const [endDate, setEndDate] = useState(null);




useEffect(()=>{
    const token = localStorage.getItem("token")
    const config = {
        headers: {
            access_token: token
        },  
    }
    
  axios
  .get(`https://bootcamp-rent-cars.herokuapp.com/customer/order/${id}`,config)
  .then((ress) => {
       //console.log(ress)
      setCar(ress.data)
  })
  .catch((err) => console.log(err.message))
},[])

// const dateStart = moment(localStorage.getItem("start"))
// const dateEnd = moment(localStorage.getItem("end"))
// const thePrice = localStorage.getItem('total price')

//const longDate = (Math.round((dateEnd - dateStart) / (1000 * 60 * 60 * 24))) + 1


    function ContextAwareToggle({ children, eventKey, callback }) {
        const decoratedOnClick = useAccordionButton(eventKey, () =>
          callback && callback(eventKey),
        );
      
        return (
          <div onClick={decoratedOnClick} className="bd-right-detailorder">
                <div className="bd-right-detailorder-children">
                    <p>{children}</p>
                </div>
                <div className="bd-right-detailorder-iconandprice">
                    <div className="bd-right-detailorder-icon">
                        <FiChevronDown size={24}/>
                    </div>
                    <div className="bd-right-detailorder-price">
                      <p> Rp </p>
                    </div>
                </div>
            </div>
        );
      }


      const handleBca = () => {
        setIsBcaTrue(true)
        setIsBniTrue(false)
        setIsMandiriTrue(false)
        localStorage.setItem("bank", "bca")
    }

    const handleBni = () => {
        setIsBcaTrue(false)
        setIsBniTrue(true)
        setIsMandiriTrue(false)
        localStorage.setItem("bank", "bni")
    }

    const handleMandiri = () => {
        setIsBcaTrue(false)
        setIsBniTrue(false)
        setIsMandiriTrue(true)
        localStorage.setItem("bank", "mandiri")
    }


    





    return (
        <div className="bank-detail">
            <div className="bd-left">
                <div>
                    <h6>Pilih Bank Transfer</h6>
                    <p>Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking</p>
                </div>
                <div className="bd-left-bank" onClick={handleBni}>
                <div className="bank-name"><h6>BNI</h6></div>
                <div className="bank-trf"><h6>BNI Transfer</h6></div>
                {
                    isBniTrue ? <div><FiCheck size={24} className="check-icon-bank"/></div> : null
                   }
                </div>
                <div className="bd-left-bank" onClick={handleBca}>
                <div className="bank-name"><h6>BCA</h6></div>
                <div className="bank-trf"><h6>BCA Transfer</h6></div>
                {
                    isBcaTrue ? <div><FiCheck size={24} className="check-icon-bank"/></div> : null
                   }
                </div>
                <div className="bd-left-bank" onClick={handleMandiri}>
                <div className="bank-name"><h6>Mandiri</h6></div>
                <div className="bank-trf"><h6>Mandiri Transfer</h6></div>
                {
                    isMandiriTrue ? <div><FiCheck size={24} className="check-icon-bank"/></div> : null
                   }
                </div>
            </div>
            <div className="bd-right">
            <div className="bd-right-car-info">
            <div className="bd-right-car-name">{car.name}</div>
            <div className="bd-right-car-info-icon">
              <div className="bd-right-icon"><FiUser size={12}/></div>
              <div className="bd-right-cate">
              {(() => {
                                        if (car.category === "small") {
                                            return <p>2 - 4 orang</p>
                                        } else if (car.category === "Medium") {
                                            return <p>4 - 6 orang</p>
                                        } else if (car.category === "large") {
                                            return <p>6 - 8 orang</p>
                                        } else {
                                            return <p>-</p>
                                        }
                                    })()}
              </div>
            </div>
            </div>  
            <div className="accordion-bd-right">
            <Accordion defaultActiveKey="0">
             <Card>
             <Card.Header>
              <ContextAwareToggle eventKey="0">Total</ContextAwareToggle>
             </Card.Header>
              <Accordion.Collapse  eventKey="0">
             <div>
              <div> </div>
             </div>
             </Accordion.Collapse>
             </Card>
             </Accordion>
            </div>
            

            </div>
        </div>
    )
}

export default Bankdetail;