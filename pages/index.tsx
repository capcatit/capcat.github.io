import React from "react";

export default () => (
  <div id="wrapper" className="fade-in">
    <div id="intro">
      <h1>
        CAP
        <br />
        CAT
      </h1>
      <p>TECNOLOGIA ALLA TUA PORTATA.</p>
      <ul className="actions">
        <li>
          <a
            href="#services"
            className="button icon solid solo fa-arrow-down scrolly"
          >
            Continue
          </a>
        </li>
      </ul>
    </div>

    <header id="header">
      <img alt="CapCat Logo" className="logo" src="images/logo.png" />
    </header>

    <nav id="nav">
      <ul className="links">
        <li className="active" id="service__tab">
          <a href="#services">Servizi</a>
        </li>
        <li id="about-us__tab">
          <a href="#about-us">Chi siamo</a>
        </li>
      </ul>
      <ul className="icons">
        <li>
          <a href="/" className="icon brands fa-twitter">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="/" className="icon brands fa-facebook-f">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="/" className="icon brands fa-instagram">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href="/" className="icon brands fa-github">
            <span className="label">GitHub</span>
          </a>
        </li>
      </ul>
    </nav>

    <div id="main">
      <article id="about-us" className="post featured">
        <header className="major">
          <p>
            Siamo un gruppo di professionisti e nerds della regione Veneto con
            ampia esperienza
            <br />
            <br />
            mobile, cloud, web.
          </p>
        </header>
        <a href="/" className="image main">
          <img src="images/pic01.jpg" alt="" />
        </a>
        <ul className="actions special">
          <li>
            <a href="/" className="button large">
              Contattaci
            </a>
          </li>
        </ul>
      </article>

      <section className="posts" id="services">
        <article>
          <header className="service__header">
            <h2>
              <a href="/">
                porta la tua azienda <br />
                sul cloud
              </a>
            </h2>
          </header>
          <a href="/" className="image fit">
            <img src="images/pic02.jpg" alt="" />
          </a>
          <p>Amazon Web Service, Google Cloud, Azure IBM Cloud.</p>
          <ul className="actions special">
            <li>
              <a href="#footer" className="button">
                Contattaci
              </a>
            </li>
          </ul>
        </article>
        <article>
          <header className="service__header">
            <h2>
              <a href="/">
                raccontaci i tuoi <br />
                problemi
              </a>
            </h2>
          </header>
          <a href="/" className="image fit">
            <img src="images/pic03.jpg" alt="" />
          </a>
          <p>E noi troviamo la tua soluzione digitale.</p>
          <ul className="actions special">
            <li>
              <a href="#footer" className="button">
                Contattaci
              </a>
            </li>
          </ul>
        </article>
        <article>
          <header className="service__header">
            <h2>
              <a href="/">
                Sviluppo su <br />
                misura
              </a>
            </h2>
          </header>
          <a href="/" className="image fit">
            <img src="images/development.png" alt="" />
          </a>
          <p>
            Esperti in Java, Javascript e diversi framework come Angular e
            React.
          </p>
          <ul className="actions special">
            <li>
              <a href="#footer" className="button">
                Contattaci
              </a>
            </li>
          </ul>
        </article>
        <article>
          <header className="service__header">
            <h2>
              <a href="/">
                Salesforce
                <br />
              </a>
            </h2>
          </header>
          <a href="/" className="image fit">
            <img src="images/saleforce.jpg" alt="" />
          </a>
          <p>
            Scopri come Salesforce può migliorare il tuo processo di vendita.
          </p>
          <ul className="actions special">
            <li>
              <a href="#footer" className="button">
                Contattaci
              </a>
            </li>
          </ul>
        </article>
        <article>
          <header className="service__header">
            <h2>
              <a href="/">
                Mobile apps
                <br />
              </a>
            </h2>
          </header>
          <a href="/" className="image fit">
            <img src="images/mobile-500.png" alt="" />
          </a>
          <p>Inviaci i tuoi requisiti e ottieni un preventivo.</p>
          <ul className="actions special">
            <li>
              <a href="#footer" className="button">
                Contattaci
              </a>
            </li>
          </ul>
        </article>
        <article>
          <header className="service__header">
            {/* <!-- <span className="date">April 7, 2017</span> --> */}
            <h2>
              <a href="/">
                Graphic Design
                <br />
              </a>
            </h2>
          </header>
          <a href="/" className="image fit">
            <img src="images/pic07.jpg" alt="" />
          </a>
          <p>Lasciati consigliare dai nostri esperti.</p>
          <ul className="actions special">
            <li>
              <a href="#footer" className="button">
                Contattaci
              </a>
            </li>
          </ul>
        </article>
      </section>
    </div>

    <footer id="footer">
      <section>
        <form method="post" action="#">
          <div className="fields">
            <div className="field">
              <label htmlFor="name">Nome</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Messagio</label>
              <textarea name="message" id="message" rows={3} />
            </div>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" />
            </li>
            <li>
              <input
                id="form__submit-wsp"
                type="submit"
                value="Send Message Whatsapp"
              />
            </li>
          </ul>
        </form>
      </section>
      <section className="split contact">
        <section className="alt">
          <h3>Indirizzo</h3>
          <p>
            Via padre bernardino dal vago 10
            <br />
          </p>
        </section>
        <section>
          <h3>Email</h3>
          <p>
            <a href="/">contatto@capcat.it</a>
          </p>
        </section>
        <section>
          <h3>Social</h3>
          <ul className="icons alt">
            <li>
              <a href="/" className="icon brands alt fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="/" className="icon brands alt fa-facebook-f">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="/" className="icon brands alt fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="/" className="icon brands alt fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
        </section>
      </section>
    </footer>

    <div id="copyright">
      <ul>
        <li>&copy; Untitled</li>
        <li>
          Design: <a href="https://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </div>
  </div>
);
