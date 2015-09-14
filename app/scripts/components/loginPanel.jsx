var React = require('react');
var Router = require('react-router');
var Link  = Router.Link;
var Navigation = Router.Navigation;
var Reflux = require('reflux');
var UserStore = require('../stores/UserStore');

var validator = require('validator');
var UserActions = require('../actions/UserActions');
var UserNameInput = require('./user/userNameInput');
var UserPasswordInput = require('./user/userPasswordInput');
var IndexCover = require('./indexCover');

var AlertBox = require('./user/alertBox');
/*
	验证逻辑放到相关的表单组件
	组件间的调用统一在LoginForm中实现
*/


var LoginButton = React.createClass({
	
	render : function(){
		return (
			<div className="form-group">
    			<div className="col-sm-offset-2 col-sm-4">
    				<div className="col-sm-5">
						<button className="btn btn-primary btn-lg" onClick={this.props.handleClick}>登  录</button>
					</div>
					<div className="col-sm-4">
						<Link to="/register"><button className="btn btn-success btn-lg">还没有YAOPAI的账户？</button></Link>
					</div>
				</div>

			</div>
			);
	}
});

var RememberMeCheck = React.createClass({
	render : function(){
		return(
			<div className="form-group">
			    <div className="col-sm-offset-2 col-sm-6">
			      <div className="checkbox">
			        <label>
			          <input type="checkbox" onChange={this.props.checkedChange}/> 记住我的登录信息
			        </label>
			      </div>
			    </div>
			 </div>
			);
	}
});



var LoginForm = React.createClass({
	mixins: [Reflux.listenTo(UserStore, 'handleLoginResult'),Navigation],
	getInitialState : function(){
		return {
			userName : '',
			password : '',
			rememberMe : false,
			alertMessage : ''
		}
	},
	handleClick : function(event){
		if(!validator.isMobilePhone(this.state.userName, 'zh-CN') || !validator.isLength(this.state.password,6,18)) {
			this.setState({alertMessage:'请输入正确的手机号码和密码格式'});
			return;
		}
		var loginData = {userName : this.state.userName,password : this.state.password};
		UserActions.login(loginData);
	},
	handleUserNameChange : function(event){
		this.setState({userName:event.target.value});
	},
	handlePasswordChange : function(event){
		this.setState({password:event.target.value});
	},
	handleCheckedChange : function(event){
		this.setState({rememberMe : event.target.checked});
	},
	handleLoginResult : function(data){
		if(data.isLogin){
			//先转到认证页面
			this.setState({alertMessage:''});
			this.transitionTo('account/pAuth');
		}else{
			this.setState({alertMessage : data.hintMessage});
		}
	},
	getValidatedClass : function(validated){
		var classString = 'form-group'
		switch(validated){
			case '0' :
				break;
			case '1' :
				classString = classString + ' has-success';
				break;
			case '2' :
				classString = classString + ' has-warning';
				break;
		}
		return classString;
	},
	render : function(){
		return(
			<div className="panel-body">
				<form className="form-horizontal">
						<UserNameInput 
							userName = {this.state.userName} 
							handleChange={this.handleUserNameChange} 
							validatedClass={this.getValidatedClass}/>
	        	<UserPasswordInput 
	        		password = {this.state.password} 
	        		handleChange={this.handlePasswordChange} 
	        		validatedClass={this.getValidatedClass}/>
	        	<RememberMeCheck checkedChange = {this.handleCheckedChange} />
	        	<LoginButton handleClick={this.handleClick}/>
	        	<AlertBox alertMessage={this.state.alertMessage} />
				</form>
			</div>
		);
	}
});

var LoginPanel = React.createClass({

  render: function() {

    return (
    	<IndexCover>
	    	<div className="panel panel-default opacity90">
	    		<div className="panel-heading">
	    			登录YAOPAI分享你自己的艺术
	    		</div>
	      		<LoginForm />
	      </div>
      </IndexCover>
    );
  }
});

module.exports = LoginPanel;