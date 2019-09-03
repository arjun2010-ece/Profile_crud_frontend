import api from '../api';

// profile create
export const profileAdd = (formData, history) => async dispatch => {
    console.log(formData);
     const config = {
        headers : { 'Content-Type': 'application/json' }
      }
     try {
       await api.post('/api/profile/create', formData, config);
       dispatch({ type: 'CREATE_PROFILE', payload: formData });
       history.push('/list');
     } catch (error) {
      console.log(error);
     }
}

// profile update
export const profileUpdate = (id,formData, history) => async dispatch => {

  const config = {
   headers : { 'Content-Type': 'application/json' }
 };
  try {
    await api.put(`/api/profile/${id}/update`, formData, config);
    dispatch({ type: 'CREATE_PROFILE', payload: formData });
    history.push('/list');
  } catch (error) {
   console.log(error);
  }
}


// profile get all list
export const profileFetch = () => async dispatch => {

  try {
    const res = await api.get('/api/profile/list');
    dispatch({ type: 'GET_PROFILE', payload: res.data });
  } catch (error) {
   console.log(error);
  }
}

// profile get single list item corresponding to id
export const profileFetchDetail = (id) => async dispatch => {
  try {
    const res = await api.get(`/api/profile/${id}`);
    dispatch({ type: 'GET_PROFILE_SINGLE', payload: res.data });
    // dispatch({ type: 'CLEAR_PROFILE' });
  } catch (error) {
   console.log(error);
  }
  
}

// profile delete
export const profileDelete = (id) => async dispatch => {

  try {
    const res = await api.delete(`/api/profile/${id}/delete`);
    dispatch({ type: 'DELETE_PROFILE', payload: res.data });
    dispatch(profileFetch());
  } catch (error) {
   console.log(error);
  }
}

// // profile delete
// export const profileClear = () => dispatch => {
//   dispatch({ type: 'CLEAR_PROFILE' });
// }