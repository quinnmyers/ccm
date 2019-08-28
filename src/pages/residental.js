import React, { Component } from "react"
import { Link } from "gatsby"
import "../components/pagestyles/projects.sass"
import Layout from "../components/layout/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Content from "../components/utility/Content/Content"
import LightBox from "../components/light_box/light_box"
// import Spacer from "../components/utility/Spacer/Spacer"
class Residental extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    console.log(this.props.data)
  }
  render() {
    const { data } = this.props
    const projectsQuery = data.contentfulResidentialProjectsPage
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Content>
          <div className="page">
            <div className="page__title">
              <h2 className="page__header">{projectsQuery.pageTitle}</h2>
              <h4 className="page__subheader">{projectsQuery.pageSubtitle}</h4>
            </div>
            <div className={`page__photos content__section`}>
              {projectsQuery.residentialProjectsOnPage.map((proj, index) => (
                <div key={index} className="page__photos__single">
                  <div className="page__photos__single__top">
                    <h4>{proj.title}</h4>
                    <p>{proj.city}</p>
                  </div>
                  <div className="page__photos__single__bottom">
                    <LightBox
                      photos={proj.additionalImages}
                      cover={proj.image.fluid}
                      caption={proj.imageCaption.json}
                      alt={proj.image.title}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Content>
      </Layout>
    )
  }
}

export const query = graphql`
  query residentalQuery {
    contentfulResidentialProjectsPage {
      pageTitle
      pageSubtitle
      residentialProjectsOnPage {
        additionalImages {
          file {
            url
          }
        }
        imageCaption {
          json
        }
        city
        title
        image {
          title
          fluid(maxWidth: 500) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default Residental
