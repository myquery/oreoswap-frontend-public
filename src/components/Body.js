import "../css/local/partials/components/_body.css"

const Body = () => {
	return(
		<div>
			<section  className="">
				<div className="svg-container">		
					<img src="img/body.svg" alt="bg" className="bg-desktop" />
					<img src="img/body-mobile.svg" alt="bg" className="bg-mobile"/>
					<p className="text-center d-flex align-items-center wrapper">
						OreoSwap is a DeFi powered Decentralized Exchange (DEX) developed
						using Binance Smart Chain (BSC) for BEP-20 token swap. The decentralized
						Exchange is created with Automated Market Maker (AMM) and Decentralized
						Applications (DApps) for fast and low transaction fees. Exciting features
						are high APR and APY in the yield Farming and Milkbar pools.
						Low fees and efficient user interface for both new and expert traders are
						our foremost concern. We wish you the best as you trade your way to financial
						freedom.
					</p>
				</div>
			</section>
		</div>
	)
}

export default Body;