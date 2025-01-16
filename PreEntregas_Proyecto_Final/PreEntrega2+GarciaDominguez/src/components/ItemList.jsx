import Item from './Item';
import FlexContainer from './FlexContainer';
import PropTypes from 'prop-types';

// Componente de Presentacion -> UI
function ItemList(props) {
    return (
        <>
            <h2>{props.greeting}</h2>
            <FlexContainer>
                {props.products.map((item) => {
                    return (
                        <Item
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            price={item.precio}
                            text={item.category}
                            img={item.img}
                        />
                    )
                })}
            </FlexContainer>
        </>
    );
}

// Validación de props
ItemList.propTypes = {
    greeting: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            precio: PropTypes.number.isRequired,
            category: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
        })
    ).isRequired,
};


export default ItemList;