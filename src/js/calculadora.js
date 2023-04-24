var Calculadora = {

	ADICAO: '+',
	SUBTRACAO: '-',
	MULTIPLICACAO: '*',
	DIVISAO: '/'

	adicionar: function (num1, num2) {
		return Calculadora.calcular(num1, num2, Calculadora.ADICAO);
	},

	subtrair: function (num1, num2) {
		return Calculadora.calcular(num1, num2, Calculadora.SUBTRACAO);
	}, 

	dividir: function (num1, num2) {
		return Calculadora.calcular(num1, num2, Calculadora.DIVISAO);
	},

	multiplicar: function (num1, num2) {
		if (num2 == 0) return 'Erro';
		return Calculadora.calcular(num1, num2, Calculadora.MULTIPLICACAO);
	},

	calcular: function (num1, num2, operacao) {

		if (isNaN(num1) || isNaN(num2)) return 0;
		
		num1 = Number(num1);
		num2 = Number(num2);

		var resultado = 0;
		switch (operacao) {
			case Calculadora.ADICAO: 
				resultado = num1 + num2;
				break;
			case Calculadora.SUBTRACAO:
				resultado = num1 - num2;
				break;
			case Calculadora.MULTIPLICACAO:
				resultado = num1 * num2;
				break;
			case Calculadora.DIVISAO:
				resultado = num1 / num2;
				break;
			default:
				resultado = 0;
				break;
		}
		return resultado;
	}
}