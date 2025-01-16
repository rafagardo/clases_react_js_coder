import PropTypes from 'prop-types';

function FlexContainer(props) {
    const styleFlex = {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        gap: "15px",
    };

    return <div style={styleFlex}>{props.children}</div>;
}

// Validación de props
FlexContainer.propTypes = {
    children: PropTypes.node,
};

export default FlexContainer;