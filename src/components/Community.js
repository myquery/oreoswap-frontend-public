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
							<a href="https://fb.me/Oreoswap" target="_newtab"><img src={isClicked ? "/img/community_icons/facebook-dark.png" : "/img/community_icons/facebook.png"}/></a>
							</div>
							<p>Drop a message in our <a href="https://fb.me/Oreoswap" target="_newtab">facebook community</a>.</p>
						</div>
						<div className={isClicked ? "community_icons-item community_icons-item-darkmode" : "community_icons-item community_icons-item-lightmode"}>
							<div className="community_icons-img">
							<a href="https://twitter.com/HelloOreoswap?s=09" target="_newtab"><img src={isClicked ? "/img/community_icons/twitter-dark.png" : "/img/community_icons/twitter.png"}/></a>
							</div>
							<p>Follow <a href="https://twitter.com/HelloOreoswap?s=09" target="_newtab">@Oreoswap</a> for news and updates.</p>
						</div>
						<div className={isClicked ? "community_icons-item community_icons-item-darkmode" : "community_icons-item community_icons-item-lightmode"}>
							<div className="community_icons-img">
							<a href="https://www.youtube.com/channel/UCydTsQygKaGUez63bSMDGMg
								" target="_newtab"><img src={isClicked ? "/img/community_icons/youtube-dark.png" : "/img/community_icons/youtube.png"}/></a>
							</div>
							<p>Stay update with our <a href="https://www.youtube.com/channel/UCydTsQygKaGUez63bSMDGMg
								" target="_newtab">Youtube channel</a></p>
						</div>
						<div className={isClicked ? "community_icons-item community_icons-item-darkmode" : "community_icons-item community_icons-item-lightmode"}>
							<div className="community_icons-img">
							<a href="https://Instagram.com/OreoSwap_Official" target="_newtab"><img src={isClicked ? "/img/community_icons/instagram-dark.png" : "/img/community_icons/instagram.png"}/></a> 
							</div>
							<p>Follow <a href="https://Instagram.com/OreoSwap_Official" target="_newtab">@Oreoswap</a> on Instagram.</p>
						</div>
						
					</div>

					<div className="community_icons">
						<div className={isClicked ? "community_icons-item community_icons-item-darkmode" : "community_icons-item community_icons-item-lightmode"}>
							<div className="community_icons-img">
							<a href="https://www.reddit.com/user/OreoSwap-Official/" target="_newtab"><img src={isClicked ? "/img/community_icons/reddit-dark.png" : "/img/community_icons/reddit.png"}/></a>
							</div>
							<p>Send us  a message in our <a href="https://www.reddit.com/user/OreoSwap-Official/" target="_newtab">Reddit community</a>.</p>
						</div>
						<div className={isClicked ? "community_icons-item community_icons-item-darkmode" : "community_icons-item community_icons-item-lightmode"}>
						 <div className="community_icons-img">
							<a href="https://t.me/OreoSwapOfficial" target="_newtab">	<img src={isClicked ? "/img/community_icons/telegram-dark.png" : "/img/community_icons/telegram2.png"}/></a>
							</div>
							<p>Send us a message in our <a href="https://t.me/OreoSwapOfficial" target="_newtab">Telegram group</a>.</p>
						</div>
					</div>
					
				</div>
					
			</div>	
		</section>
	)
}

export default Community