// 使用字面量赋值
let zml_a: 10;
// zml_a = 11 设定值后不允许在修改

// 设置zml_b可以允许两个值
let zml_b :'mail'|"feamil"

//设置zml_c可以是布尔也可以是字符串
let zml_c:boolean|string

//定义任意类型的值 相当于关闭了ts的类型检测
let zml_d:any
zml_d = 10;
zml_d = '10';
zml_d = true;

//当不指定字面量类型时 ts会自动判定改变量为any类型
let zml_e;

// unknow 设定变量为未知类型
//能用unknow 尽量不要用any
let zml_f : unknown

//unknown类型的变量禁止赋值给已定义的变量类型
//unknown实际上就是一个类型安全的any
let zml_i :number
// zml_i = zml_f  报错

zml_f = 10
if(typeof zml_f === 'number'){
    zml_i = zml_f
}

//类型断言 as
zml_i = zml_f as number
//写法二
zml_i = <number>zml_f

//void 表示空  以函数为例 表示没有返回值的函数
function zmlfn():void{

}

//never表示永远不会返回结果  如程序报错就可以设置never类型
function zmlFn1():never{
    throw new  Error('错误')
}