import { DETAILS } from "./actionTypes";

const init = {
  detail: [],
};

export const detailsReducer = (store = init, { type, payload }) => {
  switch (type) {
    case DETAILS:
      return { ...store, detail: { ...store.detail, payload } };

    default:
      return store;
  }
};
