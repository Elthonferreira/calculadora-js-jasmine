var Calculadora = {
	adicionar: function (num1, num2) {
		if (isNaN(num1) || isNaN(num2)) return 0;

		num1 = Number(num1);
		num2 = Number(num2);

		return num1 + num2;
	},

	subtrair: function (num1, num2) {
		if (isNaN(num1) || isNaN(num2)) return 0;
		
		num1 = Number(num1);
		num2 = Number(num2);

		return num1 - num2;
	}, 

	dividir: function (num1, num2) {
		if (num2 === 0) return "Erro";

		if (isNaN(num1) || isNaN(num2)) return 0;
		
		num1 = Number(num1);
		num2 = Number(num2);

		return num1 / num2;
	},

	multiplicar: function (num1, num2) {
		if (isNaN(num1) || isNaN(num2)) return 0;
		
		num1 = Number(num1);
		num2 = Number(num2);

		return num1 * num2;
	}
}