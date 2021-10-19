import "../css/local/partials/components/_footer.css";
function Footer() {
	return (
		<footer className ="footer">
			<div className="footer__main">
                <div className="footer__right">
                    <p className="footer__rightHeading">OreoSwap directly in your inbox</p>
                    <p className="footer__rightSubHeading">Get weekly updates about OreoSwap before anyone</p>
                    <form className="footer__search" action="https://oreoswap.us5.list-manage.com/subscribe/post?u=d7d834e3192d7d315eba83959&amp;id=cfacde7321" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" noValidate>
                        <input className="searchBar " type="email" placeholder="Enter your Email Address" name="EMAIL" id="mce-EMAIL" required/>
                        <button className="footer__btn" type="submit">Subscribe</button> 
                    </form>
                </div>
                <div className="footer__left">
                        <p className="footer__leftHeading">We do appreciate your feedback</p>
                        <p className="footer__leftSubHeading">hello@oreoswap.com</p>
                </div>
            </div>
            <div className="footer__bottom">
                <span className="footer__link link__left">&copy; 2021 OreoSwap</span>
                <ul className="footer__list">
                    {/* <li className="footer_listItem"><a className="" href="https://oreoswap.com/team" >Team</a></li>
                    <li className="footer_listItem"><a className="" href="https://oreoswap.com/info" >Info</a></li>
                    <li className="footer_listItem"><a className="" href="https://oreoswap.com/services" >Services</a></li> */}
                    <li className="footer_listItem"><a className="" href="https://github.com/oreoswap" target="_newtab">Github</a></li>
                    <li className="footer_listItem"><a className="" href="https://medium.com/@oreoswap/the-making-of-defi-1291a60053c3" target="_newtab">Blog</a></li>
                </ul>
            </div>
		</footer>


	)
}
export default Footer

  