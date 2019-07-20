import React, { Component } from "react"
import "./footer.sass"
import BuiltBy from "./builtby"
import Content from "../utility/Content/Content"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
import ALink from "../utility/link/auto_link"

import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
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
    `}
    render={data => {
      const navItems = [
        {
          title: "Home",
          link: "/",
        },
        {
          title: "About",
          link: "/about/",
        },
        {
          title: "Commercial Projects",
          link: "/commercial/",
        },
        {
          title: "Residential Projects",
          link: "/residential/",
        },
        {
          title: "Blog",
          link: "https://ccmarchitecture.blogspot.com/",
        },
        {
          title: "Houzz Profile",
          link: "https://www.houzz.com/pro/ccmellon/",
        },
        {
          title: "Testimonials",
          link: "https://www.houzz.com/pro/ccmellon/ccm-architecture#Reviews",
        },
        {
          title: "Contact",
          link: "/contact/",
        },
      ]
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
      var d = new Date()
      var y = d.getFullYear()
      return (
        <header>
          <footer className="footer">
            <Content>
              <div className="footer__container">
                <div className="footer__container__top">
                  <div className="footer__container__top__left">
                    <p>
                      {documentToReactComponents(
                        data.allContentfulContactPage.edges[0].node.address
                          .json,
                        options
                      )}
                    </p>
                    <p className="phone">
                      {data.contentfulContactPage.phoneNumber}
                    </p>
                  </div>
                  <div className="footer__container__top__center">
                    <Img
                      fluid={data.contentfulSiteMisc.logo.fluid}
                      alt={data.contentfulSiteMisc.logo.title}
                    ></Img>
                  </div>
                  <div className="footer__container__top__right">
                    {navItems.map((i, index) => (
                      <div key={index}>
                        <ALink to={i.link}>{i.title}</ALink>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="footer__contaner__bottom">
                  <div className="footer__container__bottom__copy">
                    <p>Copyright &copy; &nbsp;</p>
                    <p>{`${y} CCM Architecture`}</p>
                  </div>
                </div>
              </div>
            </Content>
          </footer>
        </header>
      )
    }}
  />
)

// export default Footer
