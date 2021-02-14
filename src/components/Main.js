import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'


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
           <p> Oct,2019 - Present <br/> Berlin, Germany</p>
          <span className="image main">
        
            {/* <img src={pic02} alt="" /> */}
          </span>
          <p>
           As of October 2019, I am working as a Software Developer in the Pricing department. My team is working very closely with Category Managers, Country Managers and other stakeholders related to pricing.
          </p>
          <p>
            I am very happy to be part of a team where I can use my skills to develop tools that are used by many and solving problems related to those tools and their technologies.
          </p>
          <p>
            We have essentially two main services for pricing. The biggest one is the reBuy Pricing Engine, which is a complex system consist of many parts, including a Web UI for users to interact, a backend  (using technologies like SQL Server, C# ASP.NET, SSAS, Azure) where all the pricing calculationand communicating to other services for publishing prices happens. Currently working on a project for automating pricing for special cases and help ease the category managers daily work by decreasing the number of manual adjustments for those.
          </p>
          <p>
            The second one is the reBuy Price Benchmarking tool. This is a competitor price crawler, whit a seperate Web UI where users can set priorities for competitors and/or products and set time intervals for crawling times for them. This tool is built using PHP, MySQL and AWS. Aside from maintiaining it, I worked on increasing the price coverage by creating link collectors and custom link matchers and increased the coverage from 56% to 90%.
          </p>
          <h3><a href="https://www.moebel24.de/">X24 Factory</a> - Data Science and Engineer (Working Student)</h3>
           <p> Nov,2018 - Sep,2019 <br/>Berlin, Germany</p>
          <span className="image main">
        
            {/* <img src={pic02} alt="" /> */}
          </span>
          <p>
            While studying for my masters in Berlin, I got the opportunity to work at X24 Faxtory, or rather <a href="https://www.moebel24.de/">moebel24.de</a>. At the beginning, the idea was for me to work on data science related tasks, as I was also planning to write my thesis on a similar topic. But the team I was working with, worked very closed to backend engineers (in fact we even had our daily standup meetings together with backend engineers) and they were also tackling all the data engineering stuff.
          </p>
          <p>
            The more I worked there, the more I got fascinated with the engineering part of it and all the tools and technologies they were using. I found myself, studying how docker containers work, or other technologies like Spark, Kubernetes and many more.
          </p>
          <p>
            I collected and processed data either through internal data sources or external like scraping or Amazon Mechanical Turk. I evaluated the utility of data and worked on modelling neural nets for extracting metadata of products from images which is useful for the search engine (Elasticsearch). I also developed a Proof of Concept for Kubeflow for our projects.  I also participated other small tasks, which helped me improve my programming skills.
          </p>
          <h3><a href="https://www.microsoft.com/tr-tr">Microsoft</a> - Business Associate Intern</h3>
           <p> Feb,2016 - Nov,2016 <br/>Istanbul, Turkey</p>
          <span className="image main">
        
            {/* <img src={pic02} alt="" /> */}
          </span>
          <p>
            After my first experience, I knew I wanted to experience what it feels like to work for a company who builds great technologies and reaches to billions of people around the world.
          </p>
          <p>
            Microsoft office in Turkey only operates in Sales and Marketing departments, and I was working with a team who kind of did both for small and medium businesses through its partners. I was the person in the middle of all the stakeholders (like partners, account managers, people from other departments). 
          </p>
          <p>I am tremendously grateful for this experience, as I got a chance to see how a company as big as Microsoft operates. However, I realized being part of a company building these technologies wasn't what I actually wanted. I wanted to be the person to create them.</p>
          <h3><a href="https://www.trendyol.com/">Trendyol</a> - Digital Marketing Intern</h3>
           <p> Jun,2015 - Oct,2015 <br/>Istanbul, Turkey</p>
          <span className="image main">
        
            {/* <img src={trendyol} alt="" /> */}
          </span>
          <p>
          Trendyol is a rapidly growing e-commerce website for clothing in Turkey. They even started to oparate in <a href="https://www.trendyol.com/">Germany.</a>
          </p>
          <p>
          This was my first professional experience and I got very lucky to work with an great team. I get to work with amazing technologies around digital advertising platforms, like Google Ads, Google Analytics and Adphorus. This had sparked something in me and I started to wish to be part of those technologies.
          </p>
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
          <span className="image main">
          </span>
          <p>
            Coming soon...
          </p>
          {close}
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
