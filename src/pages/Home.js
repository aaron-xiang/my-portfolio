import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GithubIcon from '@material-ui/icons/GitHub'
import EmailIcon from '@material-ui/icons/Email'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My Name is Aaron</h2>
        <div className='prompt'>
          <p>A software developer with a passion for learning and creating</p>
          <LinkedInIcon />
          <GithubIcon />
          <EmailIcon />
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
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
        </ol>
      </div>
    </div>
  )
}

export default Home