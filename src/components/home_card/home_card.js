import React, { Component } from "react"
import Img from "gatsby-image"
import ALink from "../utility/link/auto_link"
import "./home_card.sass"
class HomeCard extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="card">
        <ALink to={this.props.link}>
          <div className="card__icon">
            <Img fluid={this.props.icon} alt={this.props.linkText} />
          </div>
          <h2>{this.props.linkText}</h2>
        </ALink>
      </div>
    )
  }
}

export default HomeCard
