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
        backgroundColor={`#98816e`}
        style={{ backgroundAttachment: "fixed" }}
        fadeIn={true}
      >
        {this.props.children}
      </BackgroundImage>
    )
  }
}

export default FixedBg
