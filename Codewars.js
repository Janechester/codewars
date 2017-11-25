Codewars.js
test

Descending Order (7 kyu)
Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

My answer:
function descendingOrder (n); {
	return parseInt(n).split('').sort().reverse(),join(''))
}


Definition and Usage. The parseInt() function parses a string and returns an integer. The radix parameter is used to specify which numeral system to be used, for example, a radix of 16 (hexadecimal) indicates that the number in the string should be parsed from a hexadecimal number to a decimal number.
