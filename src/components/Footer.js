import React from 'react'
import "../css/local/partials/components/_footer.css"


function Footer() {
	return (
		<div className="footer">
            <div className="line"></div>
			 <div className="footer__main">
            	<div className="footer__left">
                	<p className="footer__leftHeading">We do apprecite your feedback</p>
                	<p className="footer__leftSubHeading">hello@oreoswap.com</p>
            	</div>

            <div className="footer__right">
                <p className="footer__rightHeading">OreoSwap directly in your inbox</p>
                <p className="footer__rightSubHeading">Get weekly updates about OreoSwap before anyone</p>

                <div className="footer__search">
                    <input className="search" type="text" placeholder="Enter Your Email" />
                    <button className="footer__btn">Subscribe</button>
                </div>
            </div>
        </div>

		<div className="footer__bottom">
            <a className="footer__link">&copy; 2021 OreoSwap</a>

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


