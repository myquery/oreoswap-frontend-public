import "../css/local/partials/components/_countdown-timer.css"
import Desktop from "../Assets/timer.svg"
import Mobile from "../Assets/timer-mobile.svg"
import Countdown from "./Timer"
import Address from "./Address"
const Timer = () => {
	return(
		<div>
			<section  className="">	
				<div className="countdown-svg-container">		
					<img src={Desktop} alt="countdown-SVG-background" className="countdown-bg-desktop" />
					<img src={Mobile} alt="bg" className="countdown-bg-mobile"/>
				<div className="timer text-center d-flex align-items-center">
					<Address />
                    <h1 className="timer-header-text">PRIVATE ROUND 2 STARTING IN</h1>
                    <div className="timer-countdown">
                    <Countdown timeTillDate="12 14 2021, 10:59 pm" timeFormat="MM DD YYYY, h:mm a" />
                    </div>
						{/* <a target="_newtab" className="anchor" href="https://forms.gle/e1ZYrj917uzk99fw8"> <button className="timer-button">SUBMIT</button></a> */}
					
                </div>
				</div>
			</section>
		</div>
	)
}

export default Timer;