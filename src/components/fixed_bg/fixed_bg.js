import React, { Component } from "react"
import BackgroundImage from "gatsby-background-image"
class FixedBg extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <BackgroundImage
        Tag="div"
        className="fixed"
        fluid={this.props.backGroundImage}
        backgroundColor={`#040e18`}
        style={{ backgroundAttachment: "fixed" }}
      >
        {this.props.children}
      </BackgroundImage>
    )
  }
}

export default FixedBg
