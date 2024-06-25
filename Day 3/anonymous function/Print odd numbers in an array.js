// Print odd numbers in an array

var oddNum = [];
for(var x=1; x <=20; x++) {
    if(x%2 !==0){
        // console.log(x, "odd Number")
        oddNum.push(x);
    }
}
console.log(oddNum);