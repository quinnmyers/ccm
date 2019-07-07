import React from "react"
import Img from "gatsby-image"
import "./teammember.sass"

const TeamMember = ({ name, photo, title, qualifications, skills }) => {
  return (
    <div className="member">
      <div className="member__container">
        <div className="member__container__photo">
          <Img fluid={photo}></Img>
        </div>
        <div className="member__container__info">
          <div className="member__container__info__name">{name}</div>
          <div className="member__container__info__item">
            <h5>TITLE</h5>
            <span>{title}</span>
          </div>
          <div className="member__container__info__item">
            <h5>QUALIFICATIONS</h5>
            <span>{qualifications}</span>
          </div>
          <div className="member__container__info__item">
            <h5>SKILLS</h5>
            <span>{skills}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamMember
