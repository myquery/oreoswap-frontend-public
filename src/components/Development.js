import { useEffect } from 'react';
import { NavLink, withRouter, useHistory, useLocation  } from 'react-router-dom';
import { useTimer } from 'react-timer-hook'
// import { HashLink as Link } from 'react-router-hash-link';

import "../css/local/partials/components/development/development.css"

const Development = ({ isClicked, expiryTimestamp} ) => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 0);

    const {
        seconds,
        restart
    } = useTimer({ time, onExpire: () => console.warn('onExpire called') });
    
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        if (location.pathname === '/development') {
            time.setSeconds(time.getSeconds() + 5)
            restart(time)
        } 
        setTimeout(() => {
            history.push("/")
        }, 5000);
    }, [history])

    return (  
        <>
        <div className="bg-vectors">
            <img src="img/bg-vectors/vector1.svg" alt="bg" />
            <img src="img/bg-vectors/vector2.svg" alt="bg" />
            <img src="img/bg-vectors/vector1mb.svg" alt="bg" />
            <img src="img/bg-vectors/vector2mb.svg" alt="bg" />
        </div>
        <section className="wrapper dev-wrap text-center">
            <figure>
                <img src={isClicked ? "img/development/development1.png" : "img/development/development.png"} alt="in development" />
                <img src={isClicked ? "img/development/engine1.png" : "img/development/engine.png"} alt="in development" />
                
                <figcaption>

                    {"development in progress".toUpperCase()}
                </figcaption>
                <pre>
                    {`redirecting to homepage in  ${seconds}`.toLowerCase()}
                </pre>
                <div className="buttons">
					<button className="btn"><NavLink exact to="/">Back To Homepage</NavLink></button>
                </div>

            </figure>
        </section>
        </>
    );
}
 
export default withRouter(Development);