// -2 1 -3 4 -1 2 1 -5 4

let arr = [-2, 1 ,-3 ,4 ,-1 ,2 ,1 ,-5, 4]

const sumOfSubArray = (arr,n) =>{
    let ans = arr[0]
    let sum = 0

    for(let i=0; i<n; i++){
        sum += arr[i]

        ans = Math.max(ans,sum)

        if(sum < 0){
            sum = 0
        }
    }
    return ans
}

console.log(sumOfSubArray(arr,arr.length))