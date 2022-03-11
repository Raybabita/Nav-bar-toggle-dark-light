import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const NotFound = () => (
  <ThemeContext.Consumer>
    {vlaue => {
      const {isDarkTheme} = vlaue

      const notFoundBgClassName = isDarkTheme
        ? 'not-found-bg-dark'
        : 'not-found-bg-light'

      const notFoundHeadingTextClassName = isDarkTheme
        ? 'not-found-heading-text-light'
        : 'not-found-heading-text-dark'

      const notFoundContentTextClassName = isDarkTheme
        ? 'not-found-content-text-light'
        : 'not-found-content-text-dark'

      return (
        <div className={` not-found-app-container ${notFoundBgClassName}`}>
          <Navbar />
          <div className="responsive-container">
            <div className="not-found-container">
              <img
                className="not-found-img"
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
                alt="not found"
              />
              <h1
                className={` not-found-heading ${notFoundHeadingTextClassName}`}
              >
                Lost Your Way?
              </h1>
              <p
                className={`not-found-content ${notFoundContentTextClassName}`}
              >
                We cannot seem to find the page you are looking for.
              </p>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
