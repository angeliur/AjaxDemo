var str = '{    "name": "张三",    "age": 23,    "id": "001"}';
var arr = '[{"name": "张三","age": 23,"id": "001","type": "组长"},{"name": "张三","age": 23,"id": "001","type": "组长"},{"name": "张三","age": 23,"id": "001","type": "组长"}]';
var arrStr = '{"employees": [{"name": "张三","age": 23,"id": "001","type": "组长"},{"name": "张三","age": 23,"id": "001","type": "组长"},{"name": "张三","age": 23,"id": "001","type": "组长"}] }'
var errStr = 'abc_hello';


//将字符串 转化为 json 对象
var strObj = JSON.parse(str);
var arrObj = JSON.parse(arr);

console.log(typeof strObj);
console.log(typeof arrObj);

console.log(strObj);
console.log(arrObj);
console.log(arrObj[0]);




