import React, { Component } from 'react';
import "./App.css";
// components
import Header from "./components/Header";
import Banner from "./components/Banner";
import OptimizedSection from "./components/OPtimizedSection"
import Newsletter from "./components/Newletter"
import Footer from "./components/Footer"
// icons
import newsletterDarkBg from "./icons/newsletter-vector-dark.svg"
import newsletterLightBg from "./icons/newsletter-vector-light.svg"

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
				<OptimizedSection/>
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
