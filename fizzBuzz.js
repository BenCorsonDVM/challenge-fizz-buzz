// Write your solution below this line:

for(let x = 1; x < 51; x++){
    if((x%3)===0 && (x%5)===0){ //divisible by 3 and 5
        console.log('fizzbuzz')
    } else if((x%5)===0){ //divisible by 5
        console.log('buzz')
    } else if((x%3)===0){ //divisible by 3
        console.log('fizz')
    } else {
        console.log(x)
    }
}