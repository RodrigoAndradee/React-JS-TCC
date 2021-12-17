import { CONSTANTS_FILE } from "../ActionTypes";

export function ConstantsReducer(state = {}, action) {
  const { constantsFile, type } = action;

  switch (type) {
    case CONSTANTS_FILE:
      return constantsFile;
    default:
      return state;
  }
}
