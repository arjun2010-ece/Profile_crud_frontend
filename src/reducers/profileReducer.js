
const initialState = {
   profiles:[],
   profile:{}
};

export default (state = initialState, action) => {
 switch (action.type) {
  case 'CREATE_PROFILE':
     return {...state, profiles: [...state.profiles, action.payload]};

  case 'GET_PROFILE':
       return {...state, profiles: action.payload};

  case 'GET_PROFILE_SINGLE':
       return {...state, profile: action.payload};

  case 'DELETE_PROFILE':
       return {...state, profiles: state.profiles.filter( item => item._id !== action.payload) };
  default:
     return state;
 }

};