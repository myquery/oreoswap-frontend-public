import "../css/local/partials/components/_statistic-section.css"
const StatisticSection = () => {
    return (
        <section className="statictis-container">
            <div className="stat-header"><h2>An ever-growing protocol ecosystem</h2></div>
            <div className="stat-para"><p>Designed to improve user experience and contribute to the DEX platform usage with support for significant features like swapping, lottery system, P2P and liquidity pool </p></div>
            <div className="stat-count">
                <div className="stat-1"><span>$248 </span><p>All time volume</p></div>
                <div className="stat-2"> <span>52K </span><p>Liquidity Providers</p></div>
                <div className="stat-3"><span>40M </span><p>All Time Traders</p></div>
                <div className="stat-4"><span>180 </span><p>Defi integrations</p></div>
            </div>
        </section>
    )
}

export default StatisticSection;