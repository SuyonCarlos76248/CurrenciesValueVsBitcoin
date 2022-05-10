
let currenciesNames = ["Dolar Americano","Euro","Real Brasilero","Libra Esterlina","Franco Suizo","Dolar Canadiense","Peso Uruguayo","Peso Chileno","Yen Japones","Yuan Chino"] 

function createCurrency()
{
	// crea y retorna (10) objetos Currency . con valores aleatorios
	let currency = [];
	for (var i =0; i< currenciesNames.length;i++)
	{
		var newCurrency = new Object();
		newCurrency.name = currenciesNames[i];
		newCurrency.value = Math.floor(Math.random() * 500);
		currency.push(newCurrency);
	}
	return currency;
}
