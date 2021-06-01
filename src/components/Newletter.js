import "../css/local/partials/components/_newsletter.css"

const Newsletter = ({ isClicked, newsletterLightBg, newsletterDarkBg }) => {
	return(
		<section className="newsletter wrapper ">
			<div className={isClicked ? "newsletter-container  d-flex justify-content-center cards-darkmode" : "cards-lightmode newsletter-container  d-flex justify-content-center"}>
				<img src={ isClicked ? newsletterDarkBg : newsletterLightBg } className="newsletter-bg m-auto" alt="" width="100%"/>
				<div className="form-container">
					<h1 className="text-center">Join the Community</h1>
					<form action="">
						<input type="email" placeholder="Enter your email address" className={isClicked ? "input-darkmode" : "input-lightmode"}/>
						<button type="submit" className="button-active newsletter-btn">Let me in!</button>
					</form>
					<div className="socials d-flex w-100 justify-content-center">
						<i className={isClicked ? "bi bi-facebook socials-icon-dark" :  "bi bi-facebook socials-icon-light"}></i>
						<i className={isClicked ? "bi bi-twitter socials-icon-dark" :  "bi bi-twitter socials-icon-light"}></i>
					    <i className={isClicked ? "bi bi-youtube socials-icon-dark" :  "bi bi-youtube socials-icon-light"}></i>
					    <i className={isClicked ? "bi bi-telegram socials-icon-dark" :  "bi bi-telegram socials-icon-light"}></i>
					</div>
				</div>
			</div>	
		</section>
	)
}

export default Newsletter