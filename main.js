

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

  	var quarterRemainder = quarterCounter(valueinCoins);
  	var dimeRemainder = dimeCounter(quarterRemainder);	
  	var nickelRemainder = nickelCounter(dimeRemainder);
  	var pennyRemainder = pennyCounter(nickelRemainder);

  return coinPurse;
}

function quarterCounter (valueinCoins) {
	var remainder = valueinCoins % 25; 
	var centsInQuarters = valueinCoins - remainder;
	var numberOfQuarters = centsInQuarters / 25;
	coinPurse.quarters = numberOfQuarters;
	return remainder;
}

function dimeCounter (quarterRemainder) {
	var remainder = quarterRemainder % 10; 
	var centsInDimes = quarterRemainder - remainder;
	var numberOfDimes = centsInDimes / 10;
	coinPurse.dimes = numberOfDimes;
	return remainder;
}

function nickelCounter (dimeRemainder) {
	var remainder = dimeRemainder % 5; 
	var centsInNickels = dimeRemainder - remainder;
	var numberOfNickels = centsInNickels / 5;
	coinPurse.nickels = numberOfNickels;
	return remainder;
}

function pennyCounter (nickelRemainder) {
	var remainder = nickelRemainder % 1; 
	var centsInPennies = nickelRemainder - remainder;
	var numberOfPennies = centsInPennies / 1;
	coinPurse.pennies = numberOfPennies;
	return remainder;
}

var coins = coinCounter(2.93);
console.log(coins);

