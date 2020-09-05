// the data layer logic

export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  console.log("action", action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //lOGIC TO ADD ITEM TO BASKET
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      //lOGIC TO REMOVE ITEM FROM BASKET
      return { state };
    default:
      return state;
  }
};

export default reducer;
