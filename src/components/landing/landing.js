import React, { Component } from "react"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import "./landing.sass"
class Landing extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <BackgroundImage
        Tag="div"
        className="bg"
        fluid={this.props.backGroundImage}
        backgroundColor={`#040e18`}
      >
        <div className="bg__hero">
          <div
            className="bg__hero__image"
            style={{
              width: this.props.heroWidth,
              height: this.props.heroHeight,
            }}
          >
            <Img fluid={this.props.heroImage} alt={this.props.heroImageAlt} />
          </div>
        </div>
        <div className="bg__scroll">
          <button>
            <Img fluid={this.props.arrow} />
          </button>
        </div>
      </BackgroundImage>
    )
  }
}

export default Landing
