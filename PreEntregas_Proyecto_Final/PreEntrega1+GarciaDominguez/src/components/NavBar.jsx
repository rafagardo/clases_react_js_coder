import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="/">
                    Logo de JW
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/category/ropa">Ropa</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/category/calzado">Calzado</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/category/accesorios">Accesorios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/category/ofertas">Ofertas</a>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
