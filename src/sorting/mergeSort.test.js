const mergeSort = require('./mergeSort');

describe('mergeSort', ()=> {
  it('3, 5,1,2,6,4 should return 1,2,3,4,5,6', () => {
    const arr = [ 3, 5,1,2,6,4 ];
    mergeSort(arr);
    expect(arr).toEqual([1,2,3,4,5,6]);
  });
});
