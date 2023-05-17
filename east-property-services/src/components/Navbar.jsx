import { Link } from "react-router-dom";
import styles from "../"

const Navbar = () => {
  return (
    
    <nav className="navbar">
      <h1>EAST Property Services</h1>
      {/* <div className="links">
      <Link to="/Home">Homepage</Link><p> </p>
        <Link to="/seller">Add Seller</Link>
        <Link to="/Findseller">Find Seller</Link>
      </div> */}
      <ul>
          <li>
              <Link to="/Home">Home</Link> 
          </li>
          <li>
              <Link to="/Properties">Properties</Link>
          </li>
          <li>
              <Link to="/Seller"> Add Sellers</Link>
          </li>
          <li>
              <Link to="/Buyers">Add Buyers</Link>
          </li>
          <li>
              <Link to="/Booking">Viewings</Link>
          </li>
      </ul>

    </nav>
  );
}
 
export default Navbar;