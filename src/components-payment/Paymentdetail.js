import "./Paymentdetail.css"
import axios from "axios";
import moment from "moment/moment";
import 'moment/locale/id'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const Paymentdetail = () => {
const {id} = useParams();
const  [car,setCar] = useState({});

useEffect(()=>{
    axios
            .get(`https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`)
            .then((ress) => {
                // console.log(ress.data)
                setCar(ress.data)
            })
            .catch((err) => console.log(err.message))
},[])

const dateStart = moment(localStorage.getItem("start"))
const dateEnd = moment(localStorage.getItem("end"))
const longDate = (Math.round((dateEnd - dateStart) / (1000 * 60 * 60 * 24))) + 1

   



return (
        <div className="payment-top">
            <div className="detail-pesanan">
                <h5>Detail Pesananmu</h5>
            </div>

            <div className='payment-detail'>
                <div>
                    <h6>Nama/Tipe Mobil</h6>
                    <p>{car.name}</p>
                </div>
                <div>
                    <h6>Kategori</h6>
                    <p>
                    {(() => {
                         if (car.category === "small") {
                        return <p>2-4 Orang</p>
                    } else if (car.category === "Medium") {
                         return <p>4-6 Orang</p>
                    } else if (car.category === "large") {
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
                    <p>{dateStart.format('LL')}</p>
                </div>
                <div>
                    <h6>Tanggal Akhir Sewa</h6>
                    <p>{dateEnd.format("LL")}</p>
                </div>

            </div>

        </div>
    )
}


 export default Paymentdetail;