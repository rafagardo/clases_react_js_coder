import PropTypes from 'prop-types';

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="container mt-5">
            <h2 className="text-center">{greeting}</h2>
        </div>
    );
};

ItemListContainer.propTypes = {
    greeting: PropTypes.string.isRequired,
};

export default ItemListContainer;
