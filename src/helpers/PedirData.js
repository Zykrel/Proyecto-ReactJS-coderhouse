import productos from "../data/data.json"

export const pedirDatos = () =>{

    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            resolve(productos)
        }, 2500)
    })

}

export const llamarPorId = (id) => {
    return new Promise ((resolve, reject) => {
        setTimeout( () => {
            const item = productos.find((llama) => llama.id === id)
            if(item){
                resolve(item)
            }else{
                reject({
                    error: "No se encontro el Producto"
                })
            }
        }, 2500)
    })
}