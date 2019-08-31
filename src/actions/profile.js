import api from '../api';

export const profileAdd = (formData) => async dispatch => {

     const config = {
      headers : { 'Content-Type': 'application/json' }
    };
     try {
       const res = await api.post('/api/profile/create', formData, config);
       console.log(res.data);
       dispatch({ type: 'CREATE_PROFILE', payload: res.data });
     } catch (error) {
      console.log(error);
     }
}

export const profileFetch = () => async dispatch => {

  try {
    const res = await api.post('/api/profile/list');
    console.log(res.data);
    dispatch({ type: 'GET_PROFILE', payload: res.data });
  } catch (error) {
   console.log(error);
  }
}