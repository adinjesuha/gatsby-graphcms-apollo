import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import "../scss/bootstrap.scss"
import "../scss/app.scss"

import Topbar from './Topbar'

const App = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  padding-left: 240px; /* control the navbar width */
  margin-top: 70px;
  transition: all 0.25s ease-in-out 0s;
  will-change: padding-left;

  .main-app{
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;
    width: 100%;
    
    .content-app{
      padding: 20px;
      margin: 0 auto;
      width: 100%;
      max-width: 1120px;
    }
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Topbar title={data.site.siteMetadata.title} />
      <App>
        <main className="main-app">
          <section className="content-app">{children}</section>
        </main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </App>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
