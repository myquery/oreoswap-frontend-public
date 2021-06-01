import "../css/local/partials/components/_statistic-section.css"
const StatisticSection = () => {
    return (
        <section className="stats text-center">
            <div className="wrapper stats-container">
                <h2>An ever-growing protocol ecosystem</h2>
                <p className="stats-para">
                    Designed to improve user experience and contribute to the DEX 
                    platform usage with support for significant features like swapping, 
                    lottery system, P2P and liquidity pool 
                </p>
                <div className="stats-count">
                    <div className="stat"><span>$248 <br/> </span><span className="line-break1 stats-text">All time </span> <span className="line-break2 stats-text">volume</span></div>
                    <div className="stat"> <span>52K <br/> </span><span className="line-break1 stats-text">Liquidity</span> <span className="line-break2 stats-text"> Providers</span></div>
                    <div className="stat"><span>48M <br/> </span><span className="line-break1 stats-text">All Time </span> <span className="line-break2 stats-text">Traders</span></div>
                    <div className="stat"><span>180 <br/> </span><span className="line-break1 stats-text">Defi </span> <span className="line-break2 stats-text">integrations</span></div>
                </div>
            </div>
           
        </section>
    )
}

export default StatisticSection;