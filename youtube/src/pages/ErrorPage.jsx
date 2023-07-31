import { Link } from 'react-router-dom'
import './ErrorPage.css'
import Logo from '/assets/youtube-logo.png'

export default function ErrorPage() {
    return (
        <div className="errorpage">
            <img src={Logo} alt="Logo" />
            <h1>Page Not Found</h1>
            <p>We couldn't find page.</p>
            <Link to="/home" className="homebutton">
                <button>Home</button>
            </Link>
            <a href="https://support.google.com/youtube/?hl=en">Help</a>
        </div>
    )
}
