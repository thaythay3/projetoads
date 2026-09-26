import "./App.css";

const fotos = [
  {
    arquivo: "foto1.png",
    titulo: "Artesanato feito à mão",
    categoria: "Artesanato",
  },
  {
    arquivo: "foto 2.png",
    titulo: "Trabalhos artesanais",
    categoria: "Artesanato",
  },
  {
    arquivo: "foto 3.png",
    titulo: "Criatividade e tradição",
    categoria: "Artesanato",
  },
  {
    arquivo: "foto 4.png",
    titulo: "Peças artesanais",
    categoria: "Artesanato",
  },
  {
    arquivo: "foto 5.png",
    titulo: "Detalhes feitos à mão",
    categoria: "Artesanato",
  },
  {
    arquivo: "foto 6.png",
    titulo: "Trabalho artesanal",
    categoria: "Artesanato",
  },
  {
    arquivo: "foto 8.png",
    titulo: "Arte e criatividade",
    categoria: "Artesanato",
  },
  {
    arquivo: "foto 9.png",
    titulo: "Produção artesanal",
    categoria: "Artesanato",
  },
  {
    arquivo: "foto 10.png",
    titulo: "Peças que contam histórias",
    categoria: "Artesanato",
  },
  {
    arquivo: "foto 11.png",
    titulo: "Artesanato regional",
    categoria: "Artesanato",
  },
  {
    arquivo: "foto 12.png",
    titulo: "Trabalhos dos associados",
    categoria: "Artesanato",
  },
  {
    arquivo: "foto 13.png",
    titulo: "Criatividade em cada detalhe",
    categoria: "Artesanato",
  },
  {
    arquivo: "foto 14.png",
    titulo: "Produção artesanal",
    categoria: "Artesanato",
  },
  {
    arquivo: "foto 16.png",
    titulo: "Encontro e cultura",
    categoria: "Projetos",
  },
  {
    arquivo: "foto 17.png",
    titulo: "Artesãos e comunidade",
    categoria: "Projetos",
  },
];

