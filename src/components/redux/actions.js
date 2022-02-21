import { DETAILS } from "./actionTypes";

export const getDetails = (payload) => {
  return {
    type: DETAILS,
    payload,
  };
};
