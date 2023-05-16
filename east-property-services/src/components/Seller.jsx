import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../App.css"

const CreateSeller = () => {
  const [title, setTitle] = useState('');
  const [firstname, setFname] = useState('');
  const [surname, setSurname] = useState('');
  const [address, setAddress] = useState('');
  const [postcode, setPostcode] = useState('');
  const [phone, setPhone] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
   e.preventDefault();
   const seller = { title, firstname, surname, address, postcode, phone };

    fetch('http://localhost:8000/seller/', {
     method: 'POST',
      headers: { "Content-Type": "application/json" },
     body: JSON.stringify(seller)
    }).then(() => {
     navigate('/');
   })
   }

  return (
    
    <div className="create-seller">
      <h2>Add a new Seller</h2>
      <form onSubmit={handleSubmit}>
      <label for="title">Title:</label>
      <select id="Title" name="title">
      <option value={title}>Mr</option>
      <option value={title}>Mrs</option>
      <option value={title}>Miss</option>
      <option value={title}>Dr</option>
      onChange={(e) => setTitle(e.target.value)}
     </select>
        <br></br>
        <label id="icon" for="name"><i class="fas fa-envelope"></i></label>
        <label>First Name:</label>
        <input
        type ="text"
          required
          value={firstname}
          onChange={(e) => setFname(e.target.value)}
        ></input><br></br>
        <label>Surname:</label>
        <input
            type="text" placeholder ="E.g. Smith"
            required
           value={surname}
          onChange={(e) => setSurname(e.target.value)}
        /><br></br>
        <label>Address:</label>
         <input 
          type="text" 
          required 
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        /><br></br>
        <label>Postcode:</label>
        <input
        type="text"
          required
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
        ></input><br></br>
        <label>Phone number:</label>
        <input
            type="number"
            max = "11"
           value={phone}
          onChange={(e) => setPhone(e.target.value)}
        ></input><br></br>
        <button>Add seller to system</button>
      </form>
    </div>
  );
}
 
export default CreateSeller;