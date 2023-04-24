describe("Suite de testes de divisão", function () {

	var Calculadora = {
	multiplicar: function (num1, num2) {
			if (isNaN(num1) || isNaN(num2)) return 0;

			num1 = Number(num1);
			num2 = Number(num2);

			return num1 * num2;
		}
	}
	

	it('deve retornar 6 para 2 e 3', function () {
		expect(Calculadora.multiplicar(2, 3)).toEqual(6);
	});

	it('deve retornar 6 para 2 e 3 no formato string', function () {
		expect(Calculadora.multiplicar('2', '-3')).toEqual(-6);
	});

	it('deve retornar 4.5 para 1.5 e 3', function () {
		expect(Calculadora.multiplicar(1.5, 3)).toEqual(4.5);
	});

	it('deve retornar 0 quando o primeiro valor não for numérico', function () {
		expect(Calculadora.multiplicar(undefined, 3)).toEqual(0);
	});

	it('deve retornar 0 quando o primeiro valor não for numérico', function () {
		expect(Calculadora.multiplicar(3, undefined)).toEqual(0);
	});
});