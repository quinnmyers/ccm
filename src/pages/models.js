import React, { Component } from "react"
import "../components/pagestyles/projects.sass"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Content from "../components/utility/Content/Content"

class Models extends Component {
  constructor(props) {
    super(props)
    this.state = { url: "" }
  }

  componentDidMount() {
    this.setState({ url: window.location.origin })
    console.log(this.state, window.location)
  }
  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Content>
          <div className="page">
            <a href={`${this.state.url}/pano.html`}>try?</a>
          </div>
        </Content>
      </Layout>
    )
  }
}
export default Models
