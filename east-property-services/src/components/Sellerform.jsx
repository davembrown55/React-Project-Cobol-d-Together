import React from "react";
import { useState } from "react";
//import { useNavigate} from "react-router-dom";




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
    <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="form-group col-md-6">
                <label>Title</label>
                <select value={Sellertitle} onChange={(e) => setSellerTitle(e.target.value)}>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
                </select>
            </div>
                <div className="form-group col-md-6">
                    <label htmlForm="sellerFName">First Name</label>
                    <input type="text" required value={Sellerfirstname} onChange={(e) => setSellerFname(e.target.value)}/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="sellerSurname">Surname</label>
                    <input type="text" required value={Sellersurname} onChange={(e) => setSellerSurname(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="sellerAddress">Address</label>
                    <input type="text" required value={Selleraddress} onChange={(e) => setSellerAddress(e.target.value)}/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="sellerPostcode" >Postcode</label>
                    <input type="text" required value={Sellerpostcode} onChange={(e) => setSellerPostcode(e.target.value)}/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="sellerPhone">Phone</label>
                    <input type="number" required value={Sellerphone} onChange={(e) => setSellerPhone(e.target.value)}/>
                </div>
            </div>
            <button type = "Submit">Add seller to system</button>
            
    </form>
   )
}
export default SellerForm;