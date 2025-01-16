import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getAsyncDataById } from "../data/getAsyncData";

function ItemDetailContainer() {
    const { id } = useParams(); // Obtener el id dinámico de la URL
    const [itemInfo, setItemInfo] = useState({
        price: 0,
        title: "",
        text: "",
        img: "",
    });
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getItemData() {
            try {
                const response = await getAsyncDataById(Number(id)); // Convertir `id` a número si es necesario
                setItemInfo(response);
            } catch (error) {
                setError(error.message);
            }
        }
        getItemData();
    }, [id]);

    if (error) {
        return <p>Error: {error}</p>;
    }

    return <ItemDetail {...itemInfo} />;
}

export default ItemDetailContainer;
