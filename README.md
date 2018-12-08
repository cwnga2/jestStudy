# jestStudy

study of https://jestjs.io/docs/en/getting-started.html

# ./__tests__/
## basic_usage.js
basic usage
- `expect`
- `expect.assertions(X)` : sholud call X times expect().
- `expect({result}).toThrow()`
- `expect({result}).toThrow(Error)`
- `expect({result}).toThrow('error message')`
- `expect({result}).toThrow(/error message match/)`
- `done()`: test when async

## mock_createMockFunction.js
use jest.fn create a function:
- `.mock.calls`: get call times and parameters
- `.mock.calls[0][0]`  //1st 1st parameters
- `.mock.results[0].value` //1st mock function return

## mock_createMockFunction_mockReturnValueOnce_mockReturnValue.js
intro mock return value with: 
- `.mockReturnValue`
- `.mockReturnValueOnce` 

## mock_module_object_mockReturnValue_mockResolvedValue.js
intro mock return value in sync/async
- `.mockImplementation`
- `.mockImplementationOnce`

## mock_function_implementation.js
intro how to implement mock (not only return value)
- `.mockImplementation`
- `.mockImplementationOnce`
