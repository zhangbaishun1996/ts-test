
// 定义类  
// 包含属性 和方法
class Person {
    // name:string  = 'hello'
    // static XY:string = '你好'
}
// let p1 = new Person()
// console.log(p1.name)
// console.log(Person.XY) // 静态属性通过构造函数进行访问
// 类
class Dog{
    name:string;
    params:string
    constructor(name:string,...params:any){
       this.name = name
       this.params = params
    }
    back(){
        console.log(this)
    }
}
let dog1 = new Dog('小黑','男')
let dog2 = new Dog('小黑','女')
// console.log(dog1.back())
// console.log(dog2.back())

    class Anmo{
        namex:string
        agex:number
        constructor(name:string,age:number){
            this.namex = name
            this.agex = age
        }
        sayHellow(){
            console.log('动物再叫')
        }
    }
    class Bird extends Anmo{
       
    }
    class Cat extends Anmo{
    
    }

    let b1 = new Bird('鹦鹉',1)
    b1.sayHellow()
    let c1 = new Cat('英短',1)
    c1.sayHellow()