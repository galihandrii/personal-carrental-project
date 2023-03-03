import './Paymentfinish.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';


const Paymentfinish = () => {
    const [image, setImage] = useState(null)
    const [order, setOrder] = useState({})
    const {id} = useParams()
    const bank = localStorage.getItem("bank")
    const [confirm, setConfirm] = useState(false);
    const navigate = useNavigate()
    const [atm, setAtm] = useState(true)
    const [mBanking, setMBanking] = useState(false)
    const [clickBca, setClickBca] = useState(false)
    const [iBanking, setIBanking] = useState(false)


    const handleUpload = () => {
        setConfirm(false)
    }
    const handleImage = (e) => {
        setImage(e.target.files[0]);
        console.log(e.target.files[0])
    }
    
    const handleConfirm = () => {
        setConfirm(true);
    }

    function dotCurrency(number) {
        const currency = number;
        return new Intl.NumberFormat('de-DE').format(currency)
    }
    
    // const copyToClipboard = async () => {
    //     try {
    //       await navigator.clipboard.writeText(text);
    //       alert('Copied to clipboard!');
    //     } catch (err) {
    //       console.error('Failed to copy: ', err);
    //     }
    // };

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


        function displayDeadline() {
            const today = new Date();
        let tomorrow = new Date();
        tomorrow.setDate(today.getDate()+1)
    
        let hour = tomorrow.getHours()
        let minute = tomorrow.getMinutes()
    
        const dispDate = new Intl.DateTimeFormat('id-ID', { dateStyle: 'full'}).format(tomorrow); 
        const dispTime = `Jam ${hour}:${minute}`
        return (
            <p className='judul-1'>{dispDate} {dispTime}</p>
        )
        }

        const handleAtm = () => {
            setAtm(true)
            setMBanking(false)
            setClickBca(false)
            setIBanking(false)
        }
    
        const handleMBanking = () => {
            setAtm(false)
            setMBanking(true)
            setClickBca(false)
            setIBanking(false)
        }
    
        const handleClickBca = () => {
            setAtm(false)
            setMBanking(false)
            setClickBca(true)
            setIBanking(false)
        }
    
        const handleIBanking = () => {
            setAtm(false)
            setMBanking(false)
            setClickBca(false)
            setIBanking(true)
        }

        function displayAtm(){
            return (
                <ul className='display-function'>
                                                <li>Masukkan kartu ATM, lalu PIN</li>
                                                <li>Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek BCA Virtual Account”</li>
                                                <li>Masukkan nomor BCA Virtual Account: 70020+Order ID<br />
                                                Contoh:<br />
                                                No. Peserta: 12345678, maka ditulis 7002012345678</li>
                                                <li>Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi</li>
                                                <li>Ambil dan simpanlah bukti transaksi tersebut</li>
                                            </ul>
            )
        }
    
        function displayMbca() {
            return(
                <ul className='display-function'>
                <li>Login dengan akun Mbanking Anda</li>
                <li>Pilih menu “m-Transfer”, pilih “BCA Virtual Account”</li>
                <li>Input Kode Virtual Account: 39107+20+NRP<br />
                Contoh:<br />
                No. Peserta: 12345678, maka ditulis 7002012345678</li>
                <li>Klik menu “Simpan Daftar Transfer” untuk menyimpan nomor pembayaran</li>
                <li>Klik OK kemudian Kirim/Send</li>
                <li>Input PIN BCA untuk mengotorisasi</li>
                <li>Ikuti instruksi untuk menyelesailkan transaksi</li>
            </ul>
            )
        }
    
        function displayKlikBca() {
            return(
                <ul className='display-function'>
                <li>Buka halaman BCAKlikPay</li>
                <li>Pilih menu Registrasi</li>
                <li>Baca Syarat dan Ketentuan</li>
                <li>Isi data dengan benar</li>
                <li>Pilih sumber dana pembayaran. Untuk saat ini DTKP hanya mendukung metode pembayaran BCA KlikPay dengan sumber dana dari KlikBCA</li>
                <li>Anda akan menerima kode aktivasi lewat email dan SMS</li>
            </ul>
            )
        }
    
        function displayInternetBanking(){
            return(
                <ul className='display-function'>
                                                <li>Login ke KlikBCA Individual</li>
                                                <li>Pilih Menu “Transfer”</li>
                                                <li>Pilih Menu “Transfer ke BCA Virtual Account”</li>
                                                <li>Input Kode Virtual Account: 39107+20+NRP<br />
                                                Contoh:<br />
                                                No. Peserta: 12345678, maka ditulis 7002012345678</li>
                                                <li>Pilih “Lanjutkan” untuk melanjutkan pembayaran</li>
                                                <li>Masukkan Respon KeyBCA Apply 1</li>
                                                <li>Ikuti instruksi untuk menyelesaikan transaksi</li>
                                            </ul>
            )
        }








    return (
        <div className='pc'>
            <div className='pc-left'>
                <div className='pc-left-top'>
                   <div className='pc-left-top-date'>
                    <h6>Selesaikan Pembayaran Sebelum</h6>
                    <p>{displayDeadline()}</p>
                   </div>
                   <div className='pc-left-top-count'>
                    <h5>countdown</h5>
                   </div>
                </div>
                <div className='pc-left-mid'>
                <div><h6>Lakukan Transfer Ke</h6></div>
                    <div className='pc-left-mid-bank'>
                        <div className='bank-picked'>
                        {(()=>{
                                                        if (localStorage.getItem("bank") === "BCA Transfer"){
                                                            return<p>BCA</p>
                                                        } else if (localStorage.getItem("bank") === "BNI Transfer"){
                                                            return<p>BNI</p>
                                                        } else if (localStorage.getItem("bank") === "Mandiri Transfer"){
                                                            return<p>Mandiri</p>
                                                        }
                                                   })()
                                                     }
                        </div>
                        <div>
                        {(()=>{
                                                        if (localStorage.getItem("bank") === "BCA Transfer"){
                                                            return<p>BCA Transfer</p>
                                                        } else if (localStorage.getItem("bank") === "BNI Transfer"){
                                                            return<p>BNI Transfer</p>
                                                        } else if (localStorage.getItem("bank") === "Mandiri Transfer"){
                                                            return<p>Mandiri Transfer</p>
                                                        }
                        })()}
                        {
                                    Object.entries(order).length ? (
                                        <p>a.n {order.User.email}</p>
                                    ) : null
                        }   
                            
                        </div>
                    </div>
                    <div>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Nomor Rekening</Form.Label>
                                <Form.Control type="email" placeholder=""  />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Total Bayar</Form.Label>
                                <Form.Control  placeholder="" value={`Rp. ${dotCurrency(order.total_price)}`} />
                            </Form.Group>
                        </Form>
                    </div>
                </div>
                <div className='pc-left-bottom'>
                    <div><h6>Instruksi Pembayaran </h6></div>
                    <div className='pc-left-bottom-detail'>
                        <div className={atm ? 'payment-choice-2':'payment-choice-1'} onClick={handleAtm}>ATM BCA</div>
                        <div className={mBanking ? 'payment-choice-2':'payment-choice-1'} onClick={handleMBanking}>M-BCA</div>
                        <div className={clickBca ? 'payment-choice-2':'payment-choice-1'} onClick={handleClickBca}>BCA-Klik</div>
                        <div className={iBanking ? 'payment-choice-2':'payment-choice-1'} onClick={handleIBanking}>Internet Banking</div>
                    </div>
                    <div className='deskripsi-payment'>
                    {(() => {
                                                    if(atm === true){
                                                        return(
                                                            displayAtm()
                                                        )
                                                    } else if(mBanking === true){
                                                        return(
                                                        displayMbca()
                                                        )
                                                    } else if(clickBca === true){
                                                        return(
                                                        displayKlikBca()
                                                        )
                                                    } else if(iBanking === true){
                                                        return(
                                                            displayInternetBanking()
                                                        )
                                                    }
                     })()}
                    </div>
                </div>
            </div>
            
                {
                    confirm ? 
                    (<div  className='pc-right-after'>
                        <div>
                            <div><h6>Konfirmasi Pembayaran</h6></div>
                            <div>countdown</div>
                        </div>
                        <div>
                            <p >Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu akan segera kami cek tunggu kurang lebih 10 menit untuk mendapatkan konfirmasi.</p>
                            <p >Upload Bukti Pembayaran</p>
                            <p >Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa upload bukti bayarmu</p>
                        </div>
                       <div>
                        dropzone
                       </div>
                       <div className='upload-btn'>
                       <Button variant="success">upload</Button>
                       </div>

                    </div>
                        
                    ):(
                        <div className='pc-right-before'>
                            <div>
                                <h6>Klik konfirmasi pembayaran untuk mempercepat proses pengecekan</h6>
                            </div>
                            <div className='konfirmasi-pembayaran-btn'>
                            <Button  variant="success" onClick={handleConfirm}>Konfirmasi Pembayaran</Button> 
                            </div>
                        </div>
                    )
                }
           

        </div>
    )
}

export default Paymentfinish;