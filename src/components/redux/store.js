import { createStore } from "redux";
import { detailsReducer } from "./reducer";

export const store = createStore(detailsReducer);
