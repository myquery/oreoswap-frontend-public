import Banner from "./Banner";
import Body from "./Body";
import Community from "./Community";
import Timer from "./countDownTimer";
import Features from "./Features";
import Presales from "./presales";
// import StatisticSection from "./StatisticSection";


const Home = ({ isClicked }) => {
    return ( 
        <>
            <div className="bg-vectors">
                <img src="img/bg-vectors/vector1.svg" alt="bg" />
                <img src="img/bg-vectors/vector2.svg" alt="bg" />
                <img src="img/bg-vectors/vector1mb.svg" alt="bg" />
                <img src="img/bg-vectors/vector2mb.svg" alt="bg" />
                {/* <img src="img/bg-vectors/vector3.svg" alt="bg" /> */}
                <img src="img/bg-vectors/vector4.svg" alt="bg" />
                <img src="img/bg-vectors/vector5.svg" alt="bg" />
            </div>
            <main>
                <Banner
                    isClicked={isClicked}
                />
                {/* <StatisticSection 
                isClicked={isClicked}
                 /> */}
                <Body
                    isClicked={isClicked}
                />
                <Features
                    isClicked={isClicked}
                />
                <Presales
                    isClicked={isClicked}
                />
                 <Timer
                    isClicked={isClicked}
                />
                
                <Community
                    isClicked={isClicked}
                />
            </main>
        </>
        
     );
}
 
export default Home;