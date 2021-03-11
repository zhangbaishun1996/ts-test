// 引入模块包
const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//webpack 配置信息
module.exports = {
    //入口文件
    entry:"./src/index.ts",
    mode: 'development' ,
    output:{
        // 指定输出文件打包的位置
        path:path.resolve(__dirname,'dist'),
        filename:"bundel.js",
        // 配置打包环境
        environment:{
            // 告诉webpack不使用箭头函数
            arrowFunction:false
        }
    },
    //webpack 打包时使用的文件
    module:{
        // 指定加载的规则
        rules:[
            {   
                //test 指定规则生效的文件
                test:/\.ts$/,
                // 需要使用的loader
                use:[
                    { // 配置babel
                    loader:"babel-loader", //配置加载器
                    //设置babel
                    options:{
                        //设置预设环境
                        presets:[
                            // 指定环境插件
                            [
                                "@babel/preset-env",
                                //配置信息
                               {
                                   //指定浏览器版本
                                   targets: {
                                       "chrome":"58",
                                       "ie":"11"
                                   },
                                   // 指定corejs版本
                                   "corejs":"3",
                                   //使用corejs的方式
                                   "useBuiltIns":"usage" // usage按需加载
                               }
                            ]
                        ]
                    }


                },
                "ts-loader"], //加载器从后往前执行
                // 排除文件
                exclude:/node_modules/
            }
        ]

    },
    // 配置webpack插件
    plugins:[
        //自动生产html文件
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            // title:"自定义title"
            template:"./src/index.html"
        }),
    ],
    //设置引用模块
    resolve:{
        extensions:['.ts','.js']
    }
}