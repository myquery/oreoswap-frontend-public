import "../css/local/partials/components/_body.css"

const Body = ({ isClicked, everGrowingDarkBg, everGrowingLightBg }) => {
	return(
		<section  className="introductory-wrapper mx-auto">

			<div className="body-container">
			{/* <img className="introductory-bk" src="img/wave.png" alt="Introductory Background" height="800px" /> */}
			<p className="wrapper intro-content">OreoSwap is a DeFi powered Decentralized Exchange (DEX) developed 
				using Binance Smart Chain (BSC) for BEP-20 token swap. The decentralized 
				Exchange is created with Automated Market Maker (AMM) and Decentralized Applications 
				(DApps) for fast and low transaction fees. Exciting features are high APR & APY in our
				 yield farming and milkbar pools, low fees and Efficient user interface for both new and 
				 expert traders are our formost concern. We wish you the best as you trade your way to financial freedom.</p>

			</div>
		</section>
	)
}

export default Body;