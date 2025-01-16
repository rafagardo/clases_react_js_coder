import PropTypes from "prop-types";
import "./CardProduct.css";
import Button from "./Button";
import { Link } from "react-router-dom";

function Item(props) {
    const { price, title, text, img, id } = props;

    return (
        <div className="card">
            <img src={img} width="150" height="150" alt={title} />
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{text}</p>
                <div>
                    <p className="card-price">${price}</p>
                </div>
                <Link to={`/item/${id}`}>
                    <Button text="Ver detalle" />
                </Link>

            </div>
        </div>
    )
}

// Validación de props
Item.propTypes = {
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};

export default Item;