import "./Paymentdetail.css"
import axios from "axios";
import moment from "moment/moment";
import 'moment/locale/id'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const Paymentdetail = () => {
const {id} = useParams();
//const [car,setCar] = useState({});
const [order,setOrder] = useState({});
useEffect(()=>{
   handleOrderId()
},[])


    const handleOrderId = async() => {
        const token = localStorage.getItem("token")
        const config = {
            headers: {
                access_token: token
            },  
        }

        try {
            const res = await axios.get(`https://bootcamp-rent-cars.herokuapp.com/customer/order/${id}`,config)
            console.log(res)
             setOrder(res.data);
        } catch (error) {
            console.log(error.message);
        }
        

    }
// const dateStart = moment(localStorage.getItem("start"))
// const dateEnd = moment(localStorage.getItem("end"))
// const longDate = (Math.round((dateEnd - dateStart) / (1000 * 60 * 60 * 24))) + 1

const startRent = moment(order.start_rent_at).format('LL')
const endRent = moment(order.finish_rent_at).format('LL')



return (
        <div className="payment-top">
            <div className="detail-pesanan">
                <h5>Detail Pesananmu</h5>
            </div>
            {
                Object.entries(order).length ? (
                    <div className='payment-detail'>
                
                    <div>
                        <h6>Nama/Tipe Mobil</h6>
                         <p>{order.Car.name}</p> 
                    </div>
                    <div>
                        <h6>Kategori</h6>
                        <p>
                      {(() => {
                             if (order.Car.category === "small") {
                            return <p>2-4 Orang</p>
                        } else if (order.Car.category === "Medium") {
                             return <p>4-6 Orang</p>
                        } else if (order.Car.category === "large") {
                            return <p>6-8 Orang</p>
                        } else {
                            return '-'
                             }
                         })
                        () }  
                        
                        </p>
                    </div>
                    <div>
                        <h6>Tanggal Sewa</h6>
                        <p>{startRent}</p>
                    </div>
                    <div>
                        <h6>Tanggal Akhir Sewa</h6>
                        <p>{endRent}</p>
                    </div>
    
                </div>
                ):(null)
            }
           

        </div>
    )
}


 export default Paymentdetail;