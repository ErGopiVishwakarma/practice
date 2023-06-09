// in this question you have given an array which contain 0 1 2 your task is to sort the array in asscending order

let arr = [1, 2, 0, 1, 2, 0, 0, 0, 2, 2, 1, 1, 2]
let n = arr.length

const sort012 = (arr, n) => {
    let low = 0;
    let mid = 0;
    let high = n - 1;
    let temp = 0;
    while (mid <= high) {
        if (arr[mid] == 0) {
            temp = arr[low]
            arr[low] = arr[mid]
            arr[mid] = temp

            low++
            mid++
        }else if(arr[mid] == 1){
            mid++
        }else{
            temp = arr[mid]
            arr[mid] = arr[high]
            arr[high] = temp

            high--
        }
    }
    return arr
}
console.log(sort012(arr,n).join(" "))