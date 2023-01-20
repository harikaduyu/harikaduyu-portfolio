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
            <a href="https://drive.google.com/file/d/1yUdEKqF5FGLm-l9gGNy0CG0Z6s1ORQI3/view">
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
