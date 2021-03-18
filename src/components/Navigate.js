
function Navigate() {
    return (
        <div className="row">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="navbar-collapse" id="navbar-x">
                        <ul className="navbar-nav mx-auto text-center">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#full-page">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Projects">PROJECTS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#About">ABOUT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navigate;