function App() {
  return (
    <div className="site">

      {/* HEADER */}
      <header className="header">
        <div className="container header-inner">

          <a href="#inicio" className="brand">
            <img
              src="/logocasadoartesao.png"
              alt="Associação Casa do Artesão de Ponta Grossa"
            />
          </a>

          <nav className="navigation" aria-label="Navegação principal">
            <a href="#associacao">A Associação</a>
            <a href="#artesanato">Artesanato</a>
            <a href="#projetos">Projetos</a>
            <a href="#visite">Visite-nos</a>
            <a href="#contato" className="nav-button">
              Fale conosco
            </a>
          </nav>

        </div>
      </header>

      <main>

        {/* HERO */}
        <section className="hero" id="inicio">
          <div className="container hero-content">

            <div className="hero-text">

              <span className="eyebrow">
                Associação Casa do Artesão
              </span>

              <h1>
                Artesanato que
                <span> conta histórias.</span>
              </h1>

              <p>
                Uma associação que reúne artesãos, criatividade e cultura,
                valorizando o trabalho artesanal e a identidade de
                Ponta Grossa e dos Campos Gerais.
              </p>

              <div className="hero-actions">
                <a href="#associacao" className="button button-primary">
                  Conheça a Associação
                </a>

                <a href="#visite" className="button button-outline">
                  Como chegar
                </a>
              </div>

            </div>

            <div className="hero-logo">
              <img
                src="/logocasadoartesao.png"
                alt="Logo da Casa do Artesão"
              />
            </div>

          </div>
        </section>

        {/* INTRO */}
        <section className="intro">
          <div className="container intro-grid">

            <div>
              <span className="section-label">
                Nossa essência
              </span>

              <h2>
                Um espaço de encontro entre
                <span> pessoas, arte e cultura.</span>
              </h2>
            </div>

            <div className="intro-text">
              <p>
                A Casa do Artesão reúne artesãos e artesãs que encontram
                no trabalho manual uma forma de expressão, valorização
                cultural e geração de renda.
              </p>

              <p>
                Mais do que um espaço de comercialização, a associação
                aproxima a comunidade do artesanato e ajuda a preservar
                conhecimentos e técnicas que passam de geração em geração.
              </p>
            </div>

          </div>
        </section>

        {/* ASSOCIAÇÃO */}
        <section className="section section-light" id="associacao">
          <div className="container">

            <div className="section-heading">
              <div>
                <span className="section-label">
                  A Associação
                </span>

                <h2>
                  Feita por artesãos,
                  <span> para valorizar o artesanato.</span>
                </h2>
              </div>

              <p>
                A Associação Casa do Artesão é formada por pessoas que
                transformam criatividade, conhecimento e dedicação
                em trabalhos artesanais.
              </p>
            </div>

            <div className="association-cards">

              <article className="info-card">
                <div className="card-number">01</div>
                <h3>Cerca de 20 artesãos associados</h3>
                <p>
                  Pessoas com diferentes histórias, habilidades e formas
                  de expressão através do artesanato.
                </p>
              </article>

              <article className="info-card">
                <div className="card-number">02</div>
                <h3>Diversidade de técnicas</h3>
                <p>
                  Trabalhos artesanais produzidos com diferentes materiais,
                  estilos e técnicas manuais.
                </p>
              </article>

              <article className="info-card">
                <div className="card-number">03</div>
                <h3>Cultura e comunidade</h3>
                <p>
                  Um espaço que aproxima artesãos, moradores, visitantes
                  e iniciativas culturais.
                </p>
              </article>

            </div>

          </div>
        </section>

        {/* ARTESANATO */}
        <section className="section section-cream" id="artesanato">
          <div className="container">

            <div className="section-heading centered">
              <span className="section-label">
                Artesanato
              </span>

              <h2>
                Trabalhos feitos à mão,
                <span> com identidade.</span>
              </h2>

              <p>
                Conheça um pouco da diversidade de trabalhos produzidos
                pelos artesãos associados.
              </p>
            </div>

            <div className="gallery-preview">

              {fotos.slice(0, 9).map((foto, index) => (
                <figure
                  className={`gallery-item gallery-item-${index + 1}`}
                  key={foto.arquivo}
                >
                  <img
                    src={`/fotos/${foto.arquivo}`}
                    alt={foto.titulo}
                  />

                  <figcaption>
                    <strong>{foto.titulo}</strong>
                    <span>{foto.categoria}</span>
                  </figcaption>
                </figure>
              ))}

            </div>

            <div className="center-button">
              <a href="#galeria" className="button button-secondary">
                Ver toda a galeria
              </a>
            </div>

          </div>
        </section>

        {/* PROJETOS */}
        <section className="section section-dark" id="projetos">
          <div className="container projects-grid">

            <div className="projects-text">

              <span className="section-label section-label-light">
                Projetos e comunidade
              </span>

              <h2>
                O artesanato também
                <span> aproxima pessoas.</span>
              </h2>

              <p>
                A Casa do Artesão também participa de ações, atividades
                culturais, encontros e iniciativas que aproximam o
                artesanato da comunidade.
              </p>

              <p>
                Esses momentos ajudam a divulgar o trabalho artesanal,
                estimular a criatividade e fortalecer os vínculos
                entre cultura e comunidade.
              </p>

            </div>

            <div className="project-photo">
              <img
                src="/fotos/foto 16.png"
                alt="Atividade cultural com artesãos e comunidade"
              />
            </div>

          </div>
        </section>

        {/* FOTO DO GRUPO */}
        <section className="group-section">
          <div className="container">

            <div className="group-image-wrapper">
              <img
                src="/fotos/foto 17.png"
                alt="Artesãos e participantes de uma atividade cultural"
              />
            </div>

            <div className="group-caption">
              <span className="section-label">
                Pessoas que fazem parte dessa história
              </span>

              <h2>
                Cultura se constrói
                <span> em comunidade.</span>
              </h2>
            </div>

          </div>
        </section>

        {/* GALERIA */}
        <section className="section section-light" id="galeria">
          <div className="container">

            <div className="section-heading centered">
              <span className="section-label">
                Galeria
              </span>

              <h2>
                Um pouco do trabalho
                <span> da Casa do Artesão.</span>
              </h2>

              <p>
                Uma seleção de registros que mostram o artesanato,
                as atividades e os momentos vividos pela associação.
              </p>
            </div>

            <div className="gallery-full">

              {fotos.map((foto) => (
                <figure
                  className="gallery-full-item"
                  key={`full-${foto.arquivo}`}
                >
                  <img
                    src={`/fotos/${foto.arquivo}`}
                    alt={foto.titulo}
                    loading="lazy"
                  />

                  <figcaption>
                    <strong>{foto.titulo}</strong>
                  </figcaption>
                </figure>
              ))}

              <figure className="gallery-full-item">
                <img
                  src="/fotos/foto concha.png"
                  alt="Concha Acústica de Ponta Grossa"
                  loading="lazy"
                />

                <figcaption>
                  <strong>Concha Acústica</strong>
                </figcaption>
              </figure>

            </div>

          </div>
        </section>

        {/* VISITE */}
        <section className="visit-section" id="visite">
          <div className="container visit-grid">

            <div className="visit-text">

              <span className="section-label">
                Visite-nos
              </span>

              <h2>
                Venha conhecer
                <span> a Casa do Artesão.</span>
              </h2>

              <p>
                Estamos em uma localização central de Ponta Grossa,
                na Concha Acústica da Praça Barão do Rio Branco.
              </p>

              <div className="visit-details">

                <div className="detail">
                  <div className="detail-icon">📍</div>
                  <div>
                    <strong>Onde estamos</strong>
                    <p>
                      Concha Acústica<br />
                      Praça Barão do Rio Branco<br />
                      Ponta Grossa – PR
                    </p>
                  </div>
                </div>

                <div className="detail">
                  <div className="detail-icon">🕐</div>
                  <div>
                    <strong>Horário de atendimento</strong>
                    <p>
                      Segunda a sexta: 9h às 17h<br />
                      Sábado: 9h às 13h
                    </p>
                  </div>
                </div>

              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Concha+Ac%C3%BAstica+Pra%C3%A7a+Bar%C3%A3o+do+Rio+Branco+Ponta+Grossa+PR"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary"
              >
                Abrir localização no mapa
              </a>

            </div>

            <div className="visit-image">
              <img
                src="/fotos/foto concha.png"
                alt="Concha Acústica na Praça Barão do Rio Branco"
              />
            </div>

          </div>
        </section>

        {/* CONTATO */}
        <section className="contact-section" id="contato">
          <div className="container">

            <div className="contact-box">

              <div className="contact-text">
                <span className="section-label">
                  Fale conosco
                </span>

                <h2>
                  Quer saber mais?
                </h2>

                <p>
                  Entre em contato com a Associação Casa do Artesão
                  pelos nossos canais.
                </p>
              </div>

              <div className="contact-links">

                <a
                  href="https://wa.me/554232291923"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <span className="contact-icon">💬</span>

                  <span>
                    <strong>WhatsApp</strong>
                    <small>(42) 3229-1923</small>
                  </span>
                </a>

                <a
                  href="https://www.instagram.com/casa.do.artesaopg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <span className="contact-icon">◎</span>

                  <span>
                    <strong>Instagram</strong>
                    <small>@casa.do.artesaopg</small>
                  </span>
                </a>

                <a
                  href="https://www.facebook.com/people/Casa-do-Artes%C3%A3o-de-Ponta-Grossa/100057121195052/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <span className="contact-icon">f</span>

                  <span>
                    <strong>Facebook</strong>
                    <small>Casa do Artesão de Ponta Grossa</small>
                  </span>
                </a>

              </div>

            </div>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">

          <div className="footer-brand">
            <img
              src="/logocasadoartesao.png"
              alt="Associação Casa do Artesão"
            />

            <p>
              Artesanato, cultura e comunidade.
            </p>
          </div>

          <div className="footer-info">
            <strong>Associação Casa do Artesão</strong>
            <span>
              Praça Barão do Rio Branco – Concha Acústica
            </span>
            <span>
              Ponta Grossa – Paraná
            </span>
          </div>

          <div className="footer-copy">
            <span>
              © {new Date().getFullYear()} Associação Casa do Artesão
            </span>

            <span>
              Projeto de extensão acadêmica
            </span>
          </div>

        </div>
      </footer>

      {/* WHATSAPP FLUTUANTE */}
      <a
        href="https://wa.me/554232291923"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Falar com a Casa do Artesão pelo WhatsApp"
      >
        <span>💬</span>
        <strong>WhatsApp</strong>
      </a>

    </div>
  );
}

export default App;