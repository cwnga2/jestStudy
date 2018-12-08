
test('create mock function and implement', async (done) => {

  const myMockFn = jest.fn(cb => cb(null, true));
  //same as:
  //myMockFn = jest.fn()
  //myMockFn.mockImplementation(cb => cb(null, true))

  /* because it is callback, can no use mockReturnValue like this:
   *
   *  const myMock = jest.fn();
   *  myMock
   *    .mockReturnValue('x')
   **/
  myMockFn((err, val) => console.log(val));
  // > true

  myMockFn.mockImplementation(cb => cb(null, 'hihi')); //use
  myMockFn((err, val) => console.log(val));

  myMockFn.mockImplementation(cb => cb(null, 'hihi2')); //use
  myMockFn((err, val) => console.log(val));

  // > true
  done()
})


test('mockImplementation with jest.mock({module return a function})', () => {
	// test.js
	jest.mock('../src/fooFunction'); // this happens automatically with automocking
	const foo = require('../src/fooFunction');

	// foo is a mock function
	foo.mockImplementation(() => 42);
	console.log(foo());
	// > 42

})

test('create functino and .mockImplementationOnce', () => {
	const myMockFn = jest
		.fn()
		.mockImplementationOnce(cb => cb(null, true))
		.mockImplementationOnce(cb => cb(null, false));

	myMockFn((err, val) => console.log(val));
	// > true

	myMockFn((err, val) => console.log(val));
	// > false

	myMockFn((err, val) => console.log(val));
	//no call this implementation, or implement in .fn(() => 'default') for default

})
