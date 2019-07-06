import React, { Component } from "react"
import { Link } from "gatsby"
import "../components/pagestyles/commercial.sass"
import Layout from "../components/layout/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Content from "../components/utility/Content/Content"

class Commercial extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Content>
          <p>is this from contentful?</p>
          <br />
          {/* <p>{this.props.data.contentfulHomePage.testContent}</p> */}
        </Content>
      </Layout>
    )
  }
}

// export const query = graphql``

export default Commercial
