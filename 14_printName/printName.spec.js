let printName = require('./printName');
const input1 = 'John';
const input2 = 'Dallas';
describe('printName', function(){
  test('Show "My Name"', function(){
    expect(printName('John', 'Dallas')).toEqual('John Dallas');
  });
});
