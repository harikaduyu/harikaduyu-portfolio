import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (

    
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
                  <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/harikaduyu/"
                className="icon fa-linkedin"
              >
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/harikaduyu"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            {/* <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li> */}

          </ul>
        <p className="copyright">&copy; 2021 - Harika Duyu  </p> 

        {/* <p className="copyright">Design: <a href="https://html5up.net">HTML5 UP</a>. Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a>. </p> */}
        <p className="copyright">
        Background Photo by: <a href="https://unsplash.com/photos/c2cpsI9LfJ8?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">hoch3media</a></p>
    </footer>

)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
