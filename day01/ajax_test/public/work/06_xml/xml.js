/*
服务器返回的数据是xml数据
    服务器：
        响应头设置为：res.set('content-type', 'text/xml;charset=utf-8')
    浏览器：
        获得 xml 对象： var doc = req.responseXML;
        原生 js 操作 xml api：
            doc.getElementsByTagName()
                参数：标签名
                返回值：数组
            doc.firstChild.nodeValue
                前端结点的第一个子节点中的值
 */
window.onload = function () {
    // 1. 创建一个xmlhttpRequest对象
    var xmlHttp = createReq();
    // 2. 设置回调监听
    xmlHttp.onreadystatechange = function () {
        if(xmlHttp.readyState === 4 && xmlHttp.status === 200){
            var result = xmlHttp.responseXML;
            console.log(result);
            console.log(typeof result);
            var value = result.getElementsByTagName('province')[1].getElementsByTagName('city')[1].firstChild.nodeValue;
            console.log(value);
        }
    };
    // 3. 打开一个连接
    xmlHttp.open('GET', '/ajax/xml', true);
    // 4. 发请求
    xmlHttp.send();

};


function createReq() {
    var req = null;
    if(window.XMLHttpRequest) {
        req = new XMLHttpRequest();
    } else {
        req = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return req;
}