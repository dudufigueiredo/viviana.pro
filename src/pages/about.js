import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="ABout" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            Sobre
          </h2>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Large imagery is at the heart of this theme</figcaption>
          </figure>
          <p>
            Comecei a trabalhar na decoração com minha avó Leda Magalhães aos 25
            anos, com que aprendi muito. Depois de sete anos de prática como
            assistente fiz um curso de projetos arquitetônicos e decoração, e
            comecei minha carreira independente.
          </p>
          <p>
            De lá pra cá já se passaram mais de vinte anos de carreira, onde
            tive oportunidade de trabalhar com os mais diversos tipos de estilos
            e ambientes como casas de praia, de campo, escritórios, apartamentos
            modernos e rústicos, consultórios, agências de publicidade,
            restaurantes e até uma sala vip no Estádio do Morumbi. Mas o que tem
            de comum entre todos estes projetos é o fato de que sou uma
            decoradora que gosta muito de trabalhar a quatro mãos, meus projetos
            são todos muito personalizados desenvolvidos em um processo de
            co-criação onde o cliente participa das escolhas do início ao fim.
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
