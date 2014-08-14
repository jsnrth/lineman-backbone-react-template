window.app.router = Backbone.Router.extend({
  routes: {
    "login" : "login",
    "home"  : "home",
    "*path" : "login"
  },

  login: function() {
    React.renderComponent(window.app.components.LoginPage({
      AuthenticationService: window.app.services.AuthenticationService
    }), this.mountNode());
  },

  home:  function() {
    React.renderComponent(window.app.components.HomePage({
      AuthenticationService: window.app.services.AuthenticationService
    }), this.mountNode());
  },

  mountNode: function(){
    return document.getElementById('view');
  }
});

$(function() {
  window.router = new window.app.router();
  Backbone.history.start();
});
