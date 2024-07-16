import githubIcon from '../assets/github-mark.png';
import githubIconWhite from '../assets/github-mark-white.png';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
      <div className="footer-content">
        <img src={logo} alt="Cat Memory Game Logo" className="footer-logo" />
        <p>&copy; {new Date().getFullYear()} Cat Memory Game. Jacob G.</p>
        <a href="https://github.com/jacob-guerrero/" target="_blank" rel="noopener noreferrer">
          <picture>
                <source
                    srcSet={githubIconWhite}
                    media="(prefers-color-scheme: dark)"
                />
                <img
                    src={githubIcon}
                    alt="GitHub"
                    className="github-icon"
                />
            </picture>
        </a>
      </div>
  );
};

export default Footer;
