import { HIDE_LOADING, SHOW_LOADING } from "../ActionTypes";

const initialState = {
  isLoading: false,
  title: "",
  message: "",
};

function showLoading(loadingOptions) {
  return { type: SHOW_LOADING, loadingOptions };
}

function hideLoading() {
  return { type: HIDE_LOADING };
}

function loading(state = initialState, action) {
  const { type, loadingOptions } = action;

  switch (type) {
    case SHOW_LOADING:
      return {
        isLoading: true,
        title: loadingOptions.title,
        message: loadingOptions.message,
      };
    case HIDE_LOADING:
      return { isLoading: false };
    default:
      return state;
  }
}

export { hideLoading, loading, showLoading };
