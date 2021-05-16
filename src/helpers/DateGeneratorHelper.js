export function generateCurrentDate() {
  const currentDate = new Date();

  return `${currentDate.getUTCDate()}/${
    currentDate.getUTCMonth() + 1
  }/${currentDate.getUTCFullYear()}`;
}
