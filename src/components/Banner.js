import "../css/local/partials/components/_banner.css"

const Banner = () => {
	return(
		<section className="banner">
			<div className="hero">
				<h1 className="topHeading">Super-charged DeFi Exchange</h1>
				<div className="heroSubHeading">
					<p className="subHeading">
						An Automated Market Maker and DApps guaranteed for speed and low fees transactions.
					</p>
				</div>
				<div className="buttons">
					<a href="#" className="btn smallBtn" type="button">Use Exchange</a>
					<a href="#" className="btn largeBtn" type="button">Documention</a>
					<a href="#" className="btn mediumBtn" type="button">FAQs</a>
				</div>
			</div>
		</section>
	)
}

export default Banner