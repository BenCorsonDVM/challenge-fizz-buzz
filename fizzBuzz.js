// Write your solution below this line:



for(let x = 1; x < 51; x++){
    if((x%3)===0 && (x%5)===0){
        console.log('fizzbuzz')
    } else if((x%5)===0){
        console.log('buzz')
    } else if((x%3)===0){
        console.log('fizz')
    } else {
        console.log(x)
    }
}