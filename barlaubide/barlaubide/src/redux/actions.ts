import { Action, createAction } from 'redux-actions';
import api from '../services/api';
export const handleApiError = createAction('handleApiError');
// A partir de aqui las de ahora
export const setSection = createAction('setSection');
export const getSection = createAction('getSection');
export const setPlatosSuccess = createAction('setPlatosSuccess');
export const getPlatosSuccess = createAction('getPlatosSuccess');

//de la api las categorías
export const getPlatos = (categoria = '') => async (dispatch: any) => {
  
    try {
        if(categoria ==''){
            const response = await api.platos.get();
            dispatch(getPlatosSuccess(response.data))
        }
        else{
            const response = await api.categorias.get(categoria);
            dispatch(getPlatosSuccess(response.data))
        }
        
    } catch (e) {
        dispatch(handleApiError(e))
    }
}