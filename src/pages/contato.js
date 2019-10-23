import React from "react"
import { StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const ContactPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Contato"
        keywords={[
          `viviana figueiredo`,
          `decoração`,
          `decoradora`,
          `design`,
          `interiores`,
          `interior design`,
        ]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            Vamos bater um papo?
          </h2>
          <p style={{ textAlign: "center" }}>
            Deixe uma mensagem aqui que eu te retorno o mais rápido possivel:
          </p>
          <hr />
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            style={{ maxWidth: "480px", margin: "0 auto" }}
          >
            <p>
              <label>
                Seu nome: <input type="text" name="name" />
              </label>
            </p>
            <p>
              <label>
                Seu e-mail: <input type="email" name="email" />
              </label>
            </p>
            <p>
              <label>
                Mensagem: <textarea name="message"></textarea>
              </label>
            </p>
            <p>
              <button type="submit">Enviar</button>
            </p>
          </form>
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
    vivi: file(relativePath: { eq: "FUJI9565.jpg" }) {
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
      <ContactPage location={props.location} data={data} {...props} />
    )}
  />
)
