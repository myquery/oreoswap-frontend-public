import "../css/local/partials/components/_optimized-section.css"


const OptimizedSection = ({isClicked, toggleMode}) => {
    return(

        <section className="optimized-container">
          
            <h2 className={isClicked ? "optimized-header-dark": "optimized-header" }><span>Optimized Supercharged Functionalities</span></h2>
            <div className="card-container">
            <div className={isClicked ? "bkg_overlay" : ""}></div>
                <div className={isClicked ? "card-optimized-dark" : "card-optimized" }>
                <span className="card-icon"><i class="bi bi-currency-bitcoin "></i></span>
                    Trade BEP20 Tokens
                </div>
                <div className={isClicked ? "card-optimized-dark" : "card-optimized" }>
                <span className={isClicked ? "card-icon" : "card-icon-dark"}><i class="bi bi-currency-bitcoin "></i></span>
                    Trade LP Tokens
                </div>
                <div className={isClicked ? "card-optimized-dark" : "card-optimized" }>
                <span className="card-icon"><i class="bi bi-currency-bitcoin "></i></span>
                    Peer-2-Peer Trading
                </div>
                <div className={isClicked ? "card-optimized-dark" : "card-optimized" }>
                <span className="card-icon"><i class="bi bi-currency-bitcoin "></i></span>
                    Swap BEP20 Tokens
                </div>
                <div className={isClicked ? "card-optimized-dark" : "card-optimized" }>
                <span className="card-icon"><i class="bi bi-currency-bitcoin "></i></span>
                    Lonely Twitter
                </div>
            </div>

        </section>
    );
    
}


export default OptimizedSection;