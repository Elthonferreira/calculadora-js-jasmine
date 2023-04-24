describe("Suite de testes de subtração", function () {

	var Calculadora = {
	subtrair: function (num1, num2) {
			if (isNaN(num1) || isNaN(num2)) return 0;

			num1 = Number(num1);
			num2 = Number(num2);

			return num1 - num2;
		}
	}
	

	it('deve retornar 5 para 8 e 3', function () {
		expect(Calculadora.subtrair(8, 3)).toEqual(5);
	});

	it('deve retornar 5 para 8 e -3 no formato string', function () {
		expect(Calculadora.subtrair('8', '-3')).toEqual(11);
	});

	it('deve retornar 4.5 para 5.5 e 1', function () {
		expect(Calculadora.subtrair(5.5, 1)).toEqual(4.5);
	});

	it('deve retornar 0 quando o primeiro valor não for numérico', function () {
		expect(Calculadora.subtrair(undefined, 3)).toEqual(0);
	});

	it('deve retornar 0 quando o primeiro valor não for numérico', function () {
		expect(Calculadora.subtrair(3, undefined)).toEqual(0);
	});
});