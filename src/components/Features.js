import "../css/local/partials/components/_features.css";
// import Curly from "../vectors/curly-dark.svg"
const Features = ({ isClicked}) => {
    // hamburger button color
    // const hamLight = {
    //     background: '#FFFFFF'
    // }
    // const hamDark = {
    //     background: '#131313'
    // }
    return (
        <section className={isClicked ? " features-darkmode" : "features-lightmode"}>
            <div className="features__svg">
            <div className="features__wrapper">
                <div className={isClicked ? "features__header-darkmode" : "features__header-lightmode"}>Our Exciting Features</div>
                <div className={isClicked ? "features__header__text-darkmode" : "features__header__text-lightmode"}>This Exchange is a food-themed decentralized platform. The food-based Oreo token runs</div>
                <div className={isClicked ? "features__header__text-darkmode" : "features__header__text-lightmode"}>on the Binance smart chain contract. OREO is the platform in-built token with Pastrychef</div>
                <div className={isClicked ? "features__header__text-darkmode" : "features__header__text-lightmode"}>as the chief baker. It is specially designed and developed to improve user experience with</div>
                <div className={isClicked ? "features__header__text-darkmode" : "features__header__text-lightmode"}>exciting features for fast and inexpensive trades using BEP tokens. The cryptocurrency</div>
                <div className={isClicked ? "features__header__text-darkmode" : "features__header__text-lightmode"}>exchange platform offers significant functionalities like staking, farming, swapping and</div>
                <div className={isClicked ? "features__header__text-darkmode" : "features__header__text-lightmode"}>Liquidity pools. Other features like the Lottery system, NFT market place and P2P will be</div>
                <div className={isClicked ? "features__header__lasttext-darkmode" : "features__header__lasttext-lightmode"}>added at a later date.</div>
               <div className="features__display__container">
                <div className="features__display">
   
                    <div className={isClicked ? "features__display--liquidity-darkmode" : "features__display--liquidity-lightmode"}>
                        <div className={isClicked ? "features__display--liquidity--wrapper-darkmode" : "features__display--liquidity--wrapper-lightmode"}>
                            <img src="img/Liquidity.png" alt="Liquidity" className="liquidity-img"/>
                        </div>
                        <div className="features__display--liquidity--text">Liquidity Portals</div>
                    </div>
                    <div className={isClicked ? "features__display--transaction-darkmode" : "features__display--transaction-lightmode"}>
                    <div className={isClicked ? "features__display--transaction--wrapper-darkmode" : "features__display--transaction--wrapper-lightmode"}>
                            <img src="img/transaction.png" alt="Low Transaction Fees" className="transaction-img"/>
                        </div>
                        <div className="features__display--transaction--text">Low Transaction Fees</div>
                    </div>
                    <div className={isClicked ? "features__display--payment-darkmode" : "features__display--payment-lightmode"}>
                    <div className={isClicked ? "features__display--payment--wrapper-darkmode" : "features__display--payment--wrapper-lightmode"}>
                            <img src="img/secure payment.png" alt="Payment Gateway" className="gateway-img"/>
                        </div>
                        <div className="features__display--payment--text">Safe Payment Gateway</div>
                    </div>
                    </div>
                    <div className="features__display">
                    <div className={isClicked ? "features__display--staking-darkmode" : "features__display--staking-lightmode"}>
                    <div className={isClicked ? "features__display--staking--wrapper-darkmode" : "features__display--staking--wrapper-lightmode"}>
                            <img src="img/Stake.png" alt="Staking" className="Stake-img"/>
                        </div>
                        <div className="features__display--staking--text">Staking</div>
                    </div>
                    <div className={isClicked ? "features__display--portfolio-darkmode" : "features__display--portfolio-lightmode"}>
                    <div className={isClicked ? "features__display--portfolio--wrapper-darkmode" : "features__display--portfolio--wrapper-lightmode"}>
                            <img src="img/portfolio.png" alt="Portfolio" className="portfolio-img"/>
                        </div>
                        <div className="features__display--portfolio--text">Improve Portfolio</div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>

    )
}


export default Features;