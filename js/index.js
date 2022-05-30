$(function () {
  $('body>nav').on('click', '.list>ul ul>li', function (e) {
    let text = $(this).text();
    text = text.trim().split(' ')[0].trim();
    e.stopPropagation();
    if (text === "用户管理") {
      $('.content .containers').load('./pages/userManage.html');
      return;
    }
    if (text === "权限管理") {
      $('.content .containers').load('./pages/privilegeManage.html');
      return;
    }
    if (text === "角色管理") {
      $('.content .containers').load('./pages/roleManage.html');
      return;
    }
  })
  $('body>nav').on('click', '.list>ul>li', function (e) {
    let text = $(this).text();
    text = text.trim().split(' ')[0].trim();
    if (text === "系统首页") {
      $('.content .containers').load('./pages/home.html');
      return;
    }
    if (text === "角色权限") {
      $('.content .containers').load('./pages/userManage.html');
      if ($('.childul').hasClass("animate__fadeInDown")) {
        $('.childul').removeClass('animate__fadeInDown');
        $('.childul').addClass('animate__fadeOutUp');
        $('.childul').css('display', 'none');
        $('.more i').removeClass('fa-angle-up');
        $('.more i').addClass('fa-angle-down');
      } else {
        $('.childul').removeClass('animate__fadeOutUp');
        $('.childul').addClass('animate__fadeInDown');
        $('.childul').css('display', 'block');
        $('.more i').removeClass('fa-angle-down');
        $('.more i').addClass('fa-angle-up');
      }
      return;
    }
    if (text === "分类管理") {
      $('.content .containers').load('./pages/categoryManage.html');
      return;
    }
    if (text === "资讯管理") {
      $('.content .containers').load('./pages/articleManage.html');
      return;
    }
    if (text === "评论管理") {
      $('.content .containers').load('./pages/commentManage.html');
      return;
    }
    if (text === "个人信息") {
      $('.content .containers').load('./pages/userInfo.html');
      return;
    }
  })
  // 左侧菜单控制
  $('body>article .menu').click(() => {
    let width = $('body>nav').css("width");
    if (width == "210px") {
      $('body>nav li').addClass('liheight');
      $('body>nav').css("width", "50px");
      $('body>nav img').css("margin-left", "8px");
    } else {
      $('body>nav li').removeClass('liheight');
      $('body>nav').css("width", "210px");
      $('body>nav img').css("margin-left", "42px");
    }
  })

  // 模拟触发
  $('.list>ul>li:first').trigger('click');
})