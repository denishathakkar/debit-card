import  actiontypes  from '../actions/actiontypes';



  const reducer = (state = {limit : 0}, action) => {
    console.log("reducer", state, action)
    switch(action.type) {
      
      case actiontypes.SET_LIMIT:
        return {
        ...state,
        limit: action.payload
        };
      
      default:
      return state;
    }
}

export default reducer;