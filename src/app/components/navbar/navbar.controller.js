(function () {
    'use strict';

    angular
      .module('after')
      .controller('NavbarCtrl', NavbarCtrl);

    /** @ngInject */
    function NavbarCtrl($scope, AuthService) {
      var ctrl = this;

      ctrl.signOut = signOut;

      activate();

      function activate() {

      }

      function signOut() {
        console.log('test');
        AuthService.signOut()
      }

    }
  })();
