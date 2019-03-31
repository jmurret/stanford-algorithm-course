const mergeSort = (arr, l = 0, r = arr.length - 1) => {
  if (r <= l) return;
  const m = Math.floor((l + r) / 2);
  mergeSort(arr,l, m);
  mergeSort(arr, m + 1, r);
  merge(arr, l, m , r);
};

const merge = (arr, l, m, r) => {
  let nLeft = m - l + 1;
  let nRight =  r - m;

  /* copy items into temp arrays */
  const tempL = [], tempR= [];
  for (let i = 0; i < nLeft; i++)
      tempL[i] = arr[l + i];
  for (let j = 0; j < nRight; j++)
      tempR[j] = arr[m + 1+ j];

  /* merge items back from temp arrays into original */
  let k = l, i = 0, j = 0;
  while (i < nLeft || j < nRight)
  {
      if (j === nRight & i < nLeft) {
          arr[k] = tempL[i];
          i++;
      } else if (i === nLeft & j < nRight) {
          arr[k] = tempR[j];
          j++;
      } else if (tempL[i] <= tempR[j]) {
          arr[k] = tempL[i];
          i++;
      } else {
          arr[k] = tempR[j];
          j++;
      }
      k++;
  }
}
module.exports = mergeSort;
