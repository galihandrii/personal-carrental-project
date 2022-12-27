import "./Whyus.css"
import thumb from "../assets/icon_complete.png"
import tag from "../assets/icon_price.png"
import clock from "../assets/icon_24hrs.png"
import pro from "../assets/icon_professional.png"


const Whyus = () => {
    return(
        <div>
            <div className="whyus-container" id="whyus">
                <div className="whyus-top">
                <h1>Why Us?</h1>
                <p>Mengapa harus pilih Binar Car Rental?</p>
                </div>
                <div className="whyus-bottom">
                    <div className="whyus-detail">
                        <div className="icon-det-yellow"><img className="img-why" src={thumb}/></div>
                        <p>Mobil Lengkap</p>
                        <p className="caption-det">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                    </div>
                    <div className="whyus-detail">
                        <div className="icon-det-red" ><img className="img-why" src={tag} /></div>
                        <p>Harga Murah</p>
                        <p className="caption-det">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                    </div>
                    <div className="whyus-detail">
                        <div className="icon-det-blue"><img className="img-why" src={clock}/></div>
                        <p>Layanan 24 Jam</p>
                        <p className="caption-det">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                    </div>
                    <div className="whyus-detail">
                        <div className="icon-det-green"><img className="img-why" src={pro}/></div>
                        <p>Sopir Profesional</p>
                        <p className="caption-det">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}
export default Whyus;