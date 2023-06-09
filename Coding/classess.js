//here some practice about classess in javascript 

//let's create a object using classes which name will be Person and it will take some properties and methods about user.

class Person {
     constructor(name,age){
        this.name = name;
        this.age = age;
     }

     sayHello = ()=>{
       console.log(`my name is ${this.name} and i am ${this.age} year old.`)
       return 5
     }
}

const newObj = new Person('gopi',22)
console.log(newObj)
newObj.hii = 'hum pagal'
console.log(newObj)
