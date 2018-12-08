
function sum(a, b) {
    return a + b;
}
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});


test('the data is peanut butter', () => {
  expect.assertions(1); // expect should call 1 times
  expect('peanut butter').toBe('peanut butter');
});


class ConfigError extends Error{}

const compileAndroidCode = () => {
	throw new ConfigError('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
	expect(compileAndroidCode).toThrow();
	expect(compileAndroidCode).toThrow(ConfigError);
	expect(compileAndroidCode).toThrow('you are using the wrong JDK');
	expect(compileAndroidCode).toThrow(/JDK/);
});


//callback
const fetchDataWithCallBack = (cb) => {
	setTimeout(() => {
		cb('get data');
	}, 200)
}

test('the data with callback', (done) => { //NO need add async, done
	expect.assertions(1);
	fetchDataWithCallBack(data => {
		expect(data).toBe('get data');
		done()
	});
});

//promise
const fetchDataWithPromise = () => {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('get data');
		}, 200)
	})
	return promise
}

test('the data with promise', () => { //NO async, done
	expect.assertions(1);
	return fetchDataWithPromise().then(data => { //use return
		expect(data).toBe('get data');
	});
});


test('test with .resolves.toBe', () => {
  expect.assertions(1);
  return expect(fetchDataWithPromise()).resolves.toBe('get data');
});


//Async/Await
test('the data with async', async () => { //async, no done
  expect.assertions(1);
  const data = await fetchDataWithPromise(); //await
  expect(data).toBe('get data');
});

