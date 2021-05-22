import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import "../css/local/partials/components/_header.css";
const Header = ({isClicked, toggleMode}) => {

    return(
        <header className={isClicked ? "oreoswap-header navbar-darkmode" : "oreoswap-header navbar-lightmode" }>
        <img src="img/oreoswap-brown-logo.png" className="oreoswap-logo"/>
        {/* <h1 className="oreoswap-header-item">OreoSwap</h1> */}

{/* 
        <Navbar bg="light" expand="lg">
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"  >
            <Nav.Link href="#home">Team</Nav.Link>
            <Nav.Link href="#features">  Men</Nav.Link>
            <Nav.Link href="#pricing"> Wome</Nav.Link>
            <Nav.Link href="#pricing">Babies</Nav.Link>
            <Nav.Link href="#pricing">Community</Nav.Link>
            <Nav.Link href="#pricing">Vendors</Nav.Link>
            <Nav.Link href="#pricing" href="#"> Send a Measurement</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar> */}

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a href="#" onClick={toggleMode} className="switch-mode">
            {/* <img src="img/moon.svg" className="moon-icon"/> */}
            <i className={isClicked ? "bi bi-sun-fill sun-icon" :  "bi bi-moon-fill moon-icon"}></i>
            </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="main-menu navbar-nav">
        <li className="menu-item nav-item">
        <a className="nav-link" href="#">Team</a>
        </li>
        <li  className="menu-item nav-item">
        <a className="nav-link" href="#">Info</a>
        </li>
        <li  className="menu-item nav-item">
        <a className="nav-link" href="#">Contact</a>
        </li>
        <li  className="menu-item nav-item">
        <a className="nav-link" href="#">Github</a>
        </li>
        <li  className="menu-item nav-item">
        <a className="nav-link" href="#">Blog</a>
        </li>
        <li  className="menu-item nav-item">
        <a className="nav-link" href="#" onClick={toggleMode}>
            {/* <img src="img/moon.svg" className="moon-icon"/> */}
            <i className={isClicked ? "bi bi-sun-fill sun-icon" :  "bi bi-moon-fill moon-icon"}></i>
            </a>
        </li>
        <li  className="menu-item nav-item">
        <a className="nav-link" href="#">Use Exchange</a>
        </li>
        </ul>
        </div>
        </nav>
        
        </header>
    )
}

export default Header;