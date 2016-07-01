(function () {
  'use strict';

  angular
    .module('after')
    .controller('SignupController', SignupController);

  /** @ngInject */
  function SignupController($firebaseArray, $firebaseObject, AuthService) {
    var ref  = firebase.database().ref().child('orgs');
    var db   = $firebaseArray(ref);
    var ctrl = this;

    ctrl.processSignUpForm = processSignUpForm;

    activate();

    function activate() {

    }

    function processSignUpForm(form) {
      console.log(form);
      var zipcodeLength = form.zipcode.$modelValue.toString().length;
      zipcodeLength > 5 || zipcodeLength < 5 ? ctrl.zipcodeError = true : ctrl.zipcodeError = false;
      if (!ctrl.zipcodeError) {

        db.$add({
          email:      form.email.$modelValue,
          firstName:  form.firstName.$modelValue,
          lastName:   form.lastName.$modelValue,
          orgName:    form.orgName.$modelValue,
          orgAddress: form.address.$modelValue,
          orgZipcode: form.address.$modelValue,
          phone:      form.phone.$modelValue,
          userName:   form.userName.$modelValue,
          mission: ''

        }).then(function (ref) {
          console.log('ref: ', ref);
          AuthService.signup(form);
          var id = ref.key;
          console.log("added record with id " + id);
          console.log(db.$indexFor(id)); // returns location in the array
          db.$indexFor(id)
        });
      }

    }
  }
})();
