(function () {
  'use strict';

  angular
    .module('after')
    .controller('SignupController', SignupController);

  /** @ngInject */
  function SignupController($firebaseArray, $firebaseAuth, $log, $state) {
    var ref  = firebase.database().ref().child('orgs');
    var db   = $firebaseArray(ref);
    var ctrl = this;

    ctrl.processSignUpForm = processSignUpForm;

    activate();

    function activate() {

    }

    function processSignUpForm(form) {
      var zipcodeLength = form.zipcode.$modelValue.toString().length;
      zipcodeLength > 5 || zipcodeLength < 5 ? ctrl.zipcodeError = true : ctrl.zipcodeError = false;
      if (!ctrl.zipcodeError) {

        $firebaseAuth().$createUserWithEmailAndPassword(form.email.$modelValue, form.password.$modelValue)
          .then(function (firebaseUser) {
            console.log("User " + firebaseUser.uid + " created successfully!");
            var ref = firebase.database().ref().child('orgs/'+ firebaseUser.uid);
            ref.set({
              email:      form.email.$modelValue,
              firstName:  form.firstName.$modelValue,
              lastName:   form.lastName.$modelValue,
              orgName:    form.orgName.$modelValue,
              orgAddress: form.address.$modelValue,
              orgZipcode: form.address.$modelValue,
              phone:      form.phone.$modelValue,
              userName:   form.userName.$modelValue,
              userId:     firebaseUser.uid,
              mission:    ''
            });
            
            
            
            $state.go('org');
          }).catch(function (error) {
          $log.error("Error: ", error.message);
        });
      }
    }
  }
})();
