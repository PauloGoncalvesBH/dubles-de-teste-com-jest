
function promiseTest(resolver) {
  return new Promise((resolve, reject) => {
    if (resolver)
      resolve('Promise resolvida')
    reject('Deu erro')
  })
}

module.exports = promiseTest