

  // Input: 0.67
  // Output:
  // {
  //   quarters: 2,
  //   dimes: 1,
  //   nickels: 1,
  //   pennies: 2
  // }
  	var coinPurse = {
  	quarters: 0,
  	dimes: 0,
  	nickels: 0,
  	pennies: 0
  };


function coinCounter (coinValue) {
  // Initialize a JavaScript object to hold the coins


  	var valueinCoins = coinValue * 100;

    var quarterAmount = 25;
    var dimeAmount = 10;
    var nickelAmount = 5;
    var pennyAmount = 1;

  	var quarterRemainder = newCoinCounter(valueinCoins, quarterAmount, 'quarters');
  	var dimeRemainder = newCoinCounter(quarterRemainder, dimeAmount, 'dimes');	
  	var nickelRemainder = newCoinCounter(dimeRemainder, nickelAmount, 'nickels');
  	var pennyRemainder = newCoinCounter(nickelRemainder, pennyAmount, 'pennies');

  return coinPurse;
}

function newCoinCounter (valueinCoins, amount, objectValue) {
	var remainder = valueinCoins % amount; 
	var centsInCoins = valueinCoins - remainder;
	var numberOfCoins = centsInCoins / amount;
	coinPurse[objectValue] = numberOfCoins;
	return remainder;
}

var coins = coinCounter(2.93);
console.log(coins);

