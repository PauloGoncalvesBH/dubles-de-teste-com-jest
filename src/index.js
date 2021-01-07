const axios = require('axios')

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

module.exports = {
  exception,
  pessoa,
  getUserByEmail,
  getQuantidadeFromUserByEmail
}
