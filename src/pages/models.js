import React, { Component } from "react"
import "../components/pagestyles/projects.sass"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Content from "../components/utility/Content/Content"

class Models extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    console.log(this.props.data)
  }
  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Content>
          <div className="page">
            <a href="pano">try?</a>
            <a href="alsoMove/pano">try?</a>
          </div>
        </Content>
      </Layout>
    )
  }
}
export default Models
