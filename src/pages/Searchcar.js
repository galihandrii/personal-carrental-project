
import Navbar from '../components-LP/Navbar';
import Footer from '../components-LP/Footer';
import Carfilter from '../components-searchcar/Carfilter';
import "./Searchcar.css"
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "../components-LP/Hero";


const Searchcar = () => {
    const [carData,setCardata] = useState([]);
    const [fName,setFname] = useState("");
    const [fCategory,setFcategory]= useState('');
    const [fStatus, setFstatus]= useState("");
    const [fPricemin,setFpricemin] = useState("");
    const [fPricemax,setFpricemax] = useState("");

    useEffect(()=>{
        axios
        .get("https://bootcamp-rent-cars.herokuapp.com/customer/v2/car")
        .then((res)=>{
            //console.log(res);
            setCardata(res.data.cars);
        })
        .catch((err)=> console.log(err.message))
    },[]);
    //console.log(carData);

    const handleChangeName = (e) => {
        setFname(e.target.value);
    };
    //console.log(fName);
    const handleFilter = (e) => {
        axios
        .get(`https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?name=${fName}&category=${fCategory}&isRented=${fStatus}&minPrice=${fPricemin}&maxPrice=${fPricemax}`)
        .then((res)=>{
            //console.log(res);
            setCardata(res.data.cars);
        })
        .catch((err)=> console.log(err.message))
    }
    
    
    const handleChangeCategory = (e) => {
        setFcategory(e.target.value)
    }
    const handleChangeStatus = (e) => {
        setFstatus(e.target.value)
    }
    const handleChangePricemin = (e) => {
        setFpricemin(e.target.value)
    }
    const handleChangePricemax = (e) => {
        setFpricemax(e.target.value)
    }

    return (
        <div>
            <Navbar/>
            <Hero isBtnShow={true}/>
            <Carfilter  ishandlePricemax={handleChangePricemax} ishandlePricemin={handleChangePricemin} ishandleChangeName={handleChangeName} ishandleFilter={handleFilter} ishandleCategory={handleChangeCategory} ishandleStatus={handleChangeStatus}/>
             <div className="card-wraper">
             {
                !!carData.length ? carData.map(function(item){
                    return (
                        <div className="card-car">
                            <div className="img-car"><img src={item.image}/></div>
                            <div className="item-con">
                                 <h4>{item.name}</h4>
                                <p><strong>Rp.{item.price}/hari</strong></p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                            <div>
                                    <Link to={`/Detailmobil/${item.id}`}>
                                    <button  className="btn-detail">Pilih Mobil</button>
                                    </Link>
                            </div>
                        </div>
                    )
                }) : null
             }
             </div>
            <Footer/>
        </div>
    )
}
export default Searchcar;