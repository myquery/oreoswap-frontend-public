import "../css/local/partials/components/_footer.css"



function Footer() {
	return (
		<div className ="footer">
			{/* <div className="footer__line"></div> */}
			 <div className="footer__main">
            	
            <div className="footer__right">
                <p className="footer__rightHeading">OreoSwap directly in your inbox</p>
                <p className="footer__rightSubHeading">Get weekly updates about OreoSwap before anyone</p>

                <form className="footer__search">
                    <input type="email" placeholder="Enter your Email Address" className="searchBar"  />
                    <button className="footer__btn" type="submit" >Subscribe</button>
                </form>
            </div>

			<div className="footer__left">
                	<p className="footer__leftHeading">We do apprecite your feedback</p>
                	<p className="footer__leftSubHeading">hello@oreoswap.com</p>
            </div>
        </div>

		<div className="footer__bottom">
            <a className="footer__link link__left">&copy; 2021 OreoSwap</a>

            <ul className="footer__list">
                <li className="footer_listItem"><a className="footer_link" href="">Team</a></li>
                <li className="footer_listItem"><a className="footer_link" href="">Info</a></li>
                <li className="footer_listItem"><a className="footer_link" href="">Services</a></li>
                <li className="footer_listItem"><a className="footer_link" href="">Github</a></li>
                <li className="footer_listItem"><a className="footer_link" href="">Blog</a></li>
            </ul>
        </div>
		</div>


	)
}
export default Footer