const api = {
  get: (url) =>{
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({api: 'api data'});
      }, 2000)
    })
    return promise
  },
  getSync: () => {
    return {api: 'api data aaa'}
  }
}

module.exports = api
