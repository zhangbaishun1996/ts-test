//声明一个变量 指定他的类型为number
let a:number;
//a为数字类型！ 在以后的使用过程中，a的值只能是数字
a = 1
// if a = 'string' 则该代码会报错 
console.log(a)

//指定为string类型
let b:string;
b = '123'
//指定为布尔类型
let c:boolean;
c = false

// 如果变量的声明和赋值是同时进行的 TS会自动对类型进行检测
let d = false 

// 当使用ts指定函数入参时 参数类型不正确会报错
// 指定返回值得类型
function sun(a:number,b:number):number{
    return a+b
}
// console.log(sun(300,'200')) 报错代码
console.log(sun(300,200))