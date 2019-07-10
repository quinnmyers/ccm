import React, { Component } from "react"
import { Link } from "gatsby"
import "../components/pagestyles/projects.sass"
import Layout from "../components/layout/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Content from "../components/utility/Content/Content"
import LightBox from "../components/light_box/light_box"
class Commercial extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { data } = this.props
    const projectsQuery = data.allContentfulProjects
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Content>
          <div className="page">
            <div className="page__title">
              <h2>Commercial Projects</h2>
              <h4>CCM Architecture</h4>
            </div>
            <div className={`page__photos`}>
              <LightBox
                photos={projectsQuery.edges.filter(
                  img => img.node.commercialOrResidental === false
                )}
              />
            </div>
          </div>
        </Content>
      </Layout>
    )
  }
}

export const query = graphql`
  query commercialQuery {
    allContentfulProjects {
      edges {
        node {
          title
          city
          image {
            fluid(maxWidth: 1500) {
              ...GatsbyContentfulFluid_noBase64
            }
            file {
              url
            }
          }

          commercialOrResidental
        }
      }
    }
  }
`

export default Commercial
