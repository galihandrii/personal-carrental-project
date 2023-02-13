import "./Paymentdetail.css"
import axios from "axios";
import moment from "moment/moment";
import 'moment/locale/id'


const Paymentdetail = () => {
    return (
        <div className="payment-top">
            <div className="detail-pesanan">
                <h5>Detail Pesananmu</h5>
            </div>

            <div className='payment-detail'>
                <div>
                    <h6>Nama/Tipe Mobil</h6>
                    <p>innova</p>
                </div>
                <div>
                    <h6>Kategori</h6>
                    <p>6-8 Orang</p>
                </div>
                <div>
                    <h6>Tanggal Sewa</h6>
                    <p>2 Juni 2022</p>
                </div>
                <div>
                    <h6>Tanggal Akhir Sewa</h6>
                    <p>8 Juni 2022</p>
                </div>

            </div>

        </div>
    )
}


 export default Paymentdetail;