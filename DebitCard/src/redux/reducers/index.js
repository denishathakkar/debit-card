import  actiontypes  from '../actions/actiontypes';
import customData from '../../data.json'

  const reducer = (state = {limit : 0, data: customData.data}, action) => {
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