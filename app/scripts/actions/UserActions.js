var Reflux = require('reflux');
var API = require('util/api');
var HttpFactory = require('util/HttpFactory');

var UserActions = Reflux.createActions({
	  'register' : {children:["success","failed"]},
    'emailRegister' : {children:["success","failed"]},
	  'login' : {children:["success","failed"]},
    'loginWithToken' : {children : ['success','failed']},
	  'logout' : {children:["success"]},
    'openLogin' : {children:["success","failed"]},
    'currentServerUser' : {children:['success','failed']},
    'currentUser' : {children:[]},
    'modifyPassword' : {children:["success","failed"]},
    'receiveTelResetPassWord' : {children:["success","failed"]},
    'receiveMailResetPassWord' : {children:["success","failed"]},
});

/*
 id  string  Y 用户手机或邮箱号码
 password  string  Y 用户密码
 autologin boolean N 是否自动登陆
 autoexpires integer N 自动登陆过期时间，单位（分钟）
 */
UserActions.receiveTelResetPassWord.listen(function(data) {
  HttpFactory.post(API.USER.receiveTelResetPassWord,data,this.success,this.failed);
});


/*
 id  string  Y 用户手机或邮箱号码
 password  string  Y 用户密码
 autologin boolean N 是否自动登陆
 autoexpires integer N 自动登陆过期时间，单位（分钟）
 */
UserActions.receiveMailResetPassWord.listen(function(data) {
  HttpFactory.post(API.USER.receiveMailResetPassWord,data,this.success,this.failed);
});

/*
  id  string  Y 用户手机或邮箱号码
  password  string  Y 用户密码
  autologin boolean N 是否自动登陆
  autoexpires integer N 自动登陆过期时间，单位（分钟）
*/
UserActions.login.listen(function(data) {
  HttpFactory.post(API.USER.login,data,this.success,this.failed);
});

/*
  用Token登录
*/
UserActions.loginWithToken.listen(function(data){
  HttpFactory.post(API.USER.login_with_token,data,this.success,this.failed);
});

/*
  第三方登录
*/

UserActions.openLogin.listen(function(data){
  window.location.href = API.USER.open_login;
});
/*
  得到当前用户
*/
UserActions.currentServerUser.listen(function(data){
  HttpFactory.post(API.USER.current_user,data,this.success,this.failed);
});
/*
  用户注册
  data:｛tel,code,password｝
  {
      Result: true,    //是否通过验证并注册成功
      ErrorCode: 0,    //错误代码
      ErrorMsg: null    //错误信息
  }
*/
UserActions.register.listen(function(data) {
  // $.post(API.user_api.register_url, data).then(this.success, this.failed);
  HttpFactory.post(API.USER.register,data,this.success,this.failed);
});

/*
 邮箱注册
 data:｛email,code,password｝
 {
 Result: true,    //是否通过验证并注册成功
 ErrorCode: 0,    //错误代码
 ErrorMsg: null    //错误信息
 }
 */
UserActions.emailRegister.listen(function(data) {
  HttpFactory.post(API.USER.emailRegister,data,this.success,this.failed);
})
/*
  修改密码
  ##请求data结构
  | 参数 | 类型 | 必填 |说明 |
  | -- | -- | -- |-- |
  | rawPassword | string | Y |用户原始密码 |
  | newPassword | string | Y |用户新密码 |
  返回值：
  {
    ErrorCode: 0, //错误代码
    ErrorMsg: null  //错误信息
    Success:true    //请求是否成功
  }
*/
UserActions.modifyPassword.listen(function(data){
  HttpFactory.post(API.USER.modify_password,data,this.success,this.failed);
});
/*
  用户登出
*/
UserActions.logout.listen(function(data) {
    HttpFactory.post(API.USER.logout,data,this.success,this.failed);
});

module.exports = UserActions;
