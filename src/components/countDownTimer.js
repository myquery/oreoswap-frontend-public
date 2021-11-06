import "../css/local/partials/components/_countdown-timer.css"
import Desktop from "../Assets/timer.svg"
import Mobile from "../Assets/timer-mobile.svg"
import Countdown from "./Timer"
const Timer = () => {
	return(
		<div>
			<section  className="">
				<div className="countdown-svg-container">		
					<img src={Desktop} alt="countdown-SVG-background" className="countdown-bg-desktop" />
					<img src={Mobile} alt="bg" className="countdown-bg-mobile"/>
				<div className="timer text-center d-flex align-items-center">
                    <h1 className="timer-header-text">OUR PRIVATE SALES START IN</h1>
                    <div className="timer-countdown">
                    <Countdown timeTillDate="11 30 2021, 9:00 am" timeFormat="MM DD YYYY, h:mm a" />
                    </div>
                    <button className="timer-button">JOIN OUR WAITLIST</button>
                </div>
				</div>
			</section>
		</div>
	)
}

export default Timer;