import React, { Component } from "react"
import BackgroundImage from "gatsby-background-image"
class FixedBg extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mob: false,
    }
  }
  componentDidMount() {
    if (window.matchMedia("(max-width: 600px)").matches) {
      this.setState({ mob: true })
    }
  }
  styles = () => {
    if (this.state.mob) {
      return {
        backgroundPosition: "0px 0px",
        backgroundSize: "cover",
      }
    } else {
      return {
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }
    }
  }
  render() {
    return (
      <BackgroundImage
        Tag="div"
        className="fixed"
        fluid={this.props.backGroundImage}
        backgroundColor={`#98816e`}
        style={this.styles()}
        fadeIn={true}
      >
        {this.props.children}
      </BackgroundImage>
    )
  }
}

export default FixedBg
