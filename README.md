# Dublês de teste com [Jest](https://www.npmjs.com/package/jest)

## Sobre

Esse projeto é para servir de material pessoal de consulta de como implementar dublês de testes utilizando Jest.

> **Observação:** As asserções não seguem as boas práticas de cada dublê pois foi preciso validar se as alterações de comportamento estão funcionando.

Os testes foram implementados em [`/tests`](/tests), consumindo os métodos de [`/src`](/src) e com mock manual em [`/__mocks__`](/__mocks__).

## Execução

Instale as dependências com o comando:
```
npm install
```

Execute os testes com:
```
npm test
```

## Dublês implementados

- Mock, em [./tests/mock.test.js](tests/mock.test.js)
- Spy, em [./tests/spy.test.js](tests/spy.test.js)

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