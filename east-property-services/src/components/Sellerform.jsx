import React from "react";
import { useState } from "react";
//import { useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from'react-bootstrap/Col';


const SellerForm = () => {
    const [Sellertitle, setSellerTitle] = useState('');
    const [Sellerfirstname, setSellerFname] = useState('');
    const [Sellersurname, setSellerSurname] = useState('');
    const [Selleraddress, setSellerAddress] = useState('');
    const [Sellerpostcode, setSellerPostcode] = useState('');
    const [Sellerphone, setSellerPhone] = useState('');

    

    //const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const sellers = { Sellertitle, Sellerfirstname, Sellersurname, Selleraddress, Sellerpostcode, Sellerphone };


    fetch('http://localhost:8080/sellers/', {
     method: 'POST',
      headers: { "Content-Type": "application/json" },
     body: JSON.stringify(sellers)
   })
   setSellerTitle('');
   setSellerFname('');
   setSellerSurname('');
   setSellerAddress('');
   setSellerPostcode('');
   setSellerPhone('');
}

   return (
        <Form>
            <Form.Label>Enter new Seller</Form.Label>
            <Row className="mb-3">
            <Form.Group as={Col} controlId="formtitle">
        <Form.Label>Title</Form.Label>
        <Form.Select aria-label="Default" value={Sellersurname} onChange={(e) => setSellerSurname(e.target.value)}>
        <option>Choose</option>
        <option value={Sellertitle} onChange={(e) => setSellerTitle(e.target.value)}>Mr</option>
        <option value={Sellertitle} onChange={(e) => setSellerTitle(e.target.value)}>Miss</option>
        <option value={Sellertitle} onChange={(e) => setSellerTitle(e.target.value)}>Mrs</option>
        <option value={Sellertitle} onChange={(e) => setSellerTitle(e.target.value)}>Dr</option>
        </Form.Select>
      </Form.Group>
        <Form.Group as={Col}  controlId="formfirstname">
        <Form.Label>First name</Form.Label>
        <Form.Control type="firstname"  value={Sellerfirstname} onChange={(e) => setSellerFname(e.target.value)}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group as={Col} controlId="formsurname">
        <Form.Label>Surname</Form.Label>
        <Form.Control type="surname"  value={Sellersurname} onChange={(e) => setSellerSurname(e.target.value)}/>
        <Form.Text className="text-muted" >
        </Form.Text>
      </Form.Group>
      </Row>
      <Form.Group className="mb-3" controlId="formaddress">
        <Form.Label>Address</Form.Label>
        <Form.Control type="address"  value={Selleraddress} onChange={(e) => setSellerAddress(e.target.value)}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Row className="mb-3">
      <Form.Group as={Col} controlId="formpostcode">
        <Form.Label>Postcode</Form.Label>
        <Form.Control type="postcode" value={Sellerpostcode} onChange={(e) => setSellerPostcode(e.target.value)}/>
        <Form.Text className="text-muted fs-2" >
        </Form.Text>
      </Form.Group>
      <Form.Group as={Col} controlId="formphone">
        <Form.Label>Contact</Form.Label>
        <Form.Control type="phone" value={Sellerphone} onChange={(e) => setSellerPhone(e.target.value)}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      </Row>
      <Button variant="primary" type="submit">
        Add seller
      </Button>
    </Form>
   )
}
export default SellerForm;