import "../css/local/partials/components/_community.css"

const Community = ({ isClicked}) => {
	return(
		<section className={isClicked ? "community-darkmode" : "community-lightmode"}>
			<div className={isClicked ? "community_wrapper community_bg-dark" : "community_wrapper community_bg-light"}>
				<h1 className={isClicked ? "community_wrapper--heading center-text darkmode_color" : "community_wrapper--heading center-text lightmode_color"}>Join the Community</h1>
				<p className={isClicked ? "community_wrapper--text center-text darkmode_color" : "community_wrapper--text center-text lightmode_color"}>Learn more about Oreoswap, interact with the team, others in the community, and have your say in building the future of the OreoSwap</p>
				<div className="community_container">
					<div className="community_icons">
						<div className={isClicked ? "community_icons-item community_icons-item-darkmode" : "community_icons-item community_icons-item-lightmode"}>
							<div className="community_icons-img">
								<img src={isClicked ? "/img/community_icons/facebook-dark.png" : "/img/community_icons/facebook.png"}/>
							</div>
							<p>Drop a message in our <a href="https://">facebook community</a>.</p>
						</div>
						<div className={isClicked ? "community_icons-item community_icons-item-darkmode" : "community_icons-item community_icons-item-lightmode"}>
							<div className="community_icons-img">
								<img src={isClicked ? "/img/community_icons/twitter-dark.png" : "/img/community_icons/twitter.png"}/>
							</div>
							<p>Follow <a href="https://">@Oreoswap</a> for news and updates.</p>
						</div>
						<div className={isClicked ? "community_icons-item community_icons-item-darkmode" : "community_icons-item community_icons-item-lightmode"}>
							<div className="community_icons-img">
								<img src={isClicked ? "/img/community_icons/youtube-dark.png" : "/img/community_icons/youtube.png"}/>
							</div>
							<p>Stay update with our <a href="https://">Youtube channel</a></p>
						</div>
						<div className={isClicked ? "community_icons-item community_icons-item-darkmode" : "community_icons-item community_icons-item-lightmode"}>
							<div className="community_icons-img">
								<img src={isClicked ? "/img/community_icons/instagram-dark.png" : "/img/community_icons/instagram.png"}/>
							</div>
							<p>Follow <a href="https://">@Oreoswap</a> on Instagram.</p>
						</div>
						
					</div>

					<div className="community_icons">
						<div className={isClicked ? "community_icons-item community_icons-item-darkmode" : "community_icons-item community_icons-item-lightmode"}>
							<div className="community_icons-img">
								<img src={isClicked ? "/img/community_icons/reddit-dark.png" : "/img/community_icons/reddit.png"}/>
							</div>
							<p>Send us  a message in our <a href="https://">Reddit community</a>.</p>
						</div>
						<div className={isClicked ? "community_icons-item community_icons-item-darkmode" : "community_icons-item community_icons-item-lightmode"}>
							<div className="community_icons-img">
								<img src={isClicked ? "/img/community_icons/telegram-dark.png" : "/img/community_icons/telegram2.png"}/>
							</div>
							<p>Send us a message in our <a href="https://">Telegram group</a>.</p>
						</div>
					</div>
					
				</div>
					
			</div>	
		</section>
	)
}

export default Community