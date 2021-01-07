// mock de módulo utilizado em mock.test.js e método getUserByEmail

module.exports = {
  get: jest.fn(() => Promise.resolve({
    data: {
      quantidade: 5,
      usuarios: [
        {
          nome: 'Fulano',
          email: 'teste@qa.com'
        }
      ]
    }
  }))
}
