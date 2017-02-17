//This program will replace all Odd numbers with "fizz", all numbers displaying 5 or 0 with "buzz", and all numbers that are odd
// and display 5 will display "FizzBuzz"

for (var i = 1; i <= 100; i++)
{
  var f = i % 3 === 0, b = i % 5 === 0;
  console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
}
