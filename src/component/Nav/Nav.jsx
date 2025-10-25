
import { Link } from "react-router-dom";
import "./Nav.css";

function Navmenu() {
  return (
    <div className="all">
      <span>Ramah Tech</span>
  <div className="navbar">
<Link as={Link} to="/" className="nav-link-custom">الرئيسية</Link>
<Link as={Link} to="/services" className="nav-link-custom">خدماتنا</Link>
<Link as={Link} to="/portfolio" className="nav-link-custom">اعمالنا</Link>
<Link as={Link} to="/about" className="nav-link-custom">عننا</Link>
<Link as={Link} to="/contact" className="nav-link-custom">تواصل</Link>

              </div>
      </div>
    
  );
}

export default Navmenu;
