import api from '../api';

export const profileAdd = (formData) => async dispatch => {

     const config = {
      headers : { 'Content-Type': 'application/json' }
    };
     try {
       await api.post('/api/profile/create', formData, config);
       dispatch({ type: 'CREATE_PROFILE', payload: formData });
     } catch (error) {
      console.log(error);
     }
}

export const profileFetch = () => async dispatch => {

  try {
    const res = await api.get('/api/profile/list');
    // console.log(res.data);
    dispatch({ type: 'GET_PROFILE', payload: res.data });
  } catch (error) {
   console.log(error);
  }
}