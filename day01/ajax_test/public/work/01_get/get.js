/*
 测试get类型的Ajax请求
 1. 创建一个xmlhttpRequest对象
 2. 设置回调监听
 3. 打开一个连接
 接受两个参数：1. httpMethod   2. httpUrl
 4. 发请求
 参数：无参
 */


window.onload = function () {
    document.getElementById('getBtn').onclick = function () {
        // 1. 创建一个xmlhttpRequest对象
        var xhr = createXhr();
        // 2. 设置回调监听
        xhr.onreadystatechange = function () {
            // 0 (未初始化) 对象已建立，但是尚未初始化（尚未调用open方法）
            // 1 (初始化) 对象已建立，尚未调用send方法
            // 2 (发送数据) send方法已调用，但是当前的状态及http头未知
            // 3 (数据传送中) 已接收部分数据，因为响应及http头不全，这时通过responseBody和responseText获取部分数据会出现错误，
            // 4 (完成) 数据接收完毕,此时可以通过通过responseBody和responseText获取完整的回应数据
            if (xhr.readyState === 3){
                console.log('3');
            }

            if (xhr.readyState === 4 && xhr.status === 200){
                document.getElementById('result').innerHTML = xhr.responseText;
            }
        }
        // 3. 打开一个连接
        xhr.open('GET','/ajax/test?username="hhh"',true);
        // 4. 发请求
        xhr.send();
    }

    
}

function createXhr() {
    var xhr;
    if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
        xhr = new XMLHttpRequest();
    }else {// code for IE6, IE5
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xhr;
}