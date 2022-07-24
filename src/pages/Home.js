import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GithubIcon from '@material-ui/icons/GitHub'
import EmailIcon from '@material-ui/icons/Email'
import '../styles/Home.css'
import cssIcon from '../assets/icon_css.svg'
import gitIcon from '../assets/icon_git.svg'
import githubIcon from '../assets/icon_github.svg'
import htmlIcon from '../assets/icon_html.svg'
import javascriptIcon from '../assets/icon_javascript.svg'
import reactIcon from '../assets/icon_react.svg'
import nextIcon from '../assets/icon_nextjs.svg'
import mysqlIcon from '../assets/icon_mysql.svg'
import nodeIcon from '../assets/icon_nodejs.svg'

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>I'm Aaron Xiang</h2>
        <div className='prompt'>
          <p>A software developer with a passion for learning and creating</p>
          <div className='icon-btns'>
            <form action="">
              <button className='btn' type='submit' formAction='https://www.linkedin.com/in/aaron-xiang-63004b198/' formTarget='_blank'>
                <LinkedInIcon />
              </button>
            </form>
            <form action="">
              <button className='btn' type='submit' formAction='https://github.com/aaron-xiang' formTarget='_blank'>
                <GithubIcon />
              </button>
            </form>
            <button className='btn' type='submit' formAction='' formTarget='_blank'>
              <EmailIcon />
            </button>
          </div>
        </div>
        <div className='scroll-container'>
        <div className='scroll-div'>
          <div className='scroll-text'>Scroll</div>
          <div className='scroll-arrow'>ᐅ</div>
        </div>
      </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <hr />
        <div className='skills-body'>
          <div className='skills-body-left'>
            <div className='skills-left-header'>Languages and Frameworks</div>
            <div className='skills-left-items'>
              <div className='skill-item'>
                <img src={htmlIcon} alt="" />
                <span>HTML5</span>
              </div>
              <div className='skill-item'>
                <img src={cssIcon} alt="" />
                <span>CSS3</span>
              </div>
              <div className='skill-item'>
                <img src={javascriptIcon} alt="" />
                <span>Javascript (ES6)</span>
              </div>
              <div className='skill-item'>
                <img src={reactIcon} alt="" />
                <span>React</span>
              </div>
              <div className='skill-item'>
                <img src={mysqlIcon} alt="" />
                <span>MySQL</span>
              </div>
            </div>
          </div>
          <div className='skills-body-right'>
            <div className='skills-right-header'>Develpment Tools</div>
            <div className='skills-right-items'>
              <div className='skill-item'>
                <img src={gitIcon} alt="" />
                <span>Git</span>
              </div>
              <div className='skill-item'>
                <img src={githubIcon} alt="" />
                <span>Github</span>
              </div>
              <div className='skill-item'>
                <img src={nodeIcon} alt="" />
                <span>Node.js</span>
              </div>
              <div className='skill-item'>
                <img src={nextIcon} alt="" />
                <span>Next.js</span>
              </div>
            </div>
          </div>
        </div>

        {/* <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>
              ReactJS, HTML, CSS, NPM, Yarn, StyledComponents
            </span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, MySQL, MongoDB</span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>Java, Python, Javascript, Rust</span>
          </li>
        </ol> */}
      </div>
    </div>
  )
}

export default Home