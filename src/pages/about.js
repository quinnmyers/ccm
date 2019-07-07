import React, { Component } from "react"
import { Link } from "gatsby"
import "../components/pagestyles/about.sass"
import Layout from "../components/layout/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Content from "../components/utility/Content/Content"
import TeamMember from "../teamMember/TeamMember"
import { graphql } from "gatsby"

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    const aboutPage = this.props.data.contentfulAboutPage
    const teamMember = aboutPage.teamMembers
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

        <div className="about">
          <Content>
            <div className="about__content">
              <h1 className="page__header">{aboutPage.pageTitle}</h1>
              <h4 className="page__subheader">{aboutPage.pageSubTitle}</h4>
              <p>{aboutPage.aboutDescription.internal.content}</p>
              <div className="about__content__team">
                <h2>{aboutPage.teamSectionTitle}</h2>
                <div className="about__content__team__container">
                  <div className="about__content__team__container__members">
                    {aboutPage.teamMembers.map(t => (
                      <TeamMember
                        name={t.name}
                        photo={t.photo.fluid}
                        title={t.titles}
                        qualifications={t.qualifications}
                        skills={t.skills}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Content>
        </div>
        <p>is this from contentful?</p>
        <br />
        {/* <p>{this.props.data.contentfulHomePage.testContent}</p> */}
      </Layout>
    )
  }
}

export const query = graphql`
  query AboutPageQuery {
    contentfulAboutPage {
      pageTitle
      pageSubTitle
      aboutDescription {
        internal {
          content
        }
      }
      teamSectionTitle
      teamMembers {
        name
        titles
        qualifications
        skills
        photo {
          fluid(maxWidth: 750) {
            ...GatsbyContentfulFluid_noBase64
          }
        }
      }
    }
  }
`

// export const query = graphql`
//   query IndexPageQuery {
//     contentfulHomePage {
//       testContent
//     }
//   }
// `

export default About
