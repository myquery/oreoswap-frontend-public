import "../css/local/partials/components/_body.css"

const Body = ({isClicked}) => {
	return(
		<section col className={isClicked ? "body body-bg-darkmode" : "body body-bg-lightmode"}>
			<div className="wrapper body-container">
				<div className="">
					<h1 className="">
						Our Ever- <br />Growing Features
					</h1>
					<p className="">Designed to improve the user 
					<br />experience and contribute to the DEX <br />platform with support for <br />significant features li swapping, 
					<br />lottery system, P2P and Liquidity Pool.</p>
					<div className="body-img-wrapper">
						<img src="img/banner-img.png" alt="" className="banner-img"/>
					</div>
				</div>
				<div className="body-cards">
					
				</div>
			</div>
		</section>
	)
}

export default Body;