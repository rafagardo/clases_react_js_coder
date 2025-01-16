import PropTypes from 'prop-types';

function ItemDetail(props) {
    const { price, title, text, img } = props;

    return (
        <div>
            <h2>{title}</h2>
            <img src={img} width="150" height="150" alt={title} />
            <p>{text}</p>
            <p>{price}</p>
        </div>
    )
}

// Validación de props
ItemDetail.propTypes = {
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
};

export default ItemDetail;