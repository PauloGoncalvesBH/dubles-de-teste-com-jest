// mock de módulo utilizado em mock.test.js e método getUserByEmail

module.exports = {
  get: jest.fn((rota, { params }) => Promise.resolve({
    data: {
      quantidade: 5,
      usuarios: [
        {
          nome: 'Fulano',
          email: params.email
        }
      ]
    }
  }))
}
