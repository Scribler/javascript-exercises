let printName = require('./printName');
describe('printName', () => {
  test('Show "My Name"', () => {
    expect(printName('John', 'Dallas')).toEqual('John Dallas');
  });
});
