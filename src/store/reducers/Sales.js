import { FETCH_SALES } from "../ActionTypes";

export function SalesReducer(state = {}, action) {
  const { type, data, isLoading = false } = action;

  switch (type) {
    case FETCH_SALES:
      return { data, isLoading };
    default:
      return state;
  }
}
