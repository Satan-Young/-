let qs = Qs;
let baseURL = 'http://47.101.184.44:7788';
//1.提供登录方法，提供获取token方法
// 登录页面
// api 与后台接口对接层次
// 业务逻辑层 前端业务逻辑
// 视图层  页面数据变化，页面样式变化
function login (user) {
  myAjax.postJSON(baseURL + '/user/login', user, (res) => {
    //保存到sessionStorage中
    sessionStorage.setItem('token', JSON.parse(res).data.token);
  }, (error) => {
    console.log(error);
  });
}
//2.myAjax对象，对象里有get方法，postForm方法，postJSON方法

let myAjax = {
  get (url, params, success, error) {
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
  postForm (url, params, success, error) {
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
  postJSON (url, params, success, error) {
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
  }
};