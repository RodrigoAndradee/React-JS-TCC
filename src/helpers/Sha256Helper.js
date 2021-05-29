import { sha256 } from "js-sha256";

export const encodeSha256 = (value) => {
  const firstEncrypt = sha256(value);
  return sha256(firstEncrypt);
};
