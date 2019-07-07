import React, { Component } from "react"
import { Link } from "gatsby"
import "../components/pagestyles/home.sass"
import Layout from "../components/layout/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Content from "../components/utility/Content/Content"

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Content>
          <div className="style_tester">
            <p>is this from contentful?</p>
            <br />
            <p>{this.props.data.contentfulHomePage.testContent}</p>
            <br />
            <br />
            <h1>This is A Header 1</h1> <h1>CCM ARCHITECTURE</h1>
            <br />
            <br />
            <h2>This is A Header 2</h2>
            <br />
            <br />
            <h3>This is A Header 3</h3>
            <br />
            <br />
            <h4>This is A Header 4</h4>
            <br />
            <br />
            <p>
              This is a paragraph CCM Architecture is an Architectural Design
              and Construction company that focuses on providing thoughtful yet
              creative design solutions which enable the construction of
              beautiful, high quality spaces. We strive to design and build
              responsibly, giving thought to the environment while utilizing
              local trades, sourcing local materials or materials made in the
              USA.
            </p>
            <br />
            <br />
            <br />
            <div>
              <h1 className="page__header">Residential Projects</h1>
              <h4 className="page__subheader">
                Above is a page_header h1 tag, this is the h4 page__subheader
                title below
              </h4>
            </div>
          </div>
        </Content>
      </Layout>
    )
  }
}

export const query = graphql`
  query IndexPageQuery {
    contentfulHomePage {
      testContent
    }
  }
`

export default IndexPage
