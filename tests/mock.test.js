const src = require('../src')
const mockedAxios = require('axios')

describe('mock', () => {
  afterEach(() => jest.restoreAllMocks())

  /*
  Mockando um módulo
  Manual Mocks - https://jestjs.io/docs/en/manual-mocks
  */
  it('Should return user correctly when getUserByEmail is called', async () => {
    const user = await src.getUserByEmail('teste@qa.com')

    expect(mockedAxios.get).toHaveBeenCalledTimes(1)
    expect(mockedAxios.get).toHaveBeenCalledWith('https://serverest.dev/usuarios', {
      params: {
        email: 'teste@qa.com'
      }
    })
    expect(user.quantidade).toBe(5)
    expect(user.usuarios[0].email).toBe('teste@qa.com')
  })

  /*
  Mockando um método
  mockFn.mockImplementation(fn) - https://jestjs.io/docs/en/mock-function-api#mockfnmockimplementationfn
  */
  it('Should return quantidade correctly when getQuantidadeFromUserByEmail is called', async () => {
    const mock = jest.spyOn(src, 'getQuantidadeFromUserByEmail').mockImplementation(() => 99999)

    const quantidadeDeUsuarios = await src.getQuantidadeFromUserByEmail('teste@qa.com')

    expect(mock).toHaveBeenCalledTimes(1)
    expect(mock).toHaveBeenCalledWith('teste@qa.com')
    expect(quantidadeDeUsuarios).toBe(99999)
  })
})
