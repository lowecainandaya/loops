<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Loops</title>
</head>
<body>
  <h1 class="main">
  Loops 
  </h1>
  <p> used to create loops using callbacks, a simple tool but would have a great help for building projects projects</p>
  
  
  ### NPM 
  ```bash
  $ npm i @fntools/loops
  ```
  
  ### Yarn
  ```bash
  $ yarn add @fntools/loops
  ```
  
  ### Ussage 
  ```javascript 
  import {loops,every,until} from "@fntools/loops";
  loop(call:Function,count:number)
  // loops will call call() in count times
  // Example 
  loop(() => console.log('a'),5)
  // a
  // a 
  // a 
  // a 
  // a
  
  every(array[],call:Function) 
  // will loop through an array // like forEach
  
  // Example 
  const arr = [1,2,3,4,5];
  every(arr,(numbers) => {
    console.log(numbers + 5)
  })
  
  // all array properties are added 5 in them 
  // 6 
  // 7 
  // 8 
  // 9
  // 10
  
    until(condition:boolean,call:Function)
    // function that will be executed over and over until condition is no longer true
    
    // Example 
    var i = 0;
  until(i < 10,() => {i++
    console.log('log')
  }) 
  // log 
  // log 
  // log 
  // log 
  // log 
  // log 
  // log 
  // log 
  // log 
  // log 
  ```
  
</body>
</html>