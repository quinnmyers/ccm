import React, { Component } from "react"
import { Link } from "gatsby"
import "../components/pagestyles/contact.sass"
import Layout from "../components/layout/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Content from "../components/utility/Content/Content"
import Img from "gatsby-image"

import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    const contactQuery = this.props.data.contentfulContactPage
    const siteQuery = this.props.data.contentfulSiteMisc

    const Text = ({ children }) => <p>{children}</p>

    const options = {
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      },
      renderText: text => {
        return text.split("\n").reduce((children, textSegment, index) => {
          return [...children, index > 0 && <br key={index} />, textSegment]
        }, [])
      },
    }
    // const document = {
    //   nodeType: "document",
    //   data: {},
    //   content: [
    //     {
    //       nodeType: "paragraph",
    //       data: {},
    //       content: [
    //         {
    //           nodeType: "text",
    //           value: "hi",
    //           marks: [],
    //           data: {},
    //         },
    //       ],
    //     },
    //   ],
    // }
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <div className="contact">
          <Content>
            <div className="contact__content">
              <h1 className="page__header">{contactQuery.pageTitle}</h1>
              <h4 className="page__subheader">{contactQuery.pageSubtitle}</h4>
              <p className="page__description">
                {contactQuery.contactDescription.internal.content}
              </p>
              <div className="contact__content__container content__section">
                <div className="contact__content__container__left">
                  <div className="contact__content__container__left__logo">
                    <Img
                      fluid={siteQuery.logo.fluid}
                      alt={siteQuery.logo.title}
                    ></Img>
                  </div>
                  <div className="contact__content__container__left__info">
                    <p>
                      {documentToReactComponents(
                        this.props.data.allContentfulContactPage.edges[0].node
                          .address.json,
                        options
                      )}
                      {/* {documentToReactComponents(document, options)} */}
                    </p>
                    <div className="phone">
                      <p>{contactQuery.phoneNumber}</p>
                    </div>
                  </div>
                </div>
                <div className="line"></div>
                <div className="contact__content__container__right">
                  <div className="contact__content__container__right__form">
                    <form
                      action={`https://formspree.io/${contactQuery.contactEmailAddress}`}
                      method="POST"
                    >
                      <label>
                        Name
                        <input type="text" />
                      </label>

                      <label for="name">
                        E-Mail
                        <input type="email" name="email" />
                      </label>

                      <label>
                        Phone Number
                        <input type="text" />
                      </label>

                      <label>
                        Message
                        <textarea name="message"></textarea>
                      </label>

                      <div className="button">
                        <input type="submit" value="Send" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <br />
            {/* <p>{this.props.data.contentfulHomePage.testContent}</p> */}
          </Content>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query ContactPageQuery {
    allContentfulContactPage {
      edges {
        node {
          address {
            json
          }
        }
      }
    }
    contentfulContactPage {
      pageTitle
      pageSubtitle
      contactEmailAddress
      contactDescription {
        internal {
          content
        }
      }
      phoneNumber
    }
    contentfulSiteMisc {
      logo {
        title
        fluid(maxWidth: 750) {
          ...GatsbyContentfulFluid_noBase64
        }
      }
    }
  }
`

export default Contact
