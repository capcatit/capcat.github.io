import React from "react";
import Head from "next/head";
import Service from "../components/Service";

const mailUrl = `mailto:info@capcat.it?subject=${encodeURIComponent(
  "Richiesta informazioni"
)}`;

const Index = () => (
  <>
    <Head>
      <title>CapCat - Servizi Informatici</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="container">
      <header className="mt-5 mb-5 text-center">
        <h1 className="display-1">CapCat</h1>
        <h2 className="text-muted fw-normal mb-3">Servizi Informatici</h2>
        <p>
          <i className="bi bi-geo-alt-fill" /> Vicenza
        </p>
        <p>
          <i className="bi bi-envelope-fill" />{" "}
          <a href={mailUrl}>info@capcat.it</a>
        </p>
      </header>

      <main>
        <h2 className="mb-3">Servizi offerti</h2>

        <div className="row row-cols-1 row-cols-md-3 g-3">
          <Service
            title="Business Automation"
            description="Automazione dei processi produttivi."
            image="/images/business_automation.png"
          />
          <Service
            title="System Integration"
            description="Integrazione di sistemi in cloud e sistemi on-premises."
            image="/images/system_integration.png"
          />
          <Service
            title="Applicazioni"
            description="Sviluppo di applicazioni mobile, web e desktop."
            image="/images/app_development.png"
          />
        </div>

        <h2 className="mt-5 mb-3">Contatti</h2>
        <p>
          Scrivici una mail a <a href={mailUrl}>info@capcat.it</a>, ti
          risponderemo nell&apos;arco di 24 ore.
        </p>
      </main>

      <hr className="mt-5" />

      <footer>
        <p className="text-center">
          <small>
            Copyright © CapCat {new Date().getFullYear()} - Tutti i diritti
            riservati
          </small>
        </p>
      </footer>
    </div>
  </>
);

export default Index;
