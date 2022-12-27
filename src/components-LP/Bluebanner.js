import "./Bluebanner.css"
import { Link } from "react-router-dom";

const Bluebanner = () => {
    return(
        <div>
            <div className="bluebanner-container">
                <div className="bluebanner">
                <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <Link to="/Carimobil">
                <button>Mulai Sewa Mobil</button>
                </Link>
                </div>
                
            </div>
        </div>
    )
}
export default Bluebanner;