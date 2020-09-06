// the data layer logic

export const initialState = {
  basket: [
    {
      id: "0",
      title:
        "Racing Style Office Chair with Removable Headrest and High Back Cushion - Red",
      price: 99.99,
      rating: 4,
      image:
        "https://m.media-amazon.com/images/I/61JUe6eJUZL._AC_UL480_FMwebp_QL65_.jpg",
    },
  ],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      //lOGIC TO ADD ITEM TO BASKET
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      //lOGIC TO REMOVE ITEM FROM BASKET

      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in the basket`
        );
      }
      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default reducer;
