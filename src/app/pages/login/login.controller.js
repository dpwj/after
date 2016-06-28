(function () {
  'use strict';

  angular
    .module('after')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController(AuthService) {

    var ctrl = this;

    ctrl.login = login;

    function login(form) {
      AuthService.login(form);
    }
  }
})();
