// 定义变量为obj类型
let obj_a :object
obj_a = {}
obj_a = function(){}

// ?表示当前属性可有可无
let obj_b:{name:string,age?:number}
//obj_b = {} 报错  必须写上属性名值的类型必须为string
obj_b = {name:''}
obj_b = {name:"",age:1}

//[propName:string]：any  ---> 表示任意字符串类型的属性名 : any 表示任意类型
let obj_c:{name:string,[propName:string]:any}


// 设置函数的结构类型 语法:(形参:类型,a:number)=>返回值 (形参:类型,a:number,...params:any)=>string
let obj_d:(a:number,b:number,...params:any)=>number
obj_d = function(a:number,b:number,c:number):number{
    return a+b
}

// 语法 // :string[]  定义变量为字符串类型的数组
let obj_f :string[];
obj_f = ['a']

//定义一个数字类型的字符串
let obj_g :Array<number>
obj_g =[1]

// 元祖：固定长度的数组
let obj_h:[string,string]
obj_h = ['0','0']

// enum 枚举 定义枚举
enum Gender{
    Male = 0,
    Female = 1
}
let obj_i:{name:string,gender:Gender}

//使用枚举
obj_i = {name:'1',gender:Gender.Male}

console.log(obj_i.gender===Gender.Male)



// 这样写无意义
let obj_j:string&number

// 表示 obj_k对象必须满足 name::string和age number
let obj_k :{name:string}&{age:number}
obj_k = {name:"1",age:1}

//创建类型别名 myType = string 相当于给string类型取一个别名  这样myType 就相当于string类型
type myType = string
let obj_m:myType
obj_m = 's'

type myOptype = 1|2|3|4|5|6
let obj_n:myOptype
obj_n = 1
obj_n = 2
obj_n = 3
obj_n = 4
obj_n = 5
obj_n = 6
