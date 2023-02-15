import { useState, useEffect } from "react";
import "./Aboutpackage.css"
import { useNavigate, useParams } from "react-router-dom";
import {FiUsers, FiCalendar } from "react-icons/fi";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import moment from "moment/moment";
import 'moment/locale/id'



const Aboutpackage = () => {
//const [isLogin, setIsLogin]= useState(false);
const [startDate, setStartDate] = useState(new Date());
const [endDate, setEndDate] = useState(null);
const {id} = useParams();
const [car,setCar]= useState({})
const navigate = useNavigate();

const [description, setDescription] = useState([{
    id: 1,
    include:"apa saja yang termasuk dalam paket misal durasi max 12 jam",
    exclude:"Tidak termasuk biaya makan sopir Rp.75.000/hari",
    refund:"Tidak termasuk biaya makan sopir Rp.75.000/hari",
    },
    {
        id: 2,
        include:"Sudah termasuk bensin selama 12 jam",
        exclude:"Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp.20.000/jam",
        refund:"Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp.20.000/jam",
        },
         {
            id: 3,
            include:"Sudah termasuk tiket wisata",
            exclude:"Tidak termasuk akomodasi penginapan",
            refund:"Tidak termasuk akomodasi penginapan",
            },
            {
                id: 4,
                include:"Sudah termasuk pajak",
                exclude: "Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp.20.000/jam",
                refund: "Tidak termasuk biaya makan sopir Rp.75.000/hari",
                },

]);


    
    useEffect(()=>{
        axios
        .get(`https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`)
        .then((res)=>{
            console.log(res);
            setCar(res.data);
        })
        .catch((err)=> console.log(err.message))
    },[])
    


    function dotCurrency(number) {
        const currency = number;
        return new Intl.NumberFormat('de-DE').format(currency)
    }


        const isPrice = car.price
        const dateCount = Math.round((endDate - startDate) / (1000 * 60 * 60 * 24))
        const totalPrice = isPrice * (dateCount + 1)

    function PriceTotal(){
        
        if ((dateCount >= 0) && (dateCount < 7)) {
            return dotCurrency(totalPrice)
        } else if (dateCount < 0) {
            return 0
        } else {
            return "- (Lebih dari 7 hari)"
        }
    }


    const FixPrice = PriceTotal()

   
   
    const handleBtnSetOrder = async(id) => {
        const token = localStorage.getItem("token")
        const config = {
            headers: {
                access_token: token
            },
        }
        
        const payload = {
            start_rent_at: moment(startDate).format('L'),
            finish_rent_at: moment(endDate).format('L'),
            car_id: car.id,
            
        }
            console.log(payload);
        try {
            const res = await axios.post('https://bootcamp-rent-cars.herokuapp.com/customer/order',payload,config);
            console.log(res.data)
            // localStorage.setItem('car_id', id)
            // localStorage.setItem("start", startDate)
            // localStorage.setItem("end", endDate)
             localStorage.setItem('total price', FixPrice)

            navigate(`/Payment/${res.data.id}`);
        } catch (error) {
            console.log(error.message);
           // setError(error.response.data.message)
        }
    }

    function HandleButton() {
      
        if ((startDate != null) && (endDate != null) && (dateCount <= 7))  {
            return(
                <Link to={`/payment/${car.id}`} >
                    <Button  onClick={handleBtnSetOrder} variant="success">Lanjutkan Ke Pembayaran</Button>
                </Link>
            )
        }  else  {
            return(
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Pilih Tanggal Sewa</Tooltip>}>
                    <Button variant="success" className="btn-disable-pick-date">Lanjutkan Ke Pembayaran</Button>
                </OverlayTrigger>
            ) 
        }
    }
   

    
    
    return(
        <div className="cardesc">
            <div className="cardesc-left">
                <h2>Tentang Paket</h2>
                <div className="include">
                    <p><strong>Include</strong></p>
                    {
                                description.map(function(item){
                                    return(
                                        <ul>
                                            <li>{item.include}</li>
                                        </ul>
                                    )
                                })
                            }
                </div>
                <div className="exclude">
                    <p><strong>Exclude</strong></p>
                    {
                                description.map(function(item){
                                    return(
                                        <ul>
                                            <li>{item.exclude}</li>
                                        </ul>
                                    )
                                })
                            }
                </div>
                <div className="refund">
                    <p><strong>Refund, Reschedule, Overtime</strong></p>
                    {
                                description.map(function(item){
                                    return(
                                        <ul>
                                            <li>{item.refund}</li>
                                        </ul>
                                    )
                                })
                            }
                </div>
            </div>
            <div className="cardesc-right">
            {
            Object.entries(car).length ? (
            <div className="car-cards">
                <div className="car-cards-img"><img src={car.image} alt={car.name}/></div>
                <div className="car-cards-name">
                    
                <div className="car-cards-name-price">
                            <div>
                            <h3>{car.name}</h3>
                            <p className="p-category"><FiUsers size={14}/>
                            <span className="span-category">
                            {(() => {
                                                if (car.category === "small" ){
                                                    return(
                                                        '2-4 orang'
                                                    )
                                                } else if (car.category === "Medium" ) {
                                                    return(
                                                        '4-6 orang'
                                                    )
                                                } else if (car.category === "large" ) {
                                                    return(
                                                        '6-8 orang'
                                                    )
                                                } else {
                                                    return(
                                                        '-'
                                                    )
                                                }
                                            })()}
                                
                                
                                </span><br/><br/>Tentukan lama sewa mobil (Max 7 hari)</p>
                                   
                            </div>
                            

                            {/*========== Date Picker Zone ===========*/ }
                            <div className="date-range">
                            <DatePicker 
                            selected={startDate} 
                            onChange={(date) => {
                                const [start, end] = date;
                                setStartDate(start);
                                setEndDate(end);
                            } 
                            } 
                            startDate={startDate}
                            endDate={endDate}
                            minDate={new Date()}
                            selectsRange
                            dateFormat="dd MMMM yyyy"
                            isClearable={true}
                            placeholderText="Pilih tanggal mulai dan tanggal akhir sewa"
                            //showDisabledMonthNavigation
                            />
                            <span><FiCalendar size={20}/></span>
                            </div>
                            {/*========================================*/}

                            <div className="car-cards-name-price-top">
                                <p>Total:<span className="span-price">Rp {PriceTotal()}</span></p>
                            </div>

                            

                            <div className="cardesc-right-button">
                            <HandleButton/>
                            </div>
                        </div>
                        
                       
                    

                </div>
            </div>) : <h1 className="loading">Loading....</h1>

            }
            
            </div>
        </div>
    )
}

export default Aboutpackage;