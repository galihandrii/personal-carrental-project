
import Footer from '../components-LP/Footer'
import Navbar from '../components-LP/Navbar'
import Breadcrumb3 from '../components-payment/Breadcrumb3'
import './Tiket.css'
import success from "../assets/success.png"
import Button from 'react-bootstrap/Button';
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import moment from "moment/moment";
import 'moment/locale/id'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


const Tiket = ( ) => {
const [tiket,setTiket] = useState('');   
const {id} = useParams()



function dotCurrency(number) {
    const currency = number;
    return new Intl.NumberFormat('de-DE').format(currency)
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
         setTiket(res.data);
    } catch (error) {
        console.log(error.message);
    }
  }

    useEffect(() => {
      handleOrderId()
    },[])

    const startRent = moment(tiket.start_rent_at).format('LL')
    const endRent = moment(tiket.finish_rent_at).format('LL')
   
    const handleDownloadPdf = () => {
        const input = document.getElementById('Invoice'); // id yang sama dengan line 128
        html2canvas(input).then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF('p', 'pt', 'a6');
          pdf.addImage(imgData, 'JPEG', 10, 50);
          pdf.save('InvoiceMobil'); //nama PDF setelah download
        });
      };
   
   
   
    return(
        <div>
            <Navbar/>
            <Breadcrumb3/>
                    <div className='tiket'>
                        <div className='tiket-top'>
                            <div><img src={success}/> </div>
                            <div>
                                <h5>Pembayaran Berhasil!</h5>
                                <p>Tunjukkan invoice ini ke petugas BCR di titik temu</p>
                            </div>
                        </div>
                        <div className='tiket-bottom'>
                            <div className='tiket-invoice'>
                                <div>
                                    <h6>Invoice</h6>
                                    <p>*No Invoice</p>
                                </div>
                                <div className='invoice-unduh-btn'>
                                <Button variant="outline-primary" onClick={handleDownloadPdf} >Unduh</Button>
                                </div>
                            </div>
                            {
                                    Object.entries(tiket).length ? 
                                    (
                                        <div className="display-invoice" id="Invoice">
                                        <h4>BINAR CAR RENTAL INVOICE</h4>
    
                                            <div className="detail-invoice"> 
                                            <div className="detail-invoice-info">
                                                <p>Order ID     : {tiket.id}</p>
                                                <p>Email        : {tiket.User.email}</p>
                                                <p>Jenis Mobil  : {tiket.Car.name}</p>
                                                <p>Total Bayar  : Rp. {dotCurrency(tiket.total_price)},-</p>
                                                <p>Mulai Sewa   : {startRent}</p>
                                                <p>Akhir Sewa   : {endRent}</p>
                                                <p>© Binar Car Rental</p>
                                            </div>
                                                
                                            </div>
                                        </div>
                                    ):'Loading....'
                                }
                        </div>
                    </div>
               
            <Footer/>
        </div>
    )
}

export default Tiket;