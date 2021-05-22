import "../css/local/partials/components/_footer.css"

const Footer = ({isClicked}) => {
	return(
		<footer className={isClicked ? "footer-darkmode" : "footer-lightmode"}>
			<nav className="wrapper">	
				<ul className="footer-nav list-unstyled d-flex">
					<li className="m-0">&copy; 2021 OreoSwap</li>
					<li className="ml-auto"><a href="">About</a></li>
					<li><a href="">Disclaimer</a></li>
					<li><a href="">Trademark</a></li>
					<li><a href="">Brand</a></li>
				</ul>
			</nav>
		</footer>
	)
}

export default Footer