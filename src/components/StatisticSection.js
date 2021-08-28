import "../css/local/partials/components/_statistic-section.css"
const StatisticSection = () => {
    return (
        <section className="stats text-center">
            
			<div className="stat">
					<div className="counter">
						<p className="count">$248</p>
						<small className="countName">All time volume</small>
					</div>
					{/* counter 2 */}
					<div className="counter">
						<p className="count">52k</p>
						<small className="countName">Liquidity providers</small>
					</div>
					{/* counter 3 */}
					<div className="counter">
						<p className="count">48M</p>
						<small className="countName">All time trades</small>
					</div>
					{/* counter 4 */}
					<div className="counter">
						<p className="count">180</p>
						<small className="countName">Defi integrations</small>
					</div>
				</div>



        </section>
    )
}

export default StatisticSection;