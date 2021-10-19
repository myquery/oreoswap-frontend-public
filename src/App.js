import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import "./App.css";

// components
import Home from './components/Home';
import Header from "./components/Header";
import Footer from "./components/Footer"
import Development from './components/Development';

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
		
		// const time = new Date();
		// time.setSeconds(time.getSeconds() + 0);
	
		return(
			<Router>
				<main className={this.state.isClicked ? "darkmode" : "lightmode"}>
					

					<section>
						<Header
							isClicked={this.state.isClicked}
							toggleMode={toggleMode}
							toggleNavbar={this.state.toggleNavbar}
							handleClick={handleClick}
						/>
						<Switch>
							<Route exact path="/"
								render={(props)=>
									(
										<Home {...props}
											isClicked={this.state.isClicked}
										/>
									)
								}
							/>
							<Route path="/development"
								render={(props) =>
									(
										<Development {...props}
											isClicked={this.state.isClicked}
											// expiryTimestamp={time}
										/>
									)
								}
							/>
						</Switch>
						<Footer 
							isClicked={this.state.isClicked}
						/>
					</section>
				</main>
			</Router>
		)
	}
}

export default App;