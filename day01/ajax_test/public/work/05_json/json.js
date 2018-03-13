/*
服务器返回的数据是json数据
 */
window.onload = function () {
    // 1. 创建一个xmlhttpRequest对象
    var xmlHttp = createReq();
    // 2. 设置回调监听
    xmlHttp.onreadystatechange = function () {
        if(xmlHttp.readyState === 4 && xmlHttp.status === 200){
            var result = xmlHttp.responseText;
            console.log(result);
            console.log(typeof result);
            var resultObj = JSON.parse(result);
            var dalian = resultObj[1].citys[1];
            console.log(dalian);
        }
    };
    // 3. 打开一个连接
    xmlHttp.open('GET', '/ajax/provinces', true);
    // 4. 发请求
    xmlHttp.send();


};


function createReq() {
    var req = null;
    if(window.XMLHttpRequest) {
        req = new XMLHttpRequest();
    } else {
        req = new new ActiveXObject("Microsoft.XMLHTTP");
    }
    return req;
}