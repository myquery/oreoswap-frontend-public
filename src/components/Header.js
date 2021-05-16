import "../css/local/partials/components/_header.css";
const Header = () => {

    const toggleMode = () => {

    }

    return(
        <header className="oreoswap-header">
        <img src="img/oreoswap-brown-logo.png" className="oreoswap-logo"/>
        {/* <h1 className="oreoswap-header-item">OreoSwap</h1> */}
        <ul className="main-menu">
        <li className="menu-item">
        <a href="#">Team</a>
        </li>
        <li  className="menu-item">
        <a href="#">Info</a>
        </li>
        <li  className="menu-item">
        <a href="#">Contact</a>
        </li>
        <li  className="menu-item">
        <a href="#">Github</a>
        </li>
        <li  className="menu-item">
        <a href="#">Blog</a>
        </li>
        <li  className="menu-item">
        <a href="#" onClick={toggleMode}>
            {/* <img src="img/moon.svg" className="moon-icon"/> */}
            <i class="bi bi-moon-fill moon-icon"></i>
            </a>
        </li>
        <li  className="menu-item">
        <a href="#">Use Exchange</a>
        </li>
        </ul>
        
        </header>
    )
}

export default Header;