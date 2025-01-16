import './Button.css';
import PropTypes from 'prop-types';

const Button = ({ text }) => {
    return (
        <button className="custom-button">
            {text}
        </button>
    );
};

// Validación de props
Button.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Button;
