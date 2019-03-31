const mergeSort = (arr, l = 0, r = arr.length - 1) => {
  if (r <= l) return;
  const m = Math.floor((l + r) / 2);
  mergeSort(arr,l, m);
  mergeSort(arr, m + 1, r);
  merge(arr, l, m , r);
};

const merge = (arr, l, m, r) => {
  let n1 = m - l + 1;
  let n2 =  r - m;

  const tempL = [], tempR= [];
  for (let i = 0; i < n1; i++)
      tempL[i] = arr[l + i];
  for (let j = 0; j < n2; j++)
      tempR[j] = arr[m + 1+ j];

  let k = l, i = 0, j = 0;
  while (i < n1 && j < n2)
  {
      if (tempL[i] <= tempR[j])
      {
          arr[k] = tempL[i];
          i++;
      }
      else
      {
          arr[k] = tempR[j];
          j++;
      }
      k++;
  }

  while (i < n1)
  {
      arr[k] = tempL[i];
      i++;
      k++;
  }

  while (j < n2)
  {
      arr[k] = tempR[j];
      j++;
      k++;
  }
}
module.exports = mergeSort;
