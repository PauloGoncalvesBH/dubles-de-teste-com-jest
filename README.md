# Dublês de teste com [Jest](https://www.npmjs.com/package/jest) [![Testes unitários](https://github.com/PauloGoncalvesBH/dubles-de-teste-com-jest/workflows/Testes%20unit%C3%A1rios/badge.svg)](https://github.com/PauloGoncalvesBH/dubles-de-teste-com-jest/actions)

## Sobre

Esse projeto é para servir de material pessoal de consulta de como implementar dublês de testes utilizando Jest.

> **Observação:** As asserções não seguem as boas práticas de cada dublê pois foi preciso validar se as alterações de comportamento estão funcionando.

Os testes foram implementados em [`/tests`](/tests), consumindo os métodos de [`/src`](/src) e com mock manual em [`/__mocks__`](/__mocks__).

## Dublês implementados

- Mock, em [./tests/mock.test.js](tests/mock.test.js)
  - [`Manual Mock`](https://jestjs.io/docs/en/manual-mocks) - Mockando um módulo manualmente
  - [`mockResolvedValue()`](https://jestjs.io/docs/en/mock-functions#mocking-modules) - Resolvendo uma Promise e mockando um módulo
  - [`mockRejectedValue()`](https://jestjs.io/docs/en/mock-function-api#mockfnmockrejectedvaluevalue) - Rejeitando uma Promise e mockando um módulo
  - [`mockFn.mockImplementation(fn)`](https://jestjs.io/docs/en/mock-function-api#mockfnmockimplementationfn) - Mockando um método
  - [`mockFn.mockImplementationOnce(fn)`](https://jestjs.io/docs/en/mock-function-api#mockfnmockimplementationoncefn) - Mockando um método na primeira 
e segunda chamada
- Spy, em [./tests/spy.test.js](tests/spy.test.js)
  - [`jest.spyOn(object, methodName)`](https://jestjs.io/docs/en/jest-object#jestspyonobject-methodname) - Visualizando comportamento interno de um método
  - [`jest.spyOn(object, methodName, accessType?)`](https://jestjs.io/docs/en/jest-object#jestspyonobject-methodname-accesstype) - Visualizando comportamento interno de um método com tipo de acesso

## Execução

Instale as dependências com o comando:
```
npm install
```

Execute os testes com:
```
npm test
```

## Materiais de apoio

### Documentação do Jest
- [Jest Object](https://jestjs.io/docs/en/jest-object)
- [Expect](https://jestjs.io/docs/en/expect)
- [Manual Mocks](https://jestjs.io/docs/en/manual-mocks)
- [Mock Functions](https://jestjs.io/docs/en/mock-function-api)

## Outros textos

- [Test Doubles (Mocks, Stubs, Fakes, Spies e Dummies) - PT-BR](https://medium.com/rd-shipit/test-doubles-mocks-stubs-fakes-spies-e-dummies-a5cdafcd0daf)
- [Test Doubles - Fakes, Mocks and Stubs - EN](https://blog.pragmatists.com/test-doubles-fakes-mocks-and-stubs-1a7491dfa3da)
- [Vamos falar de dublês de teste (Test Double) para testes unitários](https://dev.to/henriquepalote/vamos-falar-de-dubles-de-teste-test-double-para-testes-unitarios-2725)