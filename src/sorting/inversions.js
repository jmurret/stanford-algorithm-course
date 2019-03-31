const sortAndCountInv = (arr, temp = [], left = 0, right = arr.length - 1) =>
{
    let mid, inversionCount = 0;
    if (right > left) {
        mid = Math.floor((right + left) / 2);

        inversionCount = sortAndCountInv(arr, temp, left, mid);
        inversionCount += sortAndCountInv(arr, temp, mid + 1, right);
        inversionCount += mergeAndCountInv(arr, temp, left, mid + 1, right);
    }
    return inversionCount;
}
const mergeAndCountInv = (arr, temp, left, mid, right) => {
    let i, j, k;
    let inversionCount = 0;

    i = left;
    j = mid;
    k = left;
    while ((i <= mid - 1) && (j <= right)) {
        if (arr[i] <= arr[j]) {
            temp[k++] = arr[i++];
        }
        else {
            temp[k++] = arr[j++];
            inversionCount = inversionCount + (mid - i);
        }
    }

    while (i <= mid - 1)
        temp[k++] = arr[i++];

    while (j <= right)
        temp[k++] = arr[j++];

    for (i = left; i <= right; i++)
        arr[i] = temp[i];

    return inversionCount;
}

module.exports = sortAndCountInv;
