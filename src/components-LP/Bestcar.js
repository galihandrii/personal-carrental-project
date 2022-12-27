import "./Bestcar.css";
import girlImg from "../assets/woman.png"
import { useState } from "react";
//import imgVector from " ../assets/Vector.png";

const Bestcar = () =>{
const [list,setList] = useState([
{
    icon : "✔️",
    name : "Sewa Mobil Dengan Supir di Bali 12 Jam",

},
{
    icon : "✔️",
    name: "Sewa Mobil Lepas Kunci di Bali 24 Jam",
},
{
    icon : "✔️",
    name: "Sewa Mobil Jangka Panjang Bulanan",
},
{
    icon : "✔️",
    name: "Gratis Antar - Jemput Mobil di Bandara",
},
{
    icon : "✔️",
    name: "Layanan Airport Transfer / Drop In Out"
},

])

    return(
        <div className="bestcar-container" id="ourservice">
            <div className="bestcar">
                <div className="bestcar-left">
                    <div className="img-bg-girl"><img src={girlImg}/></div>
                </div>
                <div className="bestcar-right">
                    <h1>Best Car Rental for any kind of trip in (Lokasimu)!</h1>
                    <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                    {
                        list.map(function(item){
                            return(
                                <div>
                                    <p><span>{item.icon}</span>{item.name}</p>
                                </div>
                            )
                        })
                    };
                </div>
            </div>
        </div>
    )
}
export default Bestcar;