import "../css/local/partials/components/_body.css"

const Body = ({ isClicked, everGrowingDarkBg, everGrowingLightBg }) => {
	return(
		<section className="body">
			<div className="body-wrapper">
				<img src={ isClicked ? everGrowingDarkBg : everGrowingLightBg } className="body-bg" alt=""/>
				<div className=" body-container wrapper">
					<div className="">
						<h1>
							Our Ever- <br />Growing Features
							<div className={isClicked ? "ever-growing-dark" : "ever-growing-light"}></div>
						</h1>
						<p className="">
							Designed to improve the user experience and contirbute to the DEX platform usage with support for significant features like swapping, lottery system, P2P and liquidity pool.
						</p>
						<div className="body-img-wrapper">
							<img src="img/banner-img.png" alt="oreo-bisscuit" className="banner-img"/>
						</div>
					</div>
					<div className="cards-container text-center">
	                	<div className="card-wrapper custom-card1">
	                		<figure className={isClicked ? "cards cards-darkmode" : " cards-lightmode cards" }>
	                			<img src="img/Wallet.svg" alt="Wallet icon" className=""/>
	                			<figcaption> Personal Wallet </figcaption>
	                		</figure>
	                	</div>
	                	<div className="card-wrapper">
	                		<figure className={isClicked ? "cards cards-darkmode" : " cards-lightmode cards" }>
	                			<img src="img/medal.svg" alt="medal icon" className=""/>
	                			<figcaption>Liquidity Portals</figcaption>
	                		</figure>
	                	</div>
	                	<div className="card-wrapper custom-card2">
		                	<figure className={isClicked ? "cards cards-darkmode" : " cards-lightmode cards" }>
			                	<img src="img/Cryptocurrency Token.svg" alt="contract" className=""/>
			                	<figcaption> Improved<br/>Portfolio</figcaption>
		                	</figure>
	                	</div>
	                	<div className="card-wrapper">
	                		<figure className={isClicked ? "cards cards-darkmode" : " cards-lightmode cards" }>
	                			<img src="img/Reward.svg" alt="reward icon" className=""/>
	                			<figcaption>Reward System </figcaption>
	                		</figure>
	                	</div>
	                	<div className="card-wrapper custom-card1">
	                		<figure className={isClicked ? "cards cards-darkmode" : " cards-lightmode cards" }>
		                		<img src="img/integration.svg" alt="Stagewise icon" className=""/>
		                		<figcaption>Stagewise<br/>Integration</figcaption>
	                		</figure>
	                	</div>
						<div className="card-wrapper">
	                		<figure className={isClicked ? "cards cards-darkmode" : " cards-lightmode cards" }>
	                			<img src="img/Payment Successful.svg" alt="safe payment" className=""/>
	                			<figcaption>Safe Payment<br/>Gateway</figcaption>
	                		</figure>
	               		</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Body;