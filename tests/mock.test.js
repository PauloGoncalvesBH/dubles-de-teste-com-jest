const src = require('../src')
const axios = require('axios')

describe('Mock', () => {
  beforeEach(() => jest.clearAllMocks())

  /*
  Mockando um módulo manualmente
  Manual Mocks - https://jestjs.io/docs/en/manual-mocks
  */
  it('Manual Mock - Mockando um módulo manualmente', async () => {
    const user = await src.getUserByEmail('teste@qa.com')

    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith('https://serverest.dev/usuarios', {
      params: {
        email: 'teste@qa.com'
      }
    })
    expect(user.quantidade).toBe(5)
    expect(user.usuarios[0].email).toBe('teste@qa.com')
  })

  /*
  Mockando um módulo com mockResolvedValue()
  Mocking Modules - https://jestjs.io/docs/en/mock-functions#mocking-modules
  */
  it('mockResolvedValue() - Mockando um módulo com mockResolvedValue()', async () => {
    axios.get.mockResolvedValueOnce({
      data: {
        quantidade: 102030,
        usuarios: [
          {
            nome: 'Fulano da Silva',
            email: 'fulano.teste@qa.com'
          }
        ]
      }
    })

    const user = await src.getUserByEmail('fulano.teste@qa.com')

    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith('https://serverest.dev/usuarios', {
      params: {
        email: 'fulano.teste@qa.com'
      }
    })
    expect(user.quantidade).toBe(102030)
    expect(user.usuarios[0].email).toBe('fulano.teste@qa.com')
  })

  /*
  Mockando um método
  mockFn.mockImplementation(fn) - https://jestjs.io/docs/en/mock-function-api#mockfnmockimplementationfn
  */
  it('mockFn.mockImplementation(fn) - Mockando um método', async () => {
    const mock = jest.spyOn(src, 'getQuantidadeFromUserByEmail').mockImplementationOnce(() => 99999)

    const quantidadeDeUsuarios = await src.getQuantidadeFromUserByEmail('teste@qa.com')

    expect(mock).toHaveBeenCalledTimes(1)
    expect(mock).toHaveBeenCalledWith('teste@qa.com')
    expect(quantidadeDeUsuarios).toBe(99999)
  })

  /*
  Mockando um método na primeira e segunda chamada
  mockFn.mockImplementationOnce(fn) - https://jestjs.io/docs/en/mock-function-api#mockfnmockimplementationoncefn
  */
  it('mockFn.mockImplementationOnce(fn) - Mockando um método na primeira e segunda chamada', async () => {
    const mock = jest
      .spyOn(src, 'getQuantidadeFromUserByEmail')
      .mockImplementationOnce(() => 654321)
      .mockImplementationOnce(() => 123456)

    const quantidadeDeUsuariosPrimeiraChamada = await src.getQuantidadeFromUserByEmail('teste@qa.com')
    const quantidadeDeUsuariosSegundaChamada = await src.getQuantidadeFromUserByEmail('teste@qa.com')
    const quantidadeDeUsuariosTerceiraChamada = await src.getQuantidadeFromUserByEmail('teste@qa.com')

    expect(mock).toHaveBeenCalledTimes(3)
    expect(quantidadeDeUsuariosPrimeiraChamada).toBe(654321)
    expect(quantidadeDeUsuariosSegundaChamada).toBe(123456)
    expect(quantidadeDeUsuariosTerceiraChamada).toBe(5)
  })
})
