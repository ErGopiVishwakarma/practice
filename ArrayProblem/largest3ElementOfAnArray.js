// here you have given an array and your task to find largest 3 element of the array

let arr = [1,4,2,6,4,8,6,0,9,5,7]
 let first=second=third=-Infinity;
 for(let i=0; i<arr.length; i++){
    if(arr[i]>first){
        third = second;
        second = first;
        first= arr[i]
    }else if(arr[i] > second){
        third = second;
        second = arr[i]
    }else if(arr[i] > third){
        third = arr[i]
    }
 }
 console.log(first, second ,third)