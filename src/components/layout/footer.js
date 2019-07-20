import React, { Component } from "react"
import "./footer.sass"
import BuiltBy from "./builtby"
import Content from "../utility/Content/Content"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

// class Footer extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {}
//   }
// render() {
// const data = this.props.data
// const Text = ({ children }) => <p>{children}</p>

// const options = {
//   renderNode: {
//     [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
//   },
//   renderText: text => {
//     return text.split("\n").reduce((children, textSegment, index) => {
//       return [...children, index > 0 && <br key={index} />, textSegment]
//     }, [])
//   },
// }
//     return (
//       <footer className="footer">
//         <Content>
//           <div className="footer__container">
//             <div className="footer__container__left">

//             </div>
//             <div className="footer__container__center">

//             </div>
//             <div className="footer__container__right">

//             </div>
//           </div>
//         </Content>
//         <BuiltBy />
//       </footer>
//     )
//   }
// }

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
      return (
        <header>
          <footer className="footer">
            <Content>
              <div className="footer__container">
                <div className="footer__container__left">
                  <p>
                    {documentToReactComponents(
                      data.allContentfulContactPage.edges[0].node.address.json,
                      options
                    )}
                  </p>
                </div>
                <div className="footer__container__center">
                  <p>this is the middle</p>
                </div>
                <div className="footer__container__right">
                  <p>this is the right</p>
                </div>
              </div>
            </Content>
            <BuiltBy />
          </footer>
        </header>
      )
    }}
  />
)

// export default Footer
