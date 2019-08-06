import React, { Component } from "react"
import ALink from "../utility/link/auto_link"
import "./header.sass"
import Content from "../utility/Content/Content"
class Headder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: "",
      navlinks: [
        {
          title: "Home",
          link: "/",
        },
        {
          title: "About",
          link: "/about/",
        },
        {
          title: "Projects",
          link: null,
          subLink: [
            {
              title: "Commercial",
              link: "/commercial/",
            },
            {
              title: "Residental",
              link: "/residental/",
            },
          ],
        },
        {
          title: "Model",
          link: `https://ccm.purpleandbold.net/pano.html`,
        },
        {
          title: "Blog",
          link: "https://ccmarchitecture.blogspot.com/",
        },
        {
          title: "Houzz Profile",
          link: "https://www.houzz.com/pro/ccmellon/",
        },
        {
          title: "Testimonials",
          link: "https://www.houzz.com/pro/ccmellon/ccm-architecture#Reviews",
        },
        {
          title: "Contact",
          link: "/contact/",
        },
      ],
      navOpen: false,
      subOpen: false,
    }
    this.toggleNav = this.toggleNav.bind(this)
  }
  componentDidMount() {
    this.setState({ url: window.location.origin })
  }
  toggleNav() {
    const currentstate = this.state.navOpen
    this.setState({ navOpen: !currentstate })
  }
  showSub = () => {
    this.setState({ subOpen: !this.state.subOpen })
  }

  render() {
    return (
      <div className="header__wrapper">
        <Content>
          <div className="header">
            {/* desktop nav */}
            <div className="desktop">
              <nav className="nav">
                {this.state.navlinks.map((link, index) => (
                  <div className="nav__link" key={index}>
                    {link.link != null ? (
                      <ALink to={link.link}>{link.title}</ALink>
                    ) : (
                      <div
                        className="nav__link__drop"
                        onClick={() => this.showSub()}
                      >
                        {link.title}
                        <div
                          className={`nav__link__drop__content ${
                            this.state.subOpen ? "sub__show" : " "
                          }`}
                        >
                          {link.subLink.map((sublink, index) => (
                            <ALink to={sublink.link} key={index + 20}>
                              {sublink.title}
                            </ALink>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
            {/* mobile nav */}
            <div
              className={`mobile ${
                this.state.navOpen ? "nav__open" : "nav__closed"
              }`}
            >
              <button
                className="dot"
                aria-label="click to expand nav"
                onClick={() => this.toggleNav()}
              >
                <div className="dot__one"></div>
                <div className="dot__two"></div>
                <div className="dot__three"></div>
              </button>
              <nav className={`nav`}>
                {this.state.navlinks.map((link, index) => (
                  <div className="nav__link" key={index}>
                    {link.link != null ? (
                      <ALink to={link.link}>{link.title}</ALink>
                    ) : (
                      <div
                        className="nav__link__drop"
                        onClick={() => this.showSub()}
                      >
                        {link.title}
                        <div
                          className={`nav__link__drop__content ${
                            this.state.subOpen ? "sub__show" : " "
                          }`}
                        >
                          {link.subLink.map((sublink, index) => (
                            <ALink to={sublink.link} key={index + 20}>
                              {sublink.title}
                            </ALink>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </Content>
      </div>
    )
  }
}

export default Headder
