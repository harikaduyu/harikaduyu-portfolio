import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import exercise_tracker from '../images/exercise_tracker.png'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
           Hello, nice to see you here! 
           </p>
           <p>
           I am Harika and I currently live in Berlin. My goal is to never stop learning and build awesome things along the way. I like developing stuff and love exploring new technologies. I speak Turkish (native)  and English (fluent), and have a long lasting battle with learning German. :)
          </p>
          <p>
          If I'm not working for <a href="https://www.rebuy.de/">reBuy</a> or on my <a href="#projects">side projects</a>, you might find me walking aroung the city, hiking in the woods, biking, learning German or reading. If there is any time left from all these things, I also enjoy cooking a lot. 
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <h3><a href="https://www.rebuy.de/">reBuy</a> - Software Developer (Pricing)</h3>
           <p> Oct, 2019 - Present <br/> Berlin, Germany</p>
            <ul>
              <li>
              Maintaining and improving the web crawling tool, to crawl competitor prices
              </li>
              <li>
              Maintaining and improving Pricing Engine
              </li>
              <li>
              Automatize manual tasks to ease work of category managers
              </li>
              <li>
              Writing DAGs in airflow to schedule some tasks
              </li>
              <li>
              Create dashboards and reports in Power BI
              </li>
            </ul>
          
            
            <p>Technologies: PHP, MySQL, AWS //  C#, ASP.Net, .Net, Entity Framework, MS SQL Server, SQL Server Analysis Services, Azure</p> 

          <h3><a href="https://www.moebel24.de/">X24 Factory</a> - Data Science and Engineer (Working Student)</h3>
           <p> Nov, 2018 - Sep, 2019 <br/>Berlin, Germany</p>
           <ul>
              <li>
              Evaluating the utility of data and modelling neural nets for extracting relevant metadata useful for the search engine
              </li>
              <li>
              Developed a POC for Kubeflow
              </li>
              <li>
              Collecting data (internal or scraping)
              </li>
            </ul>
            <p>Technologies: Python (Pandas, TensorFlow, sklearn),  MySQL, Cassandra, Kubernetes, Docker</p> 
          <h3><a href="https://www.microsoft.com/tr-tr">Microsoft</a> - Business Associate Intern</h3>
           <p> Feb, 2016 - Nov, 2016 <br/>Istanbul, Turkey</p>
         
          <h3><a href="https://www.trendyol.com/">Trendyol</a> - Digital Marketing Intern</h3>
           <p> Jun, 2015 - Oct, 2015 <br/>Istanbul, Turkey</p>
          {close}

        </article>

        <article
          id="projects"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>

          <h3><a href="https://harikaduyu-exercise-tracker.herokuapp.com/">Exercise Tracker</a></h3>
          <span className="image main">
            <img src={exercise_tracker} alt="" />
          </span>
          <p>A web application for users to track their exercise routines. Created using django framework, deployed to heroku. It's connected to a PostgreSQL server hosted on DigitalOcean.</p>
          {close}
          <p><a href="https://harikaduyu-exercise-tracker.herokuapp.com/">Demo</a> <a href="https://github.com/harikaduyu/exercise_tracker">Code</a></p>
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="https://www.flexyform.com/f/67f88c09a580f2eda37957cc73624278d30ffddf">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
                <input type="hidden" name="_recaptcha" id="_recaptcha"/>
                <script src="https://www.google.com/recaptcha/api.js?render=6Lf7UsoUAAAAACT2Z6gLyh7RTDfyYGxfZ-M4D0ph"></script>
                <script src="https://www.flexyform.com/js/recaptcha.js"></script>
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          {close}
        </article>
      </div>
    )
  }
}


Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
