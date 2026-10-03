import "./App.css";
import { useEffect, useMemo, useRef, useState, type SyntheticEvent } from "react";

const fotosArtesanato = [
  "foto1.png",
  "foto 2.png",
  "foto 3.png",
  "foto 5.png",
  "foto 6.png",
  "foto 8.png",
  "foto 9.png",
  "foto 10.png",
  "foto 11.png",
  "foto 12.png",
  "foto 13.png",
];


type GalleryRow = {
  items: string[];
  height: number;
};

function JustifiedGallery({ files }: { files: string[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [ratios, setRatios] = useState<Record<string, number>>({});

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const updateWidth = () => setContainerWidth(element.clientWidth);
    updateWidth();

    const observer = new ResizeObserver(updateWidth);
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleImageLoad = (file: string, event: SyntheticEvent<HTMLImageElement>) => {
    const image = event.currentTarget;
    if (!image.naturalWidth || !image.naturalHeight) return;

    const ratio = image.naturalWidth / image.naturalHeight;
    setRatios((current) => {
      if (current[file] === ratio) return current;
      return { ...current, [file]: ratio };
    });
  };

  const rows = useMemo<GalleryRow[]>(() => {
    if (!containerWidth) return [];

    const gap = 15;
    const targetHeight =
      containerWidth <= 560 ? 155 : containerWidth <= 850 ? 220 : 300;

    const result: GalleryRow[] = [];
    let currentItems: string[] = [];
    let ratioSum = 0;

    files.forEach((file, index) => {
      const ratio = ratios[file] ?? 1.25;
      currentItems.push(file);
      ratioSum += ratio;

      const estimatedWidth =
        ratioSum * targetHeight + gap * (currentItems.length - 1);
      const shouldCloseRow =
        estimatedWidth >= containerWidth || index === files.length - 1;

      if (shouldCloseRow) {
        const rowHeight = Math.max(
          130,
          (containerWidth - gap * (currentItems.length - 1)) / ratioSum,
        );

        result.push({
          items: currentItems,
          height: rowHeight,
        });

        currentItems = [];
        ratioSum = 0;
      }
    });

    return result;
  }, [containerWidth, files, ratios]);

  return (
    <div ref={containerRef} className="gallery-preview">
      {rows.map((row, rowIndex) => (
        <div
          className="gallery-row"
          key={`gallery-row-${rowIndex}`}
          style={{ height: `${row.height}px` }}
        >
          {row.items.map((arquivo, index) => (
            <figure
              className="gallery-item"
              key={arquivo}
              style={{
                width: `${Math.max(
                  1,
                  (ratios[arquivo] ?? 1.25) * row.height,
                )}px`,
              }}
            >
              <img
                src={`/fotos/${arquivo}`}
                alt={`Trabalho artesanal da Casa do Artesão ${index + 1}`}
                loading="lazy"
                onLoad={(event) => handleImageLoad(arquivo, event)}
              />
              <span className="gallery-hover" aria-hidden="true" />
            </figure>
          ))}
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="site">
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
        <section className="hero" id="inicio">
          <div className="container hero-content">
            <div className="hero-text">
              <span className="eyebrow">Associação Casa do Artesão</span>

              <h1>
                Artesanato que<span> conta histórias.</span>
              </h1>

              <p>
                Uma associação que reúne artesãos e artesãs, valorizando o trabalho artesanal,
                a cultura e a identidade de Ponta Grossa e dos Campos Gerais.
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

        <section className="intro">
          <div className="container intro-grid">
            <div>
              <span className="section-label">Nossa essência</span>

              <h2>
                Um espaço de encontro entre<span> pessoas, arte e cultura.</span>
              </h2>
            </div>

            <div className="intro-text">
              <p>
                A Casa do Artesão reúne artesãos e artesãs que encontram no
                trabalho manual uma forma de expressão, valorização cultural e
                geração de renda.
              </p>

              <p>
                Além da comercialização das peças, a associação aproxima a comunidade do
                artesanato e valoriza a diversidade de trabalhos e técnicas
                produzidos pelos associados.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-light" id="associacao">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="section-label">A Associação</span>

                <h2>
                  Feita por artesãos,<span> para valorizar o artesanato.</span>
                </h2>
              </div>

              <p>
                A Associação Casa do Artesão reúne cerca de 20 artesãos associados e tem
                como principal atividade a produção e comercialização de peças
                artesanais para geração de renda.
              </p>
            </div>

            <div className="association-cards">
              <article className="info-card">
                <div className="card-number">01</div>

                <h3>Cerca de 20 artesãos associados</h3>

                <p>
                  Pessoas que encontram no artesanato uma forma de trabalho, expressão e
                  geração de renda.
                </p>
              </article>

              <article className="info-card">
                <div className="card-number">02</div>

                <h3>Mais de 40 tipos de produtos e técnicas</h3>

                <p>
                  Trabalhos produzidos com diferentes materiais e técnicas, como
                  tecido, madeira, pintura, amigurumi, EVA, patchwork, colagem e
                  pontilhismo.
                </p>
              </article>

              <article className="info-card">
                <div className="card-number">03</div>

                <h3>Cultura e comunidade</h3>

                <p>
                  Um espaço que aproxima o artesanato da comunidade e também recebe
                  produtos desenvolvidos em projetos e iniciativas culturais.
                </p>
              </article>
            </div>

            <div className="association-media">
              <figure className="association-media-item">
                <img
                  src="/fotos/foto 4.png"
                  alt="Pessoas reunidas em uma atividade da Casa do Artesão"
                  loading="lazy"
                />
              </figure>

              <figure className="association-media-item">
                <img
                  src="/fotos/foto 14.png"
                  alt="Pessoas trabalhando em uma atividade na Concha Acústica"
                  loading="lazy"
                />
              </figure>
            </div>
          </div>
        </section>

        <section className="section section-cream" id="artesanato">
          <div className="container">
            <div className="section-heading centered">
              <span className="section-label">Artesanato</span>

              <h2>
                Trabalhos feitos à mão,<span> com identidade.</span>
              </h2>

              <p>
                Conheça um pouco da diversidade de trabalhos artesanais presentes na Casa
                do Artesão.
              </p>
            </div>

            <JustifiedGallery files={fotosArtesanato} />
          </div>
        </section>

        <section className="section section-dark" id="projetos">
          <div className="container projects-grid">
            <div className="projects-text">
              <span className="section-label section-label-light">
                Projetos e comunidade
              </span>

              <h2>
                O artesanato também<span> aproxima pessoas.</span>
              </h2>

              <p>
                A Casa do Artesão também recebe produtos desenvolvidos em projetos e
                iniciativas culturais que aproximam o artesanato da comunidade.
              </p>

              <p>
                Entre as iniciativas mencionadas estão o Projeto Raiz, Cultura e Produto,
                o Projeto Sou PG, o Souvenir Criativo e o Projeto Coleção Campos
                Gerais.
              </p>
            </div>

            <div className="project-photo">
              <img
                src="/fotos/foto 16.png"
                alt="Atividade cultural com artesãos e comunidade"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="visit-section" id="visite">
          <div className="container visit-grid">
            <div className="visit-text">
              <span className="section-label">Visite-nos</span>

              <h2>
                Venha conhecer<span> a Casa do Artesão.</span>
              </h2>

              <p>
                Estamos no coração de Ponta Grossa, na Concha Acústica da Praça Barão do
                Rio Branco, em uma localização central e próxima ao Colégio
                Estadual Regente Feijó.
              </p>

              <div className="visit-details">
                <div className="detail">
                  <div className="detail-icon">📍</div>

                  <div>
                    <strong>Onde estamos</strong>

                    <p>
                      Concha Acústica
                      <br />
                      Praça Barão do Rio Branco
                      <br />
                      Próximo ao Colégio Estadual Regente Feijó
                      <br />
                      Ponta Grossa – PR
                    </p>
                  </div>
                </div>

                <div className="detail">
                  <div className="detail-icon">🕐</div>

                  <div>
                    <strong>Horário de atendimento</strong>

                    <p>
                      Segunda a sexta: 9h às 17h
                      <br />
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

            <figure className="visit-image">
              <img
                src="/fotos/concha.png"
                alt="Concha Acústica na Praça Barão do Rio Branco, em Ponta Grossa"
                loading="lazy"
              />
            </figure>
          </div>
        </section>

        <section className="contact-section" id="contato">
          <div className="container">
            <div className="contact-box">
              <div className="contact-text">
                <span className="section-label">Fale conosco</span>

                <h2>Quer saber mais?</h2>

                <p>
                  Para informações, pedidos e encomendas, entre em contato com a
                  Associação Casa do Artesão pelos nossos canais.
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

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <img
              src="/logocasadoartesao.png"
              alt="Associação Casa do Artesão"
            />

            <p>Artesanato, cultura e comunidade.</p>
          </div>

          <div className="footer-info">
            <strong>Associação Casa do Artesão</strong>
            <span>Praça Barão do Rio Branco – Concha Acústica</span>
            <span>Ponta Grossa – Paraná</span>
          </div>

          <div className="footer-copy">
            <span>© {new Date().getFullYear()} Associação Casa do Artesão</span>
            <span>Projeto de extensão acadêmica</span>
          </div>
        </div>
      </footer>

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
