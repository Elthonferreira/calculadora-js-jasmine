describe("Suite de testes de divisão", function () {

	var Calculadora = {
	dividir: function (num1, num2) {
			if (num2 === 0) return "Erro";

			if (isNaN(num1) || isNaN(num2)) return 0;

			num1 = Number(num1);
			num2 = Number(num2);

			return num1 / num2;
		}
	}
	

	it('deve retornar 2 para 6 e 3', function () {
		expect(Calculadora.dividir(6, 3)).toEqual(2);
	});

	it('deve retornar 2 para 6 e 3 no formato string', function () {
		expect(Calculadora.dividir('6', '-3')).toEqual(-2);
	});

	it('deve retornar 1.5 para 4.5 e 3', function () {
		expect(Calculadora.dividir(4.5, 3)).toEqual(1.5);
	});

	it('deve retornar "Erro" para divisão por 0', function () {
		expect(Calculadora.dividir(10, 0)).toEqual("Erro");
	}); 

	it('deve retornar 0 quando o primeiro valor não for numérico', function () {
		expect(Calculadora.dividir(undefined, 3)).toEqual(0);
	});

	it('deve retornar 0 quando o primeiro valor não for numérico', function () {
		expect(Calculadora.dividir(3, undefined)).toEqual(0);
	});
});