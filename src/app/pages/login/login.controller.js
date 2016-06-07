(function () {
  'use strict';

  angular
    .module('after')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController() {
    var ctrl = this;

    ctrl.submitLoginForm = submitLoginForm;

    activate();

    function activate() {

    }

    function submitLoginForm(form) {
      console.log(form);

      ctrl.loginError = false;
    }
  }
})();
