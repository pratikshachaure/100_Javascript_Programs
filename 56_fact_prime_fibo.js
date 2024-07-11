  // 061. Write a program to accept a number from user and print it’s factorial, check if it prime or not , and print it’s fibbonacci series using different functions in 

  const prompt = require('prompt-sync')();  

  let number=Number(prompt("Enter the number :- "));


  function checkFactorial(number)
  {


      let fact=1;

      for(let i=1;i<=number;i++)
  {
      fact=fact*i;
  }

  console.log("Factorial of given number is :- ",fact)
  }

  checkFactorial(number);


  function checkPrime(number)
  {

      let count=0;
      for(let i=1;i<=number;i++)
  {
      if(number%i==0)
  {

      count++;
  }
  }
  if(count==2)
  {
      console.log("Number is prime ",number)
  }
  else{
      console.log("Number is not prime ",number);
  }
  }

  checkPrime(number);

  function findFibonacci_series(number)
  {

      let firstdigit=0,secondigit=1,thirdigit=0;

      for(let i=0;i<=number;i++)
  {


      console.log(firstdigit);

      thirdigit=firstdigit+secondigit;
      firstdigit=secondigit;
      secondigit=thirdigit;
  }
  }

  findFibonacci_series(number)
