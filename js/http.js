let qs = Qs;
let baseURL = 'http://139.224.81.104:7788';
//1.提供登录方法，提供获取token方法
// 登录页面
// api 与后台接口对接层次
// 业务逻辑层 前端业务逻辑
// 视图层  页面数据变化，页面样式变化

//2.myAjax对象，对象里有get方法，postForm方法，postJSON方法
let myAjax = {
    //get无参
    get(url, success, error) {
        $.ajax({
            url: baseURL + url,
            method: 'get',
            headers: {
                'Authorization': sessionStorage.getItem('token')
            },
            success,
            error
        });
    },
    //get  参数为字符串
    getData: function(url, params, success, error) {
        $.ajax({
            url: baseURL + url,
            method: 'get',
            data: qs.stringify(params),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf8',
                'Authorization': sessionStorage.getItem('token')
            },
            success,
            error
        });
    },
    // getById: function(url, params, success, error) {
    //     $.ajax({
    //         url: baseURL + url + '?id=' + params,
    //         method: 'get',
    //         headers: {
    //             'Authorization': sessionStorage.getItem('token')
    //         },
    //         success,
    //         error
    //     });
    // },
    //通过id删除专用接口
    delete(url, params, success, error) {
        $.get({
            url: baseURL + url + '?id=' + params,
            headers: {
                'Authorization': sessionStorage.getItem('token')
            },
            success,
            error
        });
    },
    postForm(url, params, success, error) {
        $.ajax({
            url: baseURL + url,
            method: 'post',
            data: qs.stringify(params),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf8',
                'Authorization': sessionStorage.getItem('token')
            },
            success,
            error
        })
    },
    postJSON(url, params, success, error) {
        $.ajax({
            url: baseURL + url,
            method: 'post',
            data: JSON.stringify(params),
            headers: {
                'Content-Type': 'application/json;charset=utf8',
                'Authorization': sessionStorage.getItem('token')
            },
            success,
            error
        })
    },
    //登录 post 带参JSON字符串
    //成功-进入系统内页  失败-验证失败无法登陆
    login(user, success, error) {
        $.post({

            url: baseURL + '/user/login',
            data: JSON.stringify(user),
            contentType: "application/json;charset=utf8",
            success,
            error
        })
    }
};