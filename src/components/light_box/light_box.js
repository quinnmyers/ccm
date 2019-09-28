import React, { Component } from "react"
import Lightbox from "lightbox-react"
import "lightbox-react/style.css"
import Img from "gatsby-image"
import "./light_box.sass"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
class LightBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      photoIndex: 0,
      isOpen: false,
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.open !== state.isOpen) {
      return {
        isOpen: props.open,
      }
    }
  }
  render() {
    const { photoIndex, isOpen } = this.state
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
      // <div className="lightbox" onClick={() => this.setState({ isOpen: true })}>
      <div className="lightbox">
        <Img fluid={this.props.cover} alt={this.props.alt} />

        {isOpen && (
          <Lightbox
            imageCaption={documentToReactComponents(
              this.props.caption,
              options
            )}
            mainSrc={this.props.photos[photoIndex].file.url}
            nextSrc={
              this.props.photos[(photoIndex + 1) % this.props.photos.length]
                .file.url
            }
            prevSrc={
              this.props.photos[
                (photoIndex + this.props.photos.length - 1) %
                  this.props.photos.length
              ].file.url
            }
            // onCloseRequest={() => this.setState({ isOpen: false })}
            onCloseRequest={this.props.closeLightbox}
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
