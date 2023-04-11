//question no 1:
// let num1=prompt("Enter number 1");
// let num2=prompt("Enter number 2");

// num1 = parseInt(num1);
// num2 = parseInt(num2);

// if(num1 > num2){
//     console.log("num 1 is largest number")
// }
// else{
//     console.log("num 2 is largest number")

// }

//question 2

numberCheck=prompt("Enter a number");
if(numberCheck > 0){
    alert("The number is positive");
}
  else{
    alert("The number is negative")
  }

  //question 3

//   let Num1=prompt("Enter number 1");
//   let Num2=prompt("Enter number 2");
//   let Num3=prompt("Enter number 3");
//   let Num4=prompt("Enter number 4");
//   let Num5=prompt("Enter number 5");


//   if(Num1 > Num2 && Num1 > Num3 && Num1 > Num4 && Num1 > Num5){
//     console.log(Num1 +" is largest number")
//   } else if(Num2 > Num1 && Num2 > Num3 && Num2 > Num4 && Num2 > Num5){
//     console.log(Num2 +" is largest number")
//   }
//     else if(Num3 > Num1 && Num3 > Num2 && Num2 > Num4 && Num2 > Num5){
//         console.log(Num3 +" is largest number");
    
//   } else if(Num4 > Num1 && Num4 > Num2 && Num4 > Num3 && Num4 > Num5){
//     console.log(Num4 +" is largest number");
// }
// else{
//     console.log(Num5 +" is largest number");

// }

for(var i=0; i<=15; i++ ){
    if(i % 2==0){
        console.log(i +" is even")
    }
    else{
        console.log(i + "is odd")
    }
}


//question 6
for(var i=1; i<=100; i++){

    if(i %3==0 && i %5==0){
        console.log(i +"FizzBuzz");
    }
    else if(i %3==0){
        console.log(i +"Fizz")

    }else if(i %5==0){
        console.log(i +"Buzz")

    }
    else{
        console.log(i)
    }
}

//question no7

for(let i =1 ; i<=5; i++){
    let row='';
    for(let j=1; j<=i; j++){
        row +="*"
    }
    console.log(row)
}
