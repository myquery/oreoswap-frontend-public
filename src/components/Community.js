import "../css/local/partials/components/_community.css"

const Community = ({ isClicked}) => {
	return(
		<section className={isClicked ? "community-darkmode" : "community-lightmode"} id="community">
			<div className={isClicked ? "community_wrapper " : "community_wrapper "}>
				<h1 className={isClicked ? "community_wrapper--heading center-text darkmode_color" : "community_wrapper--heading center-text lightmode_color"}>Join the Community</h1>
				<p className={isClicked ? "community_wrapper--text center-text darkmode_color" : "community_wrapper--text center-text lightmode_color"}>Learn more about Oreoswap, interact with the team, others in the community, and have your say in building the future of the OreoSwap</p>
				<div className="community_container">
					<div className="community_icons">
						<div className={isClicked ? "community_icons-item community_icons-item-darkmode" : "community_icons-item community_icons-item-lightmode"}>
							<div className="community_icons-img">
							<a href="https://fb.me/Oreoswap" target="_newtab"><img src={isClicked ? "/img/community_icons/facebook-dark.png" : "/img/community_icons/facebook.png"} alt="facebook"/></a>
							</div>
							<p>Drop a message in our <a href="https://fb.me/Oreoswap" target="_newtab">facebook community</a>.</p>
						</div>
						<div className={isClicked ? "community_icons-item community_icons-item-darkmode" : "community_icons-item community_icons-item-lightmode"}>
							<div className="community_icons-img">
								<a href="https://twitter.com/HelloOreoswap?s=09" target="_newtab"><img src={isClicked ? "/img/community_icons/twitter-dark.png" : "/img/community_icons/twitter.png"} alt="twitter"/></a>
							</div>
							<p>Follow <a href="https://twitter.com/HelloOreoswap?s=09" target="_newtab">@Oreoswap</a> for news and updates.</p>
						</div>
						<div className={isClicked ? "community_icons-item community_icons-item-darkmode" : "community_icons-item community_icons-item-lightmode"}>
							<div className="community_icons-img">
							<a href="https://www.youtube.com/channel/UCydTsQygKaGUez63bSMDGMg
								" target="_newtab"><img src={isClicked ? "/img/community_icons/youtube-dark.png" : "/img/community_icons/youtube.png"} alt="youtube"/></a>
							</div>
							<p>Stay updated with our <a href="https://www.youtube.com/channel/UCydTsQygKaGUez63bSMDGMg
								" target="_newtab">Youtube channel</a></p>
						</div>
						<div className={isClicked ? "community_icons-item community_icons-item-darkmode" : "community_icons-item community_icons-item-lightmode"}>
							<div className="community_icons-img">
								<a href="https://Instagram.com/OreoSwap_Official" target="_newtab"><img src={isClicked ? "/img/community_icons/instagram-dark.png" : "/img/community_icons/instagram.png"} alt="instagram"/></a>
							</div>
							<p>Follow <a href="https://Instagram.com/OreoSwap_Official" target="_newtab">@Oreoswap</a> on Instagram.</p>
						</div>
						
					</div>

					<div className="community_icons">
						<div className={isClicked ? "community_icons-item community_icons-item-darkmode" : "community_icons-item community_icons-item-lightmode"}>
							<div className="community_icons-img">
								<a href="https://www.reddit.com/user/OreoSwap-Official/" target="_newtab"><img src={isClicked ? "/img/community_icons/reddit-dark.png" : "/img/community_icons/reddit.png"} alt="reddit"/></a>
							</div>
							<p>Send us  a message in our <a href="https://www.reddit.com/user/OreoSwap-Official/" target="_newtab">Reddit community</a>.</p>
						</div>
						<div className={isClicked ? "community_icons-item community_icons-item-darkmode" : "community_icons-item community_icons-item-lightmode"}>
						 <div className="community_icons-img">
								<a href="https://t.me/OreoSwapOfficial" target="_newtab">	<img src={isClicked ? "/img/community_icons/telegram-dark.png" : "/img/community_icons/telegram2.png"} alt="telegram"/></a>
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