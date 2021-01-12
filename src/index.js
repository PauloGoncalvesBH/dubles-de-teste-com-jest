const axios = require('axios')

const promiseTest = require('./promiseTestModule')

// métodos utilizados em spy.test.js

function exception () {
  console.error('Testes unitários em JS\t\nOcorreu um problema desconhecido.\n')
  process.exit(1)
}

const pessoa = {
  get nacionalidade () {
    return 'brasileiro'
  }
}

// métodos utilizados em mock.test.js

const getUserByEmail = async (email) => {
  const { data } = await axios.get('https://serverest.dev/usuarios', {
    params: {
      email
    }
  })
  return data
}

const getQuantidadeFromUserByEmail = async (email) => {
  const { quantidade } = await getUserByEmail(email)
  return quantidade
}

const consumirPromise = resolver => {
  promiseTest(resolver)
    .then((e) => console.log(e))
    .catch((error) => console.error(error))
}

module.exports = {
  exception,
  pessoa,
  getUserByEmail,
  getQuantidadeFromUserByEmail,
  consumirPromise
}
