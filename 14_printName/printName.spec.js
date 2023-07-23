let printName = require('./printName');

describe('printName', function(){
  test('Show "My Name"', function(){
    expect(printName()).toEqual('My Name');
  });
});
