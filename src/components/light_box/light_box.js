import React, { Component } from "react"
import Lightbox from "lightbox-react"
import "lightbox-react/style.css"
import Img from "gatsby-image"
import "./light_box.sass"

class LightBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      photoIndex: 0,
      isOpen: false,
    }
  }
  render() {
    const { photoIndex, isOpen } = this.state
    return (
      <div className="lightbox">
        {this.props.photos.map((img, index) => (
          <div
            className="lightbox__single"
            onClick={() => this.setState({ isOpen: true, photoIndex: index })}
            key={index}
          >
            <h4>{img.node.title}</h4>
            <p>{img.node.city}</p>
            <Img fluid={img.node.image.fluid} alt={img.node.title} />
          </div>
        ))}
        {isOpen && (
          <Lightbox
            mainSrc={this.props.photos[photoIndex].node.image.file.url}
            nextSrc={
              this.props.photos[(photoIndex + 1) % this.props.photos.length]
                .node.image.file.url
            }
            prevSrc={
              this.props.photos[
                (photoIndex + this.props.photos.length - 1) %
                  this.props.photos.length
              ].node.image.file.url
            }
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex:
                  (photoIndex + this.props.photos.length - 1) %
                  this.props.photos.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % this.props.photos.length,
              })
            }
          />
        )}
      </div>
    )
  }
}

export default LightBox
