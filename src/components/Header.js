import "../css/local/partials/components/_header.css";
const Header = ({isClicked, toggleMode, toggleNavbar, handleClick}) => {
// hamburger button color
    const hamLight = {
        background: '#FFFFFF'
    }
    const hamDark = {
        background: '#131313'
    }
    return(
        <header className={isClicked ? " navbar-darkmode" : "navbar-lightmode" }>
            <div className="wrapper">
                <ul className="mobilenav list-unstyled">
                    <li className={toggleNavbar ? 'd-none': 'd-block list-unstyled'}>
                        <a href=""><img src="img/oreoswap-mobile-logo.png"  alt="company logo" className="logo mr-auto" id="logo"/></a>
                    </li>
                     <li  className={toggleNavbar ? "d-none" : " ml-auto"}>
                        <a href="#" onClick={toggleMode} className="m-auto">
                            <i className={isClicked ? "bi bi-sun-fill sun-icon" :  "bi bi-moon-fill moon-icon"}></i>
                        </a>
                    </li>
                    <div className={toggleNavbar ? "ml-auto": "m-0"} onClick={handleClick}>
                        <div className={toggleNavbar ? 'ln1 hamburger' : 'hamburger ln01'} style={!isClicked ? hamDark : hamLight}></div>
                        <div className={toggleNavbar ? 'ln2 hamburger' : 'hamburger'} style={!isClicked ? hamDark : hamLight}></div>
                        <div className={toggleNavbar ? 'ln3 hamburger' : 'hamburger ln02'} style={!isClicked ? hamDark : hamLight}></div>
                    </div>
                </ul>
                <nav className={toggleNavbar ? 'nav1': 'd-none'}>
                    <ul className="d-flex list-unstyled m-0">
                        <li onClick={toggleNavbar}>
                            <a href="#">Team</a>
                        </li>
                        <li onClick={toggleNavbar}>
                            <a href="#">Info</a>
                        </li>
                        <li onClick={toggleNavbar}>
                            <a href="#">Contact</a>
                        </li>
                        <li onClick={toggleNavbar}>
                            <a href="#">Github</a>
                        </li>
                        <li onClick={toggleNavbar}>
                            <a href="#">Blog</a>
                        </li>
                        <li onClick={toggleNavbar}>
                            <button className="navbar-button">
                                <a href="#">Use Exchange</a>
                            </button>
                        </li>
                    </ul>
                </nav>
                <div className="desktop-nav">
                    <nav className="topnav">
                        <ul className="d-flex list-unstyled my-3">
                            <li className="m-0">
                                <a href="/"><img src="img/oreoswap-brown-logo.png"  alt="company logo" className="logo mr-auto"/></a>
                            </li>
                            <li className="ml-auto my-auto">
                                <a href="#">Team</a>
                            </li>
                            <li className="my-auto">
                                <a href="#">Info</a>
                            </li>
                            <li className="my-auto">
                                <a href="#">Contact</a>
                            </li>
                            <li className="my-auto">
                                <a href="#">Github</a>
                            </li>
                            <li className="my-auto">
                                <a href="#">Blog</a>
                            </li>
                           <li  className="my-auto">
                                <a href="#" onClick={toggleMode} className="m-auto" style={{overflow : "hidden"}}>
                                    <i className={isClicked ? "bi bi-sun-fill sun-icon m-0" :  "bi bi-moon-fill moon-icon m-0"}></i>
                                </a>
                            </li>
                            <li  className="my-auto">
                                <button className="navbar-button m-0">
                                    <a href="#">Use Exchange</a>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            
        </header>

    )
}


export default Header;