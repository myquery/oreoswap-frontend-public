import "../css/local/partials/components/_optimized-section.css"


const OptimizedSection = ({ isClicked, optimizedLightBg, optimizedDarkBg }) => {
    return(
        <section className="optimized-section">
            <div className="optimized-wrapper">
                <img src={ isClicked ? optimizedDarkBg : optimizedLightBg } className="optimized-section-bg" alt=""/>
                <div className="wrapper">
                    <h1>
                        Optimized Supercharged Functionalities
                        <div className={isClicked ? "opt-dark" : "opt-light"}></div>
                    </h1>
                    <div className="optimized-card-container text-center">
                        <div className="card-wrapper ">
                            <figure className={isClicked ? "cards cards-darkmode" : " cards-lightmode cards" }>
                                <img src="img/bep20-token.svg" alt="Wallet icon" className=""/>
                                <figcaption> Trade BEP20 tokens </figcaption>
                            </figure>
                        </div>
                        <div className="card-wrapper ">
                            <figure className={isClicked ? "cards cards-darkmode" : " cards-lightmode cards" }>
                                <img src="img/stake-lp-token.svg" alt="Wallet icon" className=""/>
                                <figcaption> Stake LP Tokens </figcaption>
                            </figure>
                        </div>
                        <div className="card-wrapper ">
                            <figure className={isClicked ? "cards cards-darkmode" : " cards-lightmode cards" }>
                                <img src="img/p2p.svg" alt="Wallet icon" className=""/>
                                <figcaption> Peer-to-Peer Trading </figcaption>
                            </figure>
                        </div>
                        <div className="card-wrapper opt-custom-card1">
                            <figure className={isClicked ? "cards cards-darkmode" : " cards-lightmode cards" }>
                                <img src="img/swap-token.svg" alt="Wallet icon" className=""/>
                                <figcaption> Swap BEP20 tokens </figcaption>
                            </figure>
                        </div>
                         <div className="card-wrapper optimized-card opt-custom-card">
                            <figure className={isClicked ? "cards cards-darkmode" : " cards-lightmode cards" }>
                                <img src="img/lonely-twitter.svg" alt="Wallet icon" className=""/>
                                <figcaption> Lonely Twitter</figcaption>
                            </figure>
                        </div>
                    
                    </div>
                </div>
            </div>
            
        </section>
    );
    
}


export default OptimizedSection;