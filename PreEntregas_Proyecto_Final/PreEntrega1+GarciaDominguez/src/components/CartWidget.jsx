import { FaShoppingCart } from 'react-icons/fa'; // Importar un icono de carrito desde react-icons
import 'bootstrap/dist/css/bootstrap.min.css';

const CartWidget = () => {
    return (
        <div className="position-relative">
            <FaShoppingCart size={24} className="text-white" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                3 {/* Número hardcodeado */}
            </span>
        </div>
    );
};

export default CartWidget;
