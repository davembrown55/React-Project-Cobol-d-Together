import { Link } from "react-router-dom";
import styles from "../"

const Navbar = () => {
  return (
    
    <nav className="navbar">
      <h1>EAST Properties</h1>
      <div className="links">
      <Link to="/Home">Homepage</Link><p> </p>
        <Link to="/seller">Add Seller</Link>
        <Link to="/Findseller">Find Seller</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;