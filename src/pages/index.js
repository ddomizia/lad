//import
import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
//components
import Team from "../components/Team"
import Layout from "../templates/Layout";
import BlogPreview from "../components/BlogPreview";
import Map from "../components/map";
//others
import { Row, Col, Container } from "react-bootstrap";

//markup
const Index = ({data}) => {
  
  return (
    <Layout>
      <Wrapper>
        <Container>
          <Row className="index">
            <Col className="col-intro" sm={8}>
              {/*  Introduzione */}
              <section>
                <Container>
                  <h2 className="border-bottom">Presentazione</h2>
                  <p>
                    LAD Laboratorio di Archeologia Digitale alla Sapienza
                    promuove la ricerca, la sperimentazione e la didattica delle
                    tecnologie digitali per l'archeologia e più in generale per
                    gli studi umanistici. Il LAD contribuisce allo sviluppo e
                    promozione della cultura FLOS (
                    <em>free, libre e open source</em>) e alla pubblicazione ad
                    accesso aperto di dati e risultati della ricerca.
                  </p>
                </Container>
              </section>

              {/* A proposito di noi */}
              <section>
                <Team />
              </section>

              <section>
                <Container>
                  <h2 className="border-bottom">Dove abbiamo lavorato</h2>
                  <Map />
                </Container>
              </section>

              {/* Che cosa facciamo */}
              <section>
                <Container>
                  <h2 className="border-bottom">Cosa facciamo</h2>
                  <p>
                    Il LAD sperimenta l'applicazione delle tecnologie alla
                    ricerca archeologica. Negli ultimi decenni Internet e il suo
                    più famoso servizio, il Web, hanno letteralmente invaso le
                    nostre vite, diventando strumenti di comunicazione sempre
                    più totalizzanti, un'esperienza che si è vista esasperare
                    durante i lunghi periodi di isolamento sociale dovuto alla
                    pandemia. Da vari anni, anche la ricerca archeologica ha
                    sperimentato i canali comunicativi offerti dalla Rete,
                    all'inizio esclusivamente per raccontarsi e allargare il
                    proprio pubblico, e successivamente anche per potenziare la
                    propria ricerca. Banche dati online, webGIS, cloud computing
                    e ora anche intelligenza artificiale sono solo alcune delle
                    parole chiave che stanno diventando vieppiù più familiari
                    anche per le ricerche più “tradizionali”.
                  </p>
                  <p>
                    Il LAD è rivolto all'esplorazione di queste potenzialità, a
                    creare ponti e facilitare l'interscambio tra la ricerca
                    archeologia e il mondo dell'Information and Communication
                    Technology (ICT). Il LAD quindi cerca di studiare, indagare,
                    capire, esplorare, governare ed anticipare quello che sembra
                    ormai essere il panorama futuro della nostra ricerca.
                  </p>
                  <p>
                    Infine, il LAD sposa una visione etica delle applicazioni
                    tecnologiche, ponendo l'accento sulla trasparenza dei
                    processi, la condivisione, la riproducibilità e la reciproca
                    collaborazione. Per questo motivo pone il focus principale
                    sulle tecnologie open source e sul software libero. Tutti i
                    nostri progetti sono distribuiti con licenze aperte e
                    pubblicati in repository ad accesso aperto!
                  </p>
                </Container>
              </section>
            </Col>

            {/* Ultimi articoli */}
            <Col sm={4}>
              <Container>
                <h2 className="border-bottom">Ultime dal Blog</h2>
                {data.allMarkdownRemark.nodes.map((node, i) => (
                  <BlogPreview
                    key={i}
                    author={node.frontmatter.autore}
                    excerpt={node.frontmatter.sommario}
                    date={node.frontmatter.date}
                    title={node.frontmatter.title}
                    readMore={node.fields.slug}
                  />
                ))}
              </Container>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </Layout>
  );
};

//style
const Wrapper = styled.section`
  a {
    text-decoration: none !important;
    color: currentColor;
  }
  a:hover {
    text-decoration: none !important;
    color: rgba(21,71,254,0.7);
  }
  .container {
    padding-top: 2rem;
  }
`;

//graphQL
export const query = graphql`
  {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: 4
      filter: {fileAbsolutePath: {regex: "/posts\\/blog/"}}
    ) {
      nodes {
        frontmatter {
          autore
          date(formatString: "DD MMMM YYYY", locale: "it-IT")
          title
          sommario
        }
        fields {
          slug
        }
      }
    }
  }
`;

export default Index;
