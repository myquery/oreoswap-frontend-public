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
				<div className="card-container">
            		<div className={isClicked ? "bkg_overlay" : ""}></div>
                	<div className={isClicked ? "card-optimized-dark" : "card-optimized" }>
                	<span className="card-icon"><img src="img/Wallet.svg"/></span>
                    	Personal Wallet
                	</div>
                	<div className={isClicked ? "card-optimized-dark" : "card-optimized" }>
                	<span className={isClicked ? "card-icon" : "card-icon-dark"}><img src="img/stake-lp-token.svg"/></span>
                    	Liquidity Portals
                	</div>
                	<div className={isClicked ? "card-optimized-dark" : "card-optimized" }>
                	<span className="card-icon"><img src="img/Cryptocurrency Token.svg"/></span>
                    	Improved Portfolio
                	</div>
				<div>	
                	<div className={isClicked ? "card-optimized-dark" : "card-optimized" }>
                	<span className="card-icon"><img src="img/Reward.svg"/></span>
                    	Reward System
                	</div>
                	<div className={isClicked ? "card-optimized-dark" : "card-optimized" }>
                	<span className="card-icon"><img src="img/integration.svg"/></span>
                    	Stagewise Integration
                	</div>
					<div className={isClicked ? "card-optimized-dark" : "card-optimized" }>
                	<span className="card-icon"><img src="img/Payment Successful.svg"/></span>
                    	Safe Payment Gateway
                	</div>
            	</div>
				</div>
			</div>
		</section>
	)
}

export default Body;