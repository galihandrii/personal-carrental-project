import "./Bankdetail.css"
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';


const Bankdetail = () => {

    function CustomToggle({ children, eventKey }) {
        const decoratedOnClick = useAccordionButton(eventKey, () =>
          console.log('totally custom!'),
        );
      
        return (
          <button
            type="button"
            style={{ backgroundColor: 'pink' }}
            onClick={decoratedOnClick}
          >
            {children}
          </button>
        );
      }




    return (
        <div className="bank-detail">
            <div className="bd-left">
                <div>
                    <h6>Pilih Bank Transfer</h6>
                    <p>Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking</p>
                </div>
                <div className="bd-left-bank" >
                <div className="bank-name"><h6>BNI</h6></div>
                <div className="bank-trf"><h6>BNI Transfer</h6></div>
                </div>
                <div className="bd-left-bank">
                <div className="bank-name"><h6>BCA</h6></div>
                <div className="bank-trf"><h6>BCA Transfer</h6></div>
                </div>
                <div className="bd-left-bank">
                <div className="bank-name"><h6>Mandiri</h6></div>
                <div className="bank-trf"><h6>Mandiri Transfer</h6></div>
                </div>
            </div>
            <div className="bd-right">
            <Accordion defaultActiveKey="0">
             <Card>
             <Card.Header>
              <CustomToggle eventKey="1">Click me!</CustomToggle>
             </Card.Header>
              <Accordion.Collapse eventKey="1">
             <Card.Body>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Card.Body>
             </Accordion.Collapse>
             </Card>
             </Accordion>

            </div>
        </div>
    )
}

export default Bankdetail;