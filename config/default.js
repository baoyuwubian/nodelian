/**
 * Created by zx on 2017/2/17.
 */
module.exports={
    port:3000,
    session:{
        secret:'myblog2',
        key:'myblog2',
        maxAge:2592000000
    },
    mongodb:'mongodb://localhost:27017/myblog2'
}
// 配置释义：
//
// port: 程序启动要监听的端口号
// session: express-session 的配置信息，后面介绍
// mongodb: mongodb 的地址，myblog 为 db 名