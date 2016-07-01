(function () {
  'use strict';

  angular
    .module('after')
    .factory('AuthService', AuthService);

  /** @ngInject */
  function AuthService($firebaseAuth, $log, $state) {

    return {
      isLoggedIn: isLoggedIn,
      login: login,
      signout: signout,
      signup: signup
    };

    function isLoggedIn() {
      console.log('test');
      firebase.auth().onAuthStateChanged(function (user) {
        if(user){
          console.log(user)
          return user
        } else {
          console.log("not logged in");
          return
        }
      });
    }

    function login(userInfo) {
      $firebaseAuth().$signInWithEmailAndPassword(userInfo.email, userInfo.password)
        .then(function (ref) {
          console.log(ref);
          $state.go('org');
        }).catch(function (error) {
        $log.error("Authentication failed:", error.message);
      });

    }

    function signout() {
      $firebaseAuth.$signout()
    }

    function signup(user) {
      $firebaseAuth().$createUserWithEmailAndPassword(user.email.$modelValue, user.password.$modelValue)
        .then(function (firebaseUser) {
          console.log("User " + firebaseUser.uid + " created successfully!");
          $state.go('org');
        }).catch(function (error) {
        $log.error("Error: ", error.message);
      });
    }

  }
})();
