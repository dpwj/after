(function() {
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
      console.log('Navbar controller');

      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          ctrl.loggedIn = true;
        } else {
          ctrl.loggedIn = false;
          signOut();
        }
      });

    }

    function signOut() {
      AuthService.signOut()
    }

  }
})();
