const bubbleSort = require('./bubbleSort');

describe('bubbleSort', ()=> {
  it('3, 5,1,2,6,4 should return 1,2,3,4,5,6', () => {
    const arr = [ 3,5,1,2,6,4 ];
    bubbleSort(arr);
    console.log(arr);
    expect(arr).toEqual([1,2,3,4,5,6]);
  });
});
