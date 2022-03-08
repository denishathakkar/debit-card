import actiontypes from './actiontypes';

export const getLimit = () => {
  return {
    type: actiontypes.GET_LIMIT,
  };
};

export const setLimit = data => {
  return {
    type: actiontypes.SET_LIMIT,
    payload: data,
  };
};
