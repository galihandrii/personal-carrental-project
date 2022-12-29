import { useState, useEffect } from "react";
import "./Aboutpackage.css"
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';


const Aboutpackage = () => {
    const [description,setDescription] = useState([{
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

    const {id} = useParams();
    const [car,setCar]= useState({})
    
    useEffect(()=>{
        axios
        .get(`https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`)
        .then((res)=>{
            console.log(res);
            setCar(res.data);
        })
        .catch((err)=> console.log(err.message))
    },[])
    
   
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
                    <h3>{car.name}</h3>
                    <p>Total:<span>Rp.{car.price}</span></p>
                </div>
            </div>) : <h1 className="loading">Loading....</h1>

            }
            <div className="cardesc-right-button"><Link to='/Login'><Button variant="info">Sign In For Rent</Button></Link></div>
            </div>
        </div>
    )
}

export default Aboutpackage;