/*
 测试Ajax请求返回HTML数据
	服务器端:
		1. response.setContentType("text/html;charset=utf-8")
		2. 输出一个html格式的字符串
	浏览器端js:
		var result = request.responseText;
		document.getElementById("resultDiv").innerHTML = result;
 */
window.onload = function () {
	//失去焦点的时候发送验证请求
	document.getElementById('name').onblur = function () {
		var xmlHttp = createReq();
		xmlHttp.onreadystatechange = function () {
			if(xmlHttp.readyState === 4 && xmlHttp.status === 200){
				var result = xmlHttp.responseText;
				console.log(result); // 0, 1, 2
				// var spanValue = '';
				// if('1' === result){
				// 	spanValue = '<span style="color:red"> 不可用</span>';
				// }else {
				// 	spanValue = '<span style="color:green"> 可用</span>';
				// }
				// document.getElementById('resultSpan').innerHTML = spanValue;
				document.getElementById('resultSpan').innerHTML = result;
			}
		};
		xmlHttp.open('POST', '/ajax/checkname', true);
		xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		//向服务器发消息， 得到文本框的内容
		var value = this.value;

		xmlHttp.send('userName='+value);
	}
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