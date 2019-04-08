const mergeSort = (arr, l = 0, r = arr.length - 1) => {
  if(r===l) return;
  const mid = Math.floor((l + r)/2);
  const left = mergeSort(arr, l, mid);
  const right = mergeSort(arr, mid + 1, r);
  console.log({arr})
  return merge(arr, l, mid, r);
};

const merge = (arr, l, m, r) => {
  const lTemp =[], rTemp = [];
  for (let i = 0; i < m - l + 1; i++) {
    lTemp.push(arr[l + i]);
  }
  for (let i = 0; i < r - m; i++) {
    rTemp.push(arr[m + 1 + i]);
  }
  let i = l;
  while(lTemp.length || rTemp.length) {
    if (!lTemp.length && !rTemp.length) {
      return;
    } else if (!lTemp.length && rTemp.length) {
      for (let a = 0; a < rTemp.length; a++) {
        arr[i] = rTemp.shift();
        i++;
      }
    } else if (lTemp.length && !rTemp.length) {
      for (let a = 0; a < lTemp.length; a++) {
        arr[i] = lTemp.shift();
        i++;
      }
    } else if (lTemp[0] < rTemp[0]) {
      arr[i] = lTemp.shift();
      i++;
    } else {
      arr[i] = rTemp.shift();
      i++
    }
  }
}
module.exports = mergeSort;
