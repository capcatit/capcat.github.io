import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div id="wrapper" class="fade-in">
				{/* <!-- Intro --> */}
					<div id="intro">
						<h1>CAP<br />
						CAT</h1>
						<p>TECNOLOGIA ALLA TUA PORTATA.</p>
						<ul class="actions">
							<li><a href="#services" class="button icon solid solo fa-arrow-down scrolly">Continue</a></li>
						</ul>
					</div>

				{/* <!-- Header --> */}
					<header id="header">
						<img src="images/logo.png" class="logo" />
						{/* <!-- <a href="index.html" >Massively</a> --> */}
					</header>

				{/* <!-- Nav --> */}
					<nav id="nav">
						<ul class="links">
							<li class="active" id="service__tab"><a href="#services">Servizi</a></li>
							<li id="about-us__tab"><a href="#about-us">Chi siamo</a></li>
						</ul>
						<ul class="icons">
							<li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
							<li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
							<li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
							<li><a href="#" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
						</ul>
					</nav>

				{/* <!-- Main --> */}
					<div id="main">

						{/* <!-- Featured Post --> */}
							<article id="about-us" class="post featured">
								<header class="major">
									{/* <!-- <span class="date">April 25, 2017</span> --> */}
									{/* <!-- <h2><a href="#">And this is a<br /> */}
									{/* massive headline</a></h2> --> */}
									<p>Siamo un gruppo di professionisti e nerds della regione Veneto con ampia esperienza<br/>
									<br />
									mobile, cloud, web.</p>
								</header>
								<a href="#" class="image main"><img src="images/pic01.jpg" alt="" /></a>
								<ul class="actions special">
									<li><a href="#" class="button large">Contattaci</a></li>
								</ul>
							</article>

						{/* <!-- Posts --> */}
							<section class="posts" id="services">
								<article>
									<header class="service__header">
										{/* <!-- <span class="date">April 24, 2017</span> */}
										 {/* --> */}

										<h2><a href="#">porta la tua azienda <br />
											sul cloud</a></h2>
									</header>
									<a href="#" class="image fit"><img src="images/pic02.jpg" alt="" /></a>
									<p>Amazon Web Service, Google Cloud, Azure IBM Cloud.</p>
									<ul class="actions special">
										<li><a href="#footer" class="button">Contattaci</a></li>
									</ul>
								</article>
								<article>
									<header class="service__header">
										{/* <!-- <span class="date">April 22, 2017</span> --> */}
										<h2><a href="#">raccontaci i tuoi <br />
											problemi</a></h2>
									</header>
									<a href="#" class="image fit"><img src="images/pic03.jpg" alt="" /></a>
									<p>E noi troviamo la tua soluzione digitale.</p>
									<ul class="actions special">
										<li><a href="#footer" class="button">Contattaci</a></li>
									</ul>
								</article>
								<article>
									<header class="service__header">
										{/* <!-- <span class="date">April 18, 2017</span> --> */}
										<h2><a href="#">Sviluppo su <br />
											misura</a></h2>
									</header>
									<a href="#" class="image fit"><img src="images/development.png" alt="" /></a>
									<p>Esperti in Java, Javascript e diversi framework come Angular e React.</p>
									<ul class="actions special">
										<li><a href="#footer" class="button">Contattaci</a></li>
									</ul>
								</article>
								<article>
									<header class="service__header">
										{/* <!-- <span class="date">April 14, 2017</span> --> */}
										<h2><a href="#">Salesforce<br /></a></h2>
									</header>
									<a href="#" class="image fit"><img src="images/saleforce.jpg" alt="" /></a>
									<p>Scopri come Salesforce può migliorare il tuo processo di vendita.</p>
									<ul class="actions special">
										<li><a href="#footer" class="button">Contattaci</a></li>
									</ul>
								</article>
								<article>
									<header class="service__header">
										{/* <!-- <span class="date">April 11, 2017</span> --> */}
										<h2><a href="#">Mobile apps<br />
										</a></h2>
									</header>
									<a href="#" class="image fit"><img src="images/mobile-500.png" alt="" /></a>
									<p>Inviaci i tuoi requisiti e ottieni un preventivo.</p>
									<ul class="actions special">
										<li><a href="#footer" class="button">Contattaci</a></li>
									</ul>
								</article>
								<article>
									<header class="service__header">
										{/* <!-- <span class="date">April 7, 2017</span> --> */}
										<h2><a href="#">Graphic Design<br /></a></h2>
									</header>
									<a href="#" class="image fit"><img src="images/pic07.jpg" alt="" /></a>
									<p>Lasciati consigliare dai nostri esperti.</p>
									<ul class="actions special">
										<li><a href="#footer" class="button">Contattaci</a></li>
									</ul>
								</article>
							</section>
					</div>

				{/* <!-- Footer --> */}
					<footer id="footer">
						<section>
							<form method="post" action="#">
								<div class="fields">
									<div class="field">
										<label for="name">Nome</label>
										<input id="form__name" type="text" name="name" id="name" />
									</div>
									<div class="field">
										<label for="email">Email</label>
										<input id="form__email" type="text" name="email" id="email" />
									</div>
									<div class="field">
										<label for="message">Messagio</label>
										<textarea id="form__message" name="message" id="message" rows="3"></textarea>
									</div>
								</div>
								<ul class="actions">
									<li><input type="submit" value="Send Message" /></li>
									<li><input id="form__submit-wsp" type="submit" value="Send Message Whatsapp" /></li>
								</ul>
							</form>
						</section>
						<section class="split contact">
							<section class="alt">
								<h3>Indirizzo</h3>
								<p>Via padre bernardino dal vago 10<br />
								</p>
							</section>
							<section>
								<h3>Email</h3>
								<p><a href="#">contatto@capcat.it</a></p>
							</section>
							<section>
								<h3>Social</h3>
								<ul class="icons alt">
									<li><a href="#" class="icon brands alt fa-twitter"><span class="label">Twitter</span></a></li>
									<li><a href="#" class="icon brands alt fa-facebook-f"><span class="label">Facebook</span></a></li>
									<li><a href="#" class="icon brands alt fa-instagram"><span class="label">Instagram</span></a></li>
									<li><a href="#" class="icon brands alt fa-github"><span class="label">GitHub</span></a></li>
								</ul>
							</section>
						</section>
					</footer>

				{/* <!-- Copyright --> */}
					<div id="copyright">
						<ul><li>&copy; Untitled</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li></ul>
					</div>

			</div>
    // <div className={styles.container}>
    //   <Head>
    //     <title>Create Next App</title>
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main className={styles.main}>
    //     <h1 className={styles.title}>
    //       Welcome to <a href="https://nextjs.org">Next.js!</a>
    //     </h1>

    //     <p className={styles.description}>
    //       Get started by editing{' '}
    //       <code className={styles.code}>pages/index.js</code>
    //     </p>

    //     <div className={styles.grid}>
    //       <a href="https://nextjs.org/docs" className={styles.card}>
    //         <h3>Documentation &rarr;</h3>
    //         <p>Find in-depth information about Next.js features and API.</p>
    //       </a>

    //       <a href="https://nextjs.org/learn" className={styles.card}>
    //         <h3>Learn &rarr;</h3>
    //         <p>Learn about Next.js in an interactive course with quizzes!</p>
    //       </a>

    //       <a
    //         href="https://github.com/vercel/next.js/tree/master/examples"
    //         className={styles.card}
    //       >
    //         <h3>Examples &rarr;</h3>
    //         <p>Discover and deploy boilerplate example Next.js projects.</p>
    //       </a>

    //       <a
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         className={styles.card}
    //       >
    //         <h3>Deploy &rarr;</h3>
    //         <p>
    //           Instantly deploy your Next.js site to a public URL with Vercel.
    //         </p>
    //       </a>
    //     </div>
    //   </main>

    //   <footer className={styles.footer}>
    //     <a
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{' '}
    //       <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
    //     </a>
    //   </footer>
    // </div>
  )
}
