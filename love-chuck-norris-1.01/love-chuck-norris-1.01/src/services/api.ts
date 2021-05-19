import axios from 'axios';
const requestHelper = axios.create({
    baseURL: 'https://api.chucknorris.io/jokes'
});
const requestHelperLocal = axios.create({
    baseURL: 'http://localhost:8000/api/'
});

export default {
    frase: {
        get: (categoriaSeleccionada = "") => {
            let ruta = "random";
            if (categoriaSeleccionada !== "") {//recibir frase random
                ruta += "?category=" + categoriaSeleccionada
            }
           return requestHelper({//recibir de la categoria que se busca
                url: ruta,
                method: 'get',
            })
        },
    },
    frases: {
        get: () => requestHelperLocal({
            url: 'frases',
            method: 'get',
        }),

        create: (data: any) => requestHelperLocal({
            url: 'frases',
            method: 'post',
            data
        }),
        delete: (url: any) => requestHelperLocal({
            url: 'frases/'+url,
            method: 'delete',
        })
    },
    categorias: {
        get: (categoria : string) => requestHelperLocal({
            url: 'platos/categoria/'+ categoria,
            method: 'get',
        })
    },
    platos: {
        get: () => requestHelperLocal({
            url: 'platos',
            method: 'get',
        })
    }

}