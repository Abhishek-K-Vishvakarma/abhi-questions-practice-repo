// check Single number of prime number

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i == 0)
      return false;
  }
  return num;
}
 let n = 6;
 if(isPrime(n)){
  console.log("This number is prime : "+ `${n}`);
 }else{
 console.log("This number is  not prime : " + `${ n }`);
 }


// Search Prime element in multiple arrays.
let number = [1,2,3,4,5,6,7,8,9,10,11, 12, 33, 31, 37, 19];
let arr = [];
function Prime(num){
  if(num <= 1){
    return false;
  }
  for(let i = 2; i < num; i++){
    if(num % i == 0)
      return false;
  }
  return num;
}
for(let i = 0;  i <= number.length; i++){
  if(Prime(number[i])){
    arr.push(number[i]);
  }
}

if(arr.length > 0){
  console.log("Prime : "+ `${arr}`);
}else{
  console.log("Not Prime : "+ `${arr}`);
}

// Check Pailendrome Number or Not:

let num = 111222111;
let temp = num;
let sum = 0;
let rem;

for(;temp > 0;){
  rem = temp % 10;
  sum = sum * 10 + rem;
  temp = parseInt(temp / 10);
}
if(num == sum){
  console.log(`${num}`+" : Palindrome!");
}else{
  console.log(`${num}`+" : Not Palindrome!");
}

// Check Number Armstrong or Not:

function NUM(numeral){
  let dot = numeral.toString();
  let com = dot.length;
  let sum = 0;

  for(let i = 0; i < dot.length; i++){
    let r = parseInt(dot[i]);
    sum = sum + Math.pow(r , com);
  }
  return sum == numeral
}
let num_n = 153;
if(NUM(num_n)){
  console.log("This number is Armstrong!");
}else{
  console.log("This number in not Armstrong!");
}



