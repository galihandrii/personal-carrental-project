import "./Disablefilter.css"
import Form from 'react-bootstrap/Form';


const Disablefilter = () => {
    return (
       <div  className="searchcar-filter">
                <div className="filter-name">
                     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Nama Mobil</Form.Label>
                             <Form.Control
        type="text"
        aria-label="Disabled input example"
        disabled
        readOnly
      />
                     </Form.Group>
                 </div>
                 <div className="filter-name">
                     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Kategori</Form.Label>
                            <Form.Control
        type="text"
        aria-label="Disabled input example"
        disabled
        readOnly
      />
                     </Form.Group>
                
                </div>
                 <div className="filter-name">
                     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Harga</Form.Label>
                            <Form.Control
        type="text"
        aria-label="Disabled input example"
        disabled
        readOnly
      />
                     </Form.Group>
                
                </div>
                 <div className="filter-name">
                     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Status</Form.Label>
                            <Form.Control
        type="text"
        aria-label="Disabled input example"
        disabled
        readOnly
      />
                     </Form.Group>
                
                </div>
               
             </div>
    )
}

export default Disablefilter;