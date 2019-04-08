module.exports = (arr) => {
  const n = arr.length;
  for (let i = 1; i < n; ++i) {
      let curr = arr[i];
      //starting at previous
      let j = i - 1;
      //check if items are greater than current iteration
      while (j >= 0 && arr[j] > curr) {
          arr[j + 1] = arr[j];
          j = j - 1;
      }
      arr[j + 1] = curr;
  }
};
