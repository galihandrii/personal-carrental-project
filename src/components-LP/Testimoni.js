import "./Testimoni.css";
import Carousel from 'react-bootstrap/Carousel';
import man from "../assets/img_man.png"
import man2 from "../assets/img_woman.png"

const Testimoni = () => {
    

    
    return(
        <div>
            <div className="testimonial" id="testimonial">
                <div className="testi-top">
                    <h1>Testimonial</h1>
                    <p>Berbagai review positif dari para pelanggan</p>
                </div>
                <div className="testi-bottom">
                <Carousel>
      <Carousel.Item className="carousel">
        
        <div className="carousel-cards">
        <div className="carousel-left"><img src={man}/></div>
        <div className="carousel-right">
          <img/>
          <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
          <p>John Dee 32, Bromo</p>
        </div>
       </div>
        
       
      </Carousel.Item>
      <Carousel.Item className="carousel">
        
        <div className="carousel-cards">
        <div className="carousel-left"><img src={man2}/></div>
        <div className="carousel-right">
          <img/>
          <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
          <p>John Dee 32, Bromo</p>
        </div>
       </div>
        
       
      </Carousel.Item>
      <Carousel.Item className="carousel">
        
        <div className="carousel-cards">
        <div className="carousel-left"><img src={man}/></div>
        <div className="carousel-right">
          <img/>
          <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
          <p>John Dee 32, Bromo</p>
        </div>
       </div>
        
       
      </Carousel.Item>
     
    </Carousel>
                </div>
            </div>
        </div>
    )
    
}

export default Testimoni;