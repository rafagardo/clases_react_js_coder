import PropTypes from "prop-types";
import getAsyncData from "../data/getAsyncData";
import ItemList from "./ItemList";
import { useState } from "react";
import { useEffect } from "react";

function ItemListContainer(props) {
    const [mensClothing, setMensClothing] = useState([]);

    useEffect(() => {
        const respuestaPromise = getAsyncData();
        console.log(respuestaPromise);
        respuestaPromise
            .then((data) => {setMensClothing(data)})
            .catch((error) => {console.log("Error en la promesa", error)});
    }, []);



    return (
        <div style={ {marginTop: "70px"} }>
            <ItemList greeting={props.greeting} products={mensClothing} />
        </div>
    );
}

ItemListContainer.propTypes = {
    greeting: PropTypes.string.isRequired,
};

export default ItemListContainer;