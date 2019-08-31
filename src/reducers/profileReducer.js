
const initialState = [];

export default (state = initialState, action) => {

 switch (action.type) {
  case 'CREATE_PROFILE':
     const msg = action.payload.trim();
     const isSubmitSuccessfully = (msg === "Profile Created successfully");
     return [...state, msg,isSubmitSuccessfully ];

  case 'GET_PROFILE':
       return [...state, action.payload];
 
  default:
     return state;
 }
}