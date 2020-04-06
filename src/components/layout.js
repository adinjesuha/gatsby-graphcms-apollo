import React, { Suspense } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from 'reactstrap';

import '../scss/theme.scss'

import Topbar from './Topbar'
import LeftSidebar from "./LeftSidebar"
import Footer from './Footer'

// loading
const emptyLoading = () => <div></div>;
const loading = () => <div className="text-center"></div>;

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
    <React.Fragment>
      
      <Topbar title={data.site.siteMetadata.title} />
      <LeftSidebar />

      <div className="content-page">
        <div className="content">
          <Container fluid>
            <Suspense fallback={loading()}>{children}</Suspense>
          </Container>
        </div>

        <Suspense fallback={emptyLoading()}>
          <Footer />
        </Suspense>

      </div>

    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
