import React, { Component } from "react"
import Img from "gatsby-image"
import "./teammember.sass"
import ReadMoreReact from "read-more-react"

class TeamMember extends Component {
  constructor(props) {
    super(props)
    this.state = {
      titleHeight: "auto",
      qualificationHeight: "auto",
      skillHeight: "auto",
    }
    this.setHeights = this.setHeights.bind(this)
  }
  componentDidMount() {
    this.measureTitle()
    this.measureQualifications()
    this.measureSkill()
    //removed this for now because it wasn't working well when people had a lot of info in one of the categories
    // process.nextTick(this.setHeights)
  }
  setHeights() {
    this.setState({
      titleHeight: this.props.titleHeight,
      qualificationHeight: this.props.qualificationHeight,
      skillHeight: this.props.skillHeight,
    })
  }
  measureTitle() {
    this.props.measureHeight(this.title, "title")
  }
  measureQualifications() {
    this.props.measureHeight(this.qualifications, "qualification")
  }
  measureSkill() {
    this.props.measureHeight(this.skill, "skill")
  }
  render() {
    return (
      <div className="member">
        <div className="member__container">
          <div className="member__container__photo">
            <Img fluid={this.props.photo}></Img>
          </div>
          <div className="member__container__info">
            <div className="member__container__info__name">
              {this.props.name}
            </div>
            <div
              className="member__container__info__item"
              ref={div => (this.title = div)}
              style={{ height: this.state.titleHeight + "px" }}
            >
              <h5>TITLE</h5>
              <span>{this.props.title}</span>
            </div>
            <div
              className="member__container__info__item"
              ref={div => (this.qualifications = div)}
              style={{ height: this.state.qualificationHeight + "px" }}
            >
              <h5>QUALIFICATIONS</h5>
              <span>{this.props.qualifications}</span>
            </div>
            <div
              className="member__container__info__item"
              ref={div => (this.skill = div)}
              style={{ height: this.state.skillHeight + "px" }}
            >
              <h5>SKILLS</h5>
              <span>{this.props.skills}</span>
            </div>
            <div
              className="member__container__info__item"
              ref={div => (this.bio = div)}
              style={{ height: this.state.bioHeight + "px" }}
            >
              <h5>BIOGRAPHY</h5>
              <span>
                <ReadMoreReact
                  text={this.props.bio}
                  readMoreText="Read More"
                  min={160}
                  ideal={200}
                  max={220}
                />
              </span>
              {/* <span>{this.props.bio}</span> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TeamMember
// const TeamMember = ({ name, photo, title, qualifications, skills }) => {
//   return (
//     <div className="member">
//       <div className="member__container">
//         <div className="member__container__photo">
//           <Img fluid={photo}></Img>
//         </div>
//         <div className="member__container__info">
//           <div className="member__container__info__name">{name}</div>
//           <div className="member__container__info__item">
//             <h5>TITLE</h5>
//             <span>{title}</span>
//           </div>
//           <div className="member__container__info__item">
//             <h5>QUALIFICATIONS</h5>
//             <span>{qualifications}</span>
//           </div>
//           <div className="member__container__info__item">
//             <h5>SKILLS</h5>
//             <span>{skills}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default TeamMember

//older styler after bios added but they were too long
{
  /* <div className="member">
<div className="member__container">
  <div className="member__container__photo">
    <Img fluid={this.props.photo}></Img>
  </div>
  <div className="member__container__info">
    <div className="member__container__info__name">
      {this.props.name}
    </div>
    <div
      className="member__container__info__item"
      ref={div => (this.title = div)}
      style={{ height: this.state.titleHeight + "px" }}
    >
      <h5>TITLE</h5>
      <span>{this.props.title}</span>
    </div>
    <div
      className="member__container__info__item"
      ref={div => (this.qualifications = div)}
      style={{ height: this.state.qualificationHeight + "px" }}
    >
      <h5>QUALIFICATIONS</h5>
      <span>{this.props.qualifications}</span>
    </div>
    <div
      className="member__container__info__item"
      ref={div => (this.skill = div)}
      style={{ height: this.state.skillHeight + "px" }}
    >
      <h5>SKILLS</h5>
      <span>{this.props.skills}</span>
    </div>
    <div
      className="member__container__info__item"
      ref={div => (this.bio = div)}
      style={{ height: this.state.bioHeight + "px" }}
    >
      <h5>Biography</h5>
      <span>{this.props.bio}</span>
    </div>
  </div>
</div>
</div> */
}
