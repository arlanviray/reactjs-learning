export const replaceArrayValue = (arr, oldValue, newValue) => {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === oldValue) {
      arr[i] = newValue;
    }
  }

  return arr;
};
