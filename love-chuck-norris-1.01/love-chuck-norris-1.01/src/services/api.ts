import axios from 'axios';

const requestHelperLocal = axios.create({
    baseURL: 'http://localhost:8000/api/'
});

export default {
    
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