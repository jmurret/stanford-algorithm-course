const inversions = require('./inversions');
const fs = require('fs');
const getAnswer = () => {
  return new Promise(res => {
    return fs.readFile('src/input.txt', 'utf8', function(err, data) {
      if (err) throw err;
      var array = data.toString().split("\n").map(x=>parseInt(x));
      return res(inversions(array));
    });
  });
};
describe('inversions', ()=> {
  it('99974 should return 3', () => {
    expect(inversions([ 9, 9, 9, 9, 3 ])).toEqual(4);
  });
  it('135246 should return 3', () => {
    expect(inversions([1,3,5,2,4,6])).toEqual(3);
  });
});
