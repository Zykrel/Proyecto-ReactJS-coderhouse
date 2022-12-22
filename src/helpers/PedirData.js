import productos from "../data/data.json"

export const pedirDatos = () =>{

    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            resolve(productos)
        }, 2000)
    })

}