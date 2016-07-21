(function () {
  'use strict';

  angular
    .module('after')
    .factory('AuthService', AuthService);

  /** @ngInject */
  function AuthService($firebaseAuth, $log, $state) {

    return {
      isLoggedIn: isLoggedIn,
      login:      login,
      setCookie:  setCookie,
      signOut:    signOut,
      signup:     signup
    };

    function isLoggedIn() {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          return user;
        } else {
          console.log("not logged in");
          signOut();
        }
      });
    }

    function login(userInfo) {
      $firebaseAuth().$signInWithEmailAndPassword(userInfo.email, userInfo.password)
        .then(function (ref) {
          setCookie(ref.uid);
          $state.go('org');
          return ref;
        }).catch(function (error) {
        $log.error("Authentication failed:", error.message);
      });

    }

    function signOut() {
      $firebaseAuth().$signOut();
      localStorage.removeItem('userId');
      $state.go('home')
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

    function setCookie(userId) {
      console.log(userId);
      localStorage.setItem("userId", userId);
    }

  }
})();
