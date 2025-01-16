import mensClothing from "./data.js";

export default function getAsyncData() {
    console.log("Solicitando datos...");

    const promiseData = new Promise((resolve, reject) => {
        const error = false;

        setTimeout(() => {
            if (error) reject({ message: "Error en la petición" });
            resolve(mensClothing);
        }, 2000);
    });
    return promiseData;
}

export function getAsyncDataById(id) {
    const promiseData = new Promise((resolve, reject) => {
        const error = false;

        setTimeout(() => {
            if (error) {
                reject({ message: "Error en la petición" });
            } else {
                const itemRequested = mensClothing.find((item) => item.id === id);
                if (!itemRequested) {
                    reject({ message: "No se encontró el item con el id proporcionado" });
                } else {
                    resolve(itemRequested);
                }
            }
        }, 2000);
    });
    return promiseData;
}



// getAsyncData()
//     .then((data) => { console.log(data) })
//     .catch((error) => { console.log(error) }); // handling errors