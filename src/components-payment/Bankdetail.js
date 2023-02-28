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
import Button from 'react-bootstrap/Button';


const Bankdetail = () => {
const {id} = useParams();
const [car, setCar] = useState({});
const navigate = useNavigate();
const [isDisabled, setIsDisabled] = useState(true)
const [isBcaTrue, setIsBcaTrue] = useState(false)
const [isBniTrue, setIsBniTrue] = useState(false)
const [isMandiriTrue, setIsMandiriTrue] = useState(false)
const startRent = moment(car.start_rent_at).format('LL')
const endRent = moment(car.finish_rent_at).format('LL')
const dateStart = moment(localStorage.getItem("start"))
const dateEnd = moment(localStorage.getItem("end"))
const longDate = (Math.round((dateEnd - dateStart) / (1000 * 60 * 60 * 24))) + 1
const PaymentButton = () => {
    const [isDisabled, setIsDisabled] = useState(true)
  }
  const handleClick = () => {
    setIsDisabled(false);
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
         setCar(res.data);
    } catch (error) {
        console.log(error.message);
    }
  }

    useEffect(() => {
      handleOrderId()
    },[])

// const dateStart = moment(localStorage.getItem("start"))
// const dateEnd = moment(localStorage.getItem("end"))
// const thePrice = localStorage.getItem('total price')




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
                      <h6> Rp. {dotCurrency(car.total_price)}</h6>
                    </div>
                </div>
            </div>
        );
      }


      const handleBca = () => {
        setIsBcaTrue(true)
        setIsBniTrue(false)
        setIsMandiriTrue(false)
        localStorage.setItem("bank", "BCA Transfer")
        handleClick()
    }

    const handleBni = () => {
        setIsBcaTrue(false)
        setIsBniTrue(true)
        setIsMandiriTrue(false)
        localStorage.setItem("bank", "BNI Transfer")
        handleClick()
    }

    const handleMandiri = () => {
        setIsBcaTrue(false)
        setIsBniTrue(false)
        setIsMandiriTrue(true)
        localStorage.setItem("bank", "Mandiri Transfer")
        handleClick()
    }

    function dotCurrency(number) {
        const currency = number;
        return new Intl.NumberFormat('de-DE').format(currency)
    }
    
    const handlePayNow = () => {
        navigate(`/payment-confirm/${id}`)
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
            {
                Object.entries(car).length ? (
                    <div className="bd-right">
            <div className="bd-right-car-info">
            <div className="bd-right-car-name"><h5>{car.Car.name}</h5></div>
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
             <div className="acc-test">
              <div>
                <h6>Harga</h6>
              </div>
              <div className="sewa-mobil-bd-right">
                <p>Sewa Mobil Rp. {dotCurrency(car.Car.price)} x {longDate} Hari</p>
                <h6>Rp. {dotCurrency(car.total_price)}</h6>
              </div>
              <div>
                <h6>Biaya Lainnya</h6>
              </div>
              <div className="sewa-mobil-bd-right">
                <p>Pajak</p>
                <p className="termasuk-word">Termasuk</p>
              </div>
              <div className="sewa-mobil-bd-right">
                <p>Biaya makan supir</p>
                <p className="termasuk-word">Termasuk</p>
              </div>
              <div>
                <h6>Belum Teramsuk</h6>
              </div>
              <div className="sewa-mobil-bd-right-bottom">
                <p>Bensin</p>
                <p>Tol dan Parkir</p>
              </div>
              <div className="total-harga-atas-btn">
                <h6>Total</h6>
                <h6>Rp. {dotCurrency(car.total_price)}</h6>
              </div>
              <div className="btn-payment-bd-right">
              <Button disabled={isDisabled}   onClick={handlePayNow} variant="success">Bayar</Button>
              </div>
             </div>
             </Accordion.Collapse>
             </Card>
             </Accordion>
            </div>
            

            </div>
                ):(null)
            }
        </div>
    )
}

export default Bankdetail;