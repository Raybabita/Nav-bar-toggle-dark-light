import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboutBgClassName = isDarkTheme ? 'about-bg-dark' : 'about-bg-light'

      const aboutImageURL = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const aboutTextClassName = isDarkTheme
        ? 'about-text-light'
        : 'about-text-dark'

      return (
        <div className={`about-app-container ${aboutBgClassName}`}>
          <Navbar />
          <div className="responsive-container">
            <div className="about-container">
              <img className="about-img" src={aboutImageURL} alt="about" />
              <h1 className={`about-heading ${aboutTextClassName}`}>About</h1>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
