function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

test('.mock.calls and .mock.results with jest.fn', () => {
  /*
   *.mock.call get the input parameters
   *.mock.calls[0][0]  //1st 1st parameters
   *.mock.results[0].value //1st mock function return
   */

  const mockCallback = jest.fn(x => 42 + x);//create a function as a callback function
  forEach([0, 1], mockCallback);

  // The mock function is called twice
  expect(mockCallback.mock.calls.length).toBe(2);

  console.log(mockCallback.mock.calls)
  //[[0], [1]] forEach input

  // The first argument of the first call to the function was 0
  expect(mockCallback.mock.calls[0][0]).toBe(0);

  // The first argument of the second call to the function was 1
  expect(mockCallback.mock.calls[1][0]).toBe(1);

  // The return value of the first call to the function was 42
  expect(mockCallback.mock.results[0].value).toBe(42);

  // The return value of the second call to the function was 43
  expect(mockCallback.mock.results[1].value).toBe(43);
})

test('.mock.instances', () => {

	const myMock = jest.fn();

	const a = new myMock();
	const b = {};
	const bound = myMock.bind(b);
	bound();

	console.log(myMock.mock.instances); //[a, b] can record a, b have called myMock func
})


