import React, { Component } from "react"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import "./landing.sass"
class Landing extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log(this.props)
  }
  handleScrolling = () => {
    this.props.scrollTo.current.scrollIntoView({
      block: "start",
      behavior: "smooth",
    })
  }
  render() {
    return (
      <BackgroundImage
        Tag="div"
        className="bg"
        fluid={this.props.backGroundImage}
        backgroundColor={`#c9e0fc`}
        fadeIn={true}
        loading="eager"
      >
        <div className="bg__hero">
          <div
            className="bg__hero__image"
            style={{
              width: this.props.heroWidth,
            }}
          >
            <Img fluid={this.props.heroImage} alt={this.props.heroImageAlt} />
          </div>
        </div>
        <div className="bg__scroll">
          <button onClick={() => this.handleScrolling()}>
            <Img fluid={this.props.arrow} />
          </button>
        </div>
      </BackgroundImage>
    )
  }
}

export default Landing
