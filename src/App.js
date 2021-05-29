import React, { Component } from 'react';
import "./App.css";
// components
import Header from "./components/Header";
import Banner from "./components/Banner";
import StatisticSection from "./components/StatisticSection"
import OptimizedSection from "./components/OPtimizedSection"
import Newsletter from "./components/Newletter"
import Footer from "./components/Footer"
import Card from "./components/Card";
// icons
import newsletterDarkBg from "./icons/newsletter-vector-dark.svg"
import newsletterLightBg from "./icons/newsletter-vector-light.svg"
import wallet from "./icons/Wallet.svg";
import reward from "./icons/Reward.svg";
import medal from "./icons/Medal.svg";
import integration from "./icons/Integration.svg";
import improvedPortfolio from "./icons/ImprovedPortfolio.svg";
import safePaymentGateway from "./icons/SafePaymentGateway.svg";

class App extends Component {
	state = {
		isClicked: false,
		toggleNavbar: false
	}
	render(){
		const toggleMode = () => {
			this.setState({
				isClicked: !this.state.isClicked
			})
		}
		const handleClick = () => {
			this.setState({
				toggleNavbar: !this.state.toggleNavbar
			})
		}
		return(
			<div className={this.state.isClicked ? "darkmode" : "lightmode"}>
			    <Header 
			    	isClicked = {this.state.isClicked}
			    	toggleMode = {toggleMode}
			    	toggleNavbar= {this.state.toggleNavbar}
			    	handleClick ={handleClick}
			    />
			    <Banner 
			    	isClicked = {this.state.isClicked}
			    />
				<StatisticSection
				 	isClicked = {this.state.isClicked}
				/>
				<div className="cardComponent">
					<Card
						isClicked={this.state.isClicked}
						cardTitle="Personal Wallet"
						cardImage={wallet}
					/>
					<Card
						isClicked={this.state.isClicked}
						cardTitle="Liquidity Portal"
						cardImage={medal}
					/>
					<Card
						isClicked={this.state.isClicked}
						cardTitle="Improved Portfolio"
						cardImage={improvedPortfolio}
					/>
					<Card
						isClicked={this.state.isClicked}
						cardTitle="Reward System"
						cardImage={reward}
					/>
					<Card
						isClicked={this.state.isClicked}
						cardTitle="Stepwise Integration"
						cardImage={integration}
					/>
					<Card
						isClicked={this.state.isClicked}
						cardTitle="Safe Payment Gateway"
						cardImage={safePaymentGateway}
					/>
				</div>

				<OptimizedSection
					toggleMode = {toggleMode}
					isClicked = {this.state.isClicked}
				
				/>
			    <Newsletter 
			    	isClicked = {this.state.isClicked}
			    	newsletterLightBg = { newsletterLightBg } 
			    	newsletterDarkBg= { newsletterDarkBg }
			    />
			    <Footer
			    	isClicked = {this.state.isClicked}
			     />
		    </div>
		)
	}
}

export default App;
