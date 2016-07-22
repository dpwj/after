(function () {
  'use strict';

  angular
    .module('after')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($firebaseAuth, $state, AuthService) {

    var ctrl = this;

    ctrl.login = login;

    function login(form) {
      $firebaseAuth().$signInWithEmailAndPassword(form.email, form.password)
        .then(function (ref) {
          console.log('ref');
          setCookie(ref.uid);
          $state.go('org');
        }).catch(function (error) {
        console.log('error');
        ctrl.loginError = true
      });
    }


    function setCookie(userId) {
      localStorage.setItem("userId", userId);
    }
  }

})();
