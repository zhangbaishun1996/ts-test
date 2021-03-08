// 定义变量为obj类型
let obj_a :object
obj_a = {}
obj_a = function(){}

// ?表示当前属性可有可无
let obj_b:{name:string,age?:number}
//obj_b = {} 报错  必须写上属性名值的类型必须为string
obj_b = {name:''}
obj_b = {name:"",age:1}

//[propName:string]：any 表示任意字符串类型的属性名 : any 表示任意类型
let obj_c:{name:string,[propName:string]:any}


//
let obj_d:(a:number,b:number)=>number