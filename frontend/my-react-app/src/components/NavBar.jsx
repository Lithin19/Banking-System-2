import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
export function NavBar() {
 return (
<nav className="navbar navbar-dark bg-dark fixed-top">
<div className="container-fluid">
<span className="navbar-brand">Banking App</span>
<div>
<Link className="btn btn-light me-2" to="/">Dashboard</Link>
</div>
</div>
</nav>
 );
}