import { calculaNovoSaldo } from './index';

describe('Quando eu realizo uma transação', () => {
  it('Que é um depósito, o saldo deve aumentar', () => {
    const transacao = {
      transacao: 'Depósito',
      valor: 50,
    };

    const novoSaldo = calculaNovoSaldo(transacao, 100);

    expect(novoSaldo).toBe(150);
  });

  test('Que é uma Transferência, o saldo deve diminuir', () => {
    const transacao = {
      transacao: 'Tranferência',
      valor: 50,
    };

    const novoSaldo = calculaNovoSaldo(transacao, 100);

    expect(novoSaldo).toBe(50);
  });
});

it('Deve retornar o valor do saldo atualizado com o rendimento', () => {
  const calculaRendimento = jest.fn((saldo) => saldo + saldo * 0.005);

  const saldo = 100;

  const novoSaldo = calculaRendimento(saldo);

  expect(novoSaldo).toBe(100.5);
  expect(calculaRendimento).toBeCalled();
  expect(calculaRendimento).toHaveBeenCalledWith(saldo);
});

test("Testando deposito + saque ", ()=>{
  const trasacao1 = {
    trasacao:'Depósito',
    valor:50,
  };
  const trasacao2 = {
    trasacao:'Transferência',
    valor:40,
  };
  const novoSaldo = calculaNovoSaldo(transacao1, 0);
  const novoSaldo2 = calculaNovoSaldo(transacao2, novoSaldo);
  expect(novoSaldo2).toBe(10);

});

