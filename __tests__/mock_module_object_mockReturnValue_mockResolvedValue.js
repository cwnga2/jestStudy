
test('.mockReturnValue(sync), .mockResolvedValue(async), - Mock module(1 functon export)', async (done) => {

  const api = require('../src/fooObject')
  //console.log(api) //return a mock structure, no matter when call jest.mock
  jest.mock('../src/fooObject');

  const resp = {data: [{name: 'Bob'}]};

  //mock api.get
  api.get.mockResolvedValue(resp);
  const result = await api.get()
  console.log(result)

  console.log(api.getSync()) //return undefined, because jest has mock all property of api

  //mock api.getSync
  api.getSync.mockReturnValue({'hihi': 'hihi'});
  console.log(api.getSync())
  done()

})


