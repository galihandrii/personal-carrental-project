import "./Hero.css"
import carImage from "../assets/img_car.png"
import { Link } from "react-router-dom"
import { useState } from "react"


const Hero = (props) => {
    const [click, setClick] = useState(true)
    const handleClick = () => {
        setClick(false)
        
    }

    return (
        <div className="banner-container">
            <div className="banner">
                <div className="banner-left">
                    <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                    <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                    {
                        props.isBtnShow ? 
                        null
                        : (<Link to='/Carimobil'><button onClick={handleClick}>Mulai Cari Mobil</button></Link>)
                    }
                   
                    
                </div>
                <div className="banner-right">
                <img src={carImage} alt="car-img"/>
                </div>
            </div>
        </div>
    )
}

export default Hero;