const INIT_STATE = {
  carts: [],
};

export const cartreducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
      const existingItemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        // If the item already exists in the cart, increase the quantity
        const updatedCart = state.carts.map((item, index) => {
          if (index === existingItemIndex) {
            return {
              ...item,
              qnty: item.qnty + 1,
            };
          }
          return item;
        });

        return { carts: updatedCart };
      } else {
        // If the item is not in the cart, add it to the array
        return { carts: [...state.carts, { ...action.payload, qnty: 1 }] };
      }

    case "RMV_CART":
      const updatedCart = state.carts.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        carts: updatedCart,
      };

    case "RMV_ONE":
      const existingIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex !== -1) {
        const updatedCart = state.carts.map((item, index) => {
          if (index === existingIndex) {
            // Decrease quantity by 1, ensuring it doesn't go below 1
            const newQuantity = Math.max(1, item.qnty - 1);

            return {
              ...item,
              qnty: newQuantity,
            };
          }
          return item;
        });

        return { carts: updatedCart };
      }

      return state;

    default:
      return state;
  }
};
