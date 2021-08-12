import "../css/local/partials/components/_banner.css"

const Banner = ({isClicked}) => {
	return(
		<section className={isClicked ? "banner banner-bg-darkmode" : "banner banner-bg-lightmode"}>
			<div className=" wrapper banner-container">
				<div className="child">
					<h1 className="hero-wrapper">
					Super-charged DeFi Exchange 
					</h1>
					<p className="">An Automated Market Maker and DApps guaranteed for speed <br/>and low fees transactions.</p>
					<div className=" center banner-button-wrapper">
						<button className="small banner-button button-active">
							<a id="smallText" href="#">Use Exchange</a>
						</button>
						<button className={isClicked ? "banner-button banner-button-darkmode" : "banner-button banner-button-lightmode"}>
							<a href="#">Documentation</a>
						</button>
						<button className={isClicked ? "banner-button banner-button-darkmode" : "banner-button banner-button-lightmode"}>
							<a href="#">FAQ</a>
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Banner