import React, { Component } from 'react';
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Body from "./components/Body";

class App extends Component {
	state = {
		isClicked: false
	}
	render(){
		const toggleMode = () => {
			this.setState({
				isClicked: !this.state.isClicked
			})
		}
		return(
			<div className={this.state.isClicked ? "darkmode" : "lightmode"}>
			    <Header 
			    	isClicked = {this.state.isClicked}
			    	toggleMode = {toggleMode}
			    />
			    <Banner 
			    	isClicked = {this.state.isClicked}
			    />
				<Body
					isClicked = {this.state.isClicked}
				/>
		    </div>
		)
	}
}

export default App;
