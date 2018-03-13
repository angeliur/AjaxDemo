var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function (req, res, next) {
    res.send('hello, this is index page');
});


router.get('/ajax/test', function (req, res, next) {
    var userName = req.query.username;
    var location = req.query.location;
    // res.send(userName + '  ' + location);
    // res.status(404).send(userName + '  ' + location);
    var obj = {
        userName : userName,
        location : location
    };
    res.send( obj );
});

router.post('/ajax/test', function (req, res, next) {
    var value1 = req.body.username;
    var value2 = req.body.location;
    console.log(value1, value2);

    setTimeout(function () {
        res.send('post success   ' + value1 + '    ' + value2);
    }, 2000);
});


router.post('/ajax/checkname', function (req, res, next) {
    var userName = req.body.userName;
    console.log(userName);
    var result = '0'; //初始化特殊值
    //调用数据库查用户名是否存在 wukong 已经在数据空中，其他的都没有
    if('wuKong' === userName){
        //返回不可用
        // result = '1';
        result = '<span style="color:red"> 不可用</span>';

    }else {
        //返回可用
        // result = '2';
        result = '<span style="color:green"> 可用</span>';
    }
    res.send(result);
});

router.get('/ajax/provinces', function (req, res, next) {

    var provinces = [
        {
            "id": "吉林省",
            "citys": [
                "长春",
                "吉林市",
                "四平"
            ]
        },
        {
            "id": "辽宁省",
            "citys": [
                "沈阳",
                "大连",
                "葫芦岛"
            ]
        },
        {
            "id": "山东省",
            "citys": [
                "济南",
                "青岛",
                "烟台"
            ]
        }
    ];
    // JSON.stringify(provinces);

    res.send(provinces);
});

router.get('/ajax/xml', function (req, res, next) {
    // var data =
    var path = '../public/work/06_xml/province.xml';
    fs.readFile(path, function (err, data) {
        if(err){
            console.error(err)
        }else {
            console.log(data);
            console.log(data.toString());
            res.set('content-type', 'text/xml;charset=utf-8');
            res.send(data.toString());


        }
    });
});












module.exports = router;





