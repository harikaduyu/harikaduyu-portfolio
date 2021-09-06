import PropTypes from 'prop-types'
import React from 'react'
import profile from '../images/profile.jpeg'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      {/* <i className="icon fas fa-cubes"></i> */}
      <img
        style={{ width: '100%', borderRadius: '50%' }}
        className="icon"
        src={profile}
        alt=""
      />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Hello, my name is Harika</h1>
        <p>I'm a Software Engineer based in Berlin.</p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button>
            <a href="https://harikaduyu.fra1.digitaloceanspaces.com/resume/Harika_Duyu_Resume.pdf">
              Resume
            </a>
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('projects')
            }}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
