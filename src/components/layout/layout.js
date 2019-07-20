import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Footer from "./footer"
import Header from "./header"
import "../base.sass"
const Layout = ({ children }) => (
  <>
    <Header siteTitle={"Purple + Bold Starter"} />
    <div>
      <main style={{ minHeight: "100vh" }}>{children}</main>
      <Footer></Footer>
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
