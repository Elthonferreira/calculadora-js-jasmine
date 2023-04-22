describe("Suite de testes de adição", function () {

	var Calculadora = {
	adicionar: function (num1, num2) {

		if (isNaN(num1) || isNaN(num2)) {
			return 0;
		}

		num1 = parseFloat(num1);
		num2 = parseFloat(num2);

		return num1 + num2;
		}
	}
	

	it('deve retornar 5 para 2 e 3', function () {
		expect(Calculadora.adicionar(2, 3)).toEqual(5);
	});

	it('deve retornar 6 para 9 e -3 no formato string', function () {
		expect(Calculadora.adicionar('9', '-3')).toEqual(6);
	});

	it('deve retornar 4.5 para 1.5 e 3', function () {
		expect(Calculadora.adicionar(1.5, 3)).toEqual(4.5);
	});

	it('deve retornar 0 quando o primeiro valor não for numérico', function () {
		expect(Calculadora.adicionar(undefined, 3)).toEqual(0);
	});

	it('deve retornar 0 quando o primeiro valor não for numérico', function () {
		expect(Calculadora.adicionar(3, undefined)).toEqual(0);
	});
});