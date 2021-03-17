import useTranslation from 'next-translate/useTranslation'
import  React, { useState } from 'react'
export default function Home() {
	const { t } = useTranslation('common')
	const [email, setEmail] = useState('')
	const [name, setName] = useState('')
	const [message, setMessage] = useState('')
	function sendWspMessage($event) {
		$event.preventDefault()
		window.open(
			`https://api.whatsapp.com/send?phone=+393515398439&text=Sono ${name} ${message}. Il mio email ${email}`,
			'_blank'
		)
	}
	function sendMailMessage($event) {
		$event.preventDefault()
		try {
			const a = window.location.href=`mailto:contatto@capcat.it?subject=${name}&body=${message}`
			console.log({a})
			window.open(`mailto:contatto@capcat.it?subject=${name}&body=${message}`, '_self')
		} catch (error) {
			console.log(error)
		}
		
	}
	function onClickServiceTab(e) {
		console.log(e)
		activeTab = activeTab === 'active' ? '' : 'active'
	}
	function onClickAboutTab(e) {
		console.log(e)
		activeTab = activeTab === 'active' ? '' : 'active'
	}
	function onChangeMessage($event) {
		const val = $event.target.value
		if(val && val.length)
			setMessage(val)
	}
	function onChangeName($event) {
		const val = $event.target.value
		if(val && val.length)
			setName(val)
	}
	function onChangeEmail($event) {
		const val = $event.target.value
		if(val && val.length)
			setEmail(val)
	}
	function isFormValid() {
		return Boolean(email &&
					email.length > 3 &&
					name &&
					name.length > 3 &&
					message &&
					message.length > 3)
	}
	
  return (
    <div id="wrapper" className="fade-in">
					<div id="intro">
						<h1>CAP<br />
						CAT</h1>
						<p>{t('intro-title')}.</p>
						<ul className="actions">
							<li>
                <a href="#services" className="button icon solid solo fa-arrow-down scrolly">
                  {t('button-continue')}
                </a>
              </li>
						</ul>
					</div>
					<header id="header">
						<img src="images/logo.png" className="logo" />
					</header>
					<nav id="nav">
						<ul className="links">
							<li onClick={onClickServiceTab} className='active' id="service__tab">
								<a href="#services">{t('links-services')}</a>
							</li>
							<li onClick={onClickAboutTab} id="about-us__tab">
								<a href="#about-us">{t('links-about-us')}</a>
							</li>
						</ul>
						<ul className="icons">
							<li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
							<li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
							<li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
							<li><a href="https://github.com/capcatit/capcat.github.io" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
						</ul>
					</nav>
					<div id="main">
							<article id="about-us" className="post featured">
								<header className="major">
									<p>{t('about-us-resume')}<br/>
									<br />
									Cloud, Mobile, Web.</p>
								</header>
								<a href="#" className="image main"><img src="images/our-team.jpg" alt="" /></a>
								<ul className="actions special">
									<li><a href="#footer" className="button large">{t('button-contact-us')}</a></li>
								</ul>
							</article>

							<section className="posts" id="services">
								<article>
									<header className="service__header">

										<h2><a href="#">{t('services-cloud')} <br />
                    {t('services-cloud-2')}</a></h2>
									</header>
									<a href="#" className="image fit"><img src="images/amazon-web-service-google-cloud.jpg" alt="" /></a>
									<p>Amazon Web Service, Google Cloud, Azure IBM Cloud.</p>
									<ul className="actions special">
										<li><a href="#footer" className="button">{t('button-contact-us')}</a></li>
									</ul>
								</article>
								<article>
									<header className="service__header">
										<h2><a href="#">{t('services-problem-solving')} <br />
                    {t('services-problem-solving-2')}</a></h2>
									</header>
									<a href="#" className="image fit"><img src="images/problem-solving.jpg" alt="" /></a>
									<p>{t('services-problem-solving-3')}.</p>
									<ul className="actions special">
										<li><a href="#footer" className="button">{t('button-contact-us')}</a></li>
									</ul>
								</article>
								<article>
									<header className="service__header">
										<h2><a href="#">{t('services-development')}<br />
                    {t('services-development-2')}</a></h2>
									</header>
									<a href="#" className="image fit"><img src="images/free-lance-software-applicazione.jpg" alt="" /></a>
									<p>{t('services-development-3')}.</p>
									<ul className="actions special">
										<li><a href="#footer" className="button">{t('button-contact-us')}</a></li>
									</ul>
								</article>
								<article>
									<header className="service__header">
										<h2><a href="#">Salesforce<br /></a></h2>
									</header>
									<a href="#" className="image fit"><img src="images/saleforce.jpg" alt="" /></a>
									<p>{t('services-salesforce')}.</p>
									<ul className="actions special">
										<li><a href="#footer" className="button">{t('button-contact-us')}</a></li>
									</ul>
								</article>
								<article>
									<header className="service__header">
										<h2><a href="#">Mobile apps<br />
										</a></h2>
									</header>
									<a href="#" className="image fit"><img src="images/mobile-500.png" alt="" /></a>
									<p>{t('services-quotation')}.</p>
									<ul className="actions special">
										<li><a href="#footer" className="button">{t('button-contact-us')}</a></li>
									</ul>
								</article>
								<article>
									<header className="service__header">
										<h2><a href="#">Graphic Design<br /></a></h2>
									</header>
									<a href="#" className="image fit"><img src="images/graphic-design.jpg" alt="" /></a>
									<p>{t('services-graphic-design')}.</p>
									<ul className="actions special">
										<li><a href="#footer" className="button">{t('button-contact-us')}</a></li>
									</ul>
								</article>
							</section>
					</div>

					<footer id="footer">
						<section>
							<form method="post" action="#">
								<div className="fields">
									<div className="field">
										<label htmlFor="name">{t('form-name')}</label>
										<input id="form__name" onChange={onChangeName} type="text" name="name" id="name" />
									</div>
									<div className="field">
										<label htmlFor="email">Email </label>
										<input id="form__email" onChange={onChangeEmail} type="email" name="email" id="email" />
									</div>
									<div className="field">
										<label htmlFor="message">{t('form-message')}</label>
										<textarea id="form__message" onChange={onChangeMessage} name="message" id="message" rows="3"></textarea>
									</div>
								</div>
								<ul className="actions">
									<li>
										<input type="submit" 
											onClick={sendMailMessage}
											disabled={!isFormValid()}
											value={t('form-submit')} />
									</li>
									<li>
										<input id="form__submit-wsp"
											disabled={!isFormValid()} 
											type="submit" 
											onClick={sendWspMessage}
											value={`${t('form-submit')} Whatsapp`} />
									</li>
								</ul>
							</form>
						</section>
						<section className="split contact">
							<section className="alt">
								<h3>{t('form-address')}</h3>
								<p>Via padre bernardino dal vago 10<br />
								</p>
							</section>
							<section>
								<h3>Email</h3>
								<p><a href="#">contatto@capcat.it</a></p>
							</section>
							<section>
								<h3>Social</h3>
								<ul className="icons alt">
									<li><a href="https://github.com/capcatit/capcat.github.io" className="icon brands alt fa-github"><span className="label">GitHub</span></a></li>
								</ul>
							</section>
						</section>
					</footer>
					<div id="copyright">
						<ul><li>&copy; Untitled</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li></ul>
					</div>

			</div>
  )
}
