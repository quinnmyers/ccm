import React, { Component } from "react"
import { Link } from "gatsby"
import "../components/pagestyles/home.sass"
import Layout from "../components/layout/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Content from "../components/utility/Content/Content"
import Landing from "../components/landing/landing"
import FixedBg from "../components/fixed_bg/fixed_bg"
import HomeCard from "../components/home_card/home_card"
class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.scrollRef = React.createRef()
  }
  render() {
    const { data } = this.props
    const indexQuery = data.contentfulHomePage
    const miscQuery = data.contentfulSiteMisc
    return (
      <>
        <Landing
          arrow={miscQuery.arrowIcon.fluid}
          backGroundImage={indexQuery.landingImage.fluid}
          heroImage={miscQuery.logo.fluid}
          heroWidth="50%"
          heroHeight="50%"
          heroImageAlt={miscQuery.logo.title}
          scrollTo={this.scrollRef}
        />
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Layout>
          <Content>
            <div ref={this.scrollRef} className="cta">
              <h2>CCM ARCHITECTURE</h2>
              <hr />
              <p>
                CCM Architecture is an Architectural Design and Construction
                company that focuses on providing thoughtful yet creative design
                solutions which enable the construction of beautiful, high
                quality spaces. We strive to design and build responsibly,
                giving thought to the environment while utilizing local trades,
                sourcing local materials or materials made in the USA.
              </p>
            </div>
          </Content>
          <FixedBg backGroundImage={indexQuery.firstPageImage.fluid}>
            <div className="cards">
              <HomeCard
                linkText="Residental"
                link="/residental/"
                icon={indexQuery.residentialIcon.fluid}
              />
              <HomeCard
                linkText="Commercial"
                link="/commercial/"
                icon={indexQuery.commercialIcon.fluid}
              />
            </div>
          </FixedBg>
          <Content>
            <div className="link__bar" style={{ height: "100px" }}>
              hello
            </div>
          </Content>
          <FixedBg backGroundImage={indexQuery.secondPageImage.fluid}>
            <div className="cards">
              <HomeCard
                linkText="Blog"
                link="https://ccmarchitecture.blogspot.com/"
                icon={indexQuery.blogIcon.fluid}
              />

              <HomeCard
                linkText="Contact"
                link="/contact/"
                icon={indexQuery.contactIcon.fluid}
              />
            </div>
          </FixedBg>
        </Layout>
      </>
    )
  }
}

export const query = graphql`
  query IndexPageQuery {
    contentfulSiteMisc {
      arrowIcon {
        fluid {
          ...GatsbyContentfulFluid_noBase64
        }
      }
      logo {
        title
        fluid {
          ...GatsbyContentfulFluid_noBase64
        }
      }
      houzzLogo {
        title
        fluid(maxWidth: 800) {
          ...GatsbyContentfulFluid_noBase64
        }
      }
    }
    contentfulHomePage {
      landingImage {
        fluid(maxWidth: 2000) {
          ...GatsbyContentfulFluid
        }
      }
      firstPageImage {
        fluid(maxWidth: 2000) {
          ...GatsbyContentfulFluid
        }
      }
      secondPageImage {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      commercialIcon {
        fluid {
          ...GatsbyContentfulFluid_noBase64
        }
      }
      residentialIcon {
        fluid {
          ...GatsbyContentfulFluid_noBase64
        }
      }
      blogIcon {
        fluid {
          ...GatsbyContentfulFluid_noBase64
        }
      }
      contactIcon {
        fluid {
          ...GatsbyContentfulFluid_noBase64
        }
      }
    }
  }
`

export default IndexPage
