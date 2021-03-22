import React, { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";

const Index = () => {
  const intl = useIntl();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [activeTab, setActiveTab] = useState("services");

  const sendWhatsappMessage = (event) => {
    event.preventDefault();
    window.open(
      `https://api.whatsapp.com/send?phone=+393515398439&text=Sono ${name} ${message}. Il mio email ${email}`,
      "_blank"
    );
  };

  const sendMail = (event) => {
    event.preventDefault();
    window.open(
      `mailto:info@capcat.it?subject=${name}&body=${message}`,
      "_blank"
    );
  };

  const formValid =
    email &&
    email.length > 3 &&
    name &&
    name.length > 3 &&
    message &&
    message.length > 3;

  return (
    <body>
      <div id="wrapper" className="fade-in">
        <div id="intro">
          <h1>
            CAP
            <br />
            CAT
          </h1>
          <p>
            <FormattedMessage id="intro-title" />
          </p>
          <ul className="actions">
            <li>
              <a
                href="#services"
                className="button icon solid solo fa-arrow-down scrolly"
              >
                <FormattedMessage id="button-continue" />
              </a>
            </li>
          </ul>
        </div>
        <header id="header">
          <img alt="CapCat Logo" className="logo" src="images/logo.png" />
        </header>
        <nav id="nav">
          <ul className="links">
            <li
              className={activeTab === "service" ? "active" : ""}
              id="service__tab"
            >
              <a href="#services" onClick={() => setActiveTab("services")}>
                <FormattedMessage id="links-services" />
              </a>
            </li>
            <li
              className={activeTab === "about-us" ? "active" : ""}
              id="about-us__tab"
            >
              <a href="#about-us" onClick={() => setActiveTab("about-us")}>
                <FormattedMessage id="links-about-us" />
              </a>
            </li>
          </ul>
          <ul className="icons">
            <li>
              <a
                href="https://github.com/capcatit/capcat.github.io"
                className="icon brands fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
        </nav>
        <div id="main">
          <article id="about-us" className="post featured">
            <header className="major">
              <p>
                <FormattedMessage id="about-us-resume" />
                <br />
                <br />
                Cloud, Mobile, Web.
              </p>
            </header>
            <a href="/" className="image main">
              <img src="images/our-team.jpg" alt="Cloud, Mobile, Web" />
            </a>
            <ul className="actions special">
              <li>
                <a href="#footer" className="button large">
                  <FormattedMessage id="button-contact-us" />
                </a>
              </li>
            </ul>
          </article>

          <section className="posts" id="services">
            <article>
              <header className="service__header">
                <h2>
                  <a href="/">
                    <FormattedMessage id="services-cloud" />
                    <br />
                    <FormattedMessage id="services-cloud-2" />
                  </a>
                </h2>
              </header>
              <a href="/" className="image fit">
                <img
                  src="images/amazon-web-service-google-cloud.jpg"
                  alt="Amazon Web Service, Google Cloud, Azure IBM Cloud"
                />
              </a>
              <p>Amazon Web Service, Google Cloud, Azure IBM Cloud.</p>
              <ul className="actions special">
                <li>
                  <a href="#footer" className="button">
                    <FormattedMessage id="button-contact-us" />
                  </a>
                </li>
              </ul>
            </article>
            <article>
              <header className="service__header">
                <h2>
                  <a href="/">
                    <FormattedMessage id="services-problem-solving" />
                    <br />
                    <FormattedMessage id="services-problem-solving-2" />
                  </a>
                </h2>
              </header>
              <a href="/" className="image fit">
                <img
                  src="images/problem-solving.jpg"
                  alt="soluzioni digitali"
                />
              </a>
              <p>
                <FormattedMessage id="services-problem-solving-3" />.
              </p>
              <ul className="actions special">
                <li>
                  <a href="#footer" className="button">
                    <FormattedMessage id="button-contact-us" />
                  </a>
                </li>
              </ul>
            </article>
            <article>
              <header className="service__header">
                <h2>
                  <a href="/">
                    <FormattedMessage id="services-development" />
                    <br />
                    <FormattedMessage id="services-development-2" />
                  </a>
                </h2>
              </header>
              <a href="/" className="image fit">
                <img
                  src="images/free-lance-software-applicazione.jpg"
                  alt="free lance software"
                />
              </a>
              <p>
                <FormattedMessage id="services-development-3" />.
              </p>
              <ul className="actions special">
                <li>
                  <a href="#footer" className="button">
                    <FormattedMessage id="button-contact-us" />
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
                <img
                  src="images/saleforce.jpg"
                  alt="saleforce implementazione"
                />
              </a>
              <p>
                <FormattedMessage id="services-salesforce" />.
              </p>
              <ul className="actions special">
                <li>
                  <a href="#footer" className="button">
                    <FormattedMessage id="button-contact-us" />
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
                <img
                  src="images/sviluppo-mobile-android-ios-500.png"
                  alt="Sviluppo mobile android e ios"
                />
              </a>
              <p>
                <FormattedMessage id="services-quotation" />.
              </p>
              <ul className="actions special">
                <li>
                  <a href="#footer" className="button">
                    <FormattedMessage id="button-contact-us" />
                  </a>
                </li>
              </ul>
            </article>
            <article>
              <header className="service__header">
                <h2>
                  <a href="/">
                    Graphic Design
                    <br />
                  </a>
                </h2>
              </header>
              <a href="/" className="image fit">
                <img src="images/graphic-design.jpg" alt="disegno grafico" />
              </a>
              <p>
                <FormattedMessage id="services-graphic-design" />.
              </p>
              <ul className="actions special">
                <li>
                  <a href="#footer" className="button">
                    <FormattedMessage id="button-contact-us" />
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
                  <label htmlFor="name">
                    <FormattedMessage id="form-name" />
                  </label>
                  <input
                    id="form__name"
                    onChange={({ target }) => setName(target.value)}
                    type="text"
                    name="name"
                  />
                </div>
                <div className="field">
                  <label htmlFor="email">Email </label>
                  <input
                    id="form__email"
                    onChange={({ target }) => setEmail(target.value)}
                    type="email"
                    name="email"
                  />
                </div>
                <div className="field">
                  <label htmlFor="message">
                    <FormattedMessage id="form-message" />
                  </label>
                  <textarea
                    id="form__message"
                    onChange={({ target }) => setMessage(target.value)}
                    name="message"
                    rows={3}
                  />
                </div>
              </div>
              <ul className="actions">
                <li>
                  <input
                    type="submit"
                    onClick={sendMail}
                    disabled={!formValid}
                    value={intl.formatMessage({ id: "form-submit" })}
                  />
                </li>
                <li>
                  <input
                    id="form__submit-wsp"
                    disabled={!formValid}
                    type="submit"
                    onClick={sendWhatsappMessage}
                    value={`${intl.formatMessage({
                      id: "form-submit",
                    })} Whatsapp`}
                  />
                </li>
              </ul>
            </form>
          </section>
          <section className="split contact">
            <section className="alt">
              <h3>{intl.formatMessage({ id: "form-address" })}</h3>
              <p>
                Via padre bernardino dal vago 10
                <br />
              </p>
            </section>
            <section>
              <h3>Email</h3>
              <p>
                <a href="#">contatto@capcat.it</a>
              </p>
            </section>
            <section>
              <h3>Social</h3>
              <ul className="icons alt">
                <li>
                  <a
                    href="https://github.com/capcatit/capcat.github.io"
                    className="icon brands alt fa-github"
                  >
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
    </body>
  );
};

export default Index;
