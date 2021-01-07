const src = require('../src')

describe('Spy', () => {
  /*
  Visualizando comportamento interno de um método
  jest.spyOn(object, methodName) - https://jestjs.io/docs/en/jest-object#jestspyonobject-methodname
  */
  it('Should exit with message when exception is called', () => {
    const consoleSpy = jest.spyOn(console, 'error')
    const exitMock = jest.spyOn(process, 'exit').mockImplementation()

    src.exception()

    expect(consoleSpy).toHaveBeenCalledTimes(1)
    expect(consoleSpy).toHaveBeenCalledWith('Testes unitários em JS\t\nOcorreu um problema desconhecido.\n')
    expect(exitMock).toHaveBeenCalledWith(1)
  })

  /*
  Visualizando comportamento interno de um método com tipo de acesso
  jest.spyOn(object, methodName, accessType?) - https://jestjs.io/docs/en/jest-object#jestspyonobject-methodname-accesstype
  */
  it('Should return "brasileiro" when nacionalidade is called', () => {
    const spy = jest.spyOn(src.pessoa, 'nacionalidade', 'get')

    const nacionalidade = src.pessoa.nacionalidade

    expect(spy).toHaveBeenCalled()
    expect(nacionalidade).toBe('brasileiro')
  })
})
