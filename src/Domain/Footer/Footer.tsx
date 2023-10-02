import {Link} from "react-router-dom";

function Footer() {

    return (
        <footer className="text-muted py-5">
            <div className="container">
                <p className="float-end mb-1">
                    <a href="#">Back to top</a>
                </p>
                <p className="mb-1">Copyrights &copy; Jacek</p>
                <p className="mb-0">Want to know more? <Link to={'/about'}>Visit the about page</Link>.</p>
            </div>
        </footer>
    )
}

export default Footer