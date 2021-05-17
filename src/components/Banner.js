import "../css/local/partials/components/_banner.css"

const Banner = ({isClicked}) => {
	return(
		<section className={isClicked ? "banner banner-bg-darkmode" : "banner banner-bg-lightmode"}>
			<div className="wrapper banner-container">
				<div className="">
					<h1 className="">
						The New All Powerful Decentralized Trading Protocol
					</h1>
					<p className="">An Automated Market Maker and DApps guaranteed for speed and low fees transactions.</p>
					<div className="d-flex flex-column flex-md-row flex-lg-column flex-xl-row banner-button-wrapper">
						<button className="banner-button button-active"><a href="">Use Exchange</a></button>
						<button className={isClicked ? "banner-button banner-button-darkmode" : "banner-button banner-button-lightmode"}><a href="">Documentation</a></button>
						<button className={isClicked ? "banner-button banner-button-darkmode" : "banner-button banner-button-lightmode"}><a href="">FAQ</a></button>
					</div>
				</div>
				<div className="banner-img-wrapper">
					<img src="img/banner-img.png" alt="" className="banner-img"/>
				</div>
			</div>
		</section>
	)
}

export default Banner