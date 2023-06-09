//find the missing number of an array

let arr = [1,3]
let n = arr.length

function missingNo(a,n){
     let total=1; 
    
    for (let i = 2; i<n+1; i++)
    {
        total += i;
        total -= a[i-2];
    }
    return total;
}

console.log(missingNo(arr,n))