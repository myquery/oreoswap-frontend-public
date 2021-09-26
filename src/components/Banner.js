import { useAlert } from 'react-alert';
import "../css/local/partials/components/_banner.css";
// import {NavLink} from "react-router-dom"

const Banner = () => {
	const alert = useAlert()
	const showAlert = () => {
		alert.show("Coming Soon!!!")
	}
	return(
		<section className="banner">
			<div className="wrapper banner-container">
			
			<div className="hero">
				<h1 className="topHeading">Super-charged DeFi Exchange</h1>
				<div className="heroSubHeading">
					<p className="subHeading">
						An Automated Market Maker and DApps guaranteed for speed <br/>and low fees transactions.
					</p>
				</div>
				<div className="buttons">
					<a href="#" className="btn smallBtn" tygpe="button" onClick={showAlert}>Use Exchange</a>
					<a href="#" className="btn largeBtn btns" type="button">Documentation</a>
					<a href="#" className="btn mediumBtn btns" type="button">FAQs</a>
				</div>
			</div>
			</div>
			{/* <div className="eclipse"></div> */}
		</section>
	)
}

export default Banner