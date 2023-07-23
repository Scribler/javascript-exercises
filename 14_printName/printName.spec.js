let printName = require('./printName');
describe('printName', function(){
  test('Show "My Name"', function(){
    expect(printName('John', 'Dallas')).toEqual('John Dallas');
  });
});
