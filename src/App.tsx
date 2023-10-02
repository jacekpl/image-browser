import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import ImageViewerPage from "./Domain/Image/ImageViewerPage.tsx";
import AboutPage from "./Domain/About/AboutPage.tsx";
import PageNotFound from "./Domain/ErrorPages/PageNotFound.tsx";
import Footer from "./Domain/Footer/Footer.tsx";

function App() {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to={'/'}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/about'}>About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<ImageViewerPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
            <Footer/>
        </Router>
    )
}

export default App
