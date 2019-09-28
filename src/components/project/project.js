import React, { Component } from "react"
import LightBox from "../light_box/light_box"

class Project extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }
  openLightbox = () => {
    this.setState({ isOpen: true })
  }
  closeLightbox = () => {
    this.setState({ isOpen: false })
  }
  render() {
    return (
      // <h1>this is a test</h1>
      <div
        key={this.props.iterationKey}
        className="page__photos__single"
        onClick={this.openLightbox}
      >
        <div className="page__photos__single__top">
          <h4>{this.props.title}</h4>
          <p>{this.props.city}</p>
        </div>
        <div className="page__photos__single__bottom">
          <LightBox
            photos={this.props.photos}
            cover={this.props.cover}
            caption={this.props.caption}
            alt={this.props.alt}
            open={this.state.isOpen}
            closeLightbox={this.closeLightbox}
          />
        </div>
      </div>
    )
  }
}

export default Project
