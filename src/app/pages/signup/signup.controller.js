(function () {
  'use strict';

  angular
    .module('after')
    .controller('SignupController', SignupController);

  /** @ngInject */
  function SignupController() {
    var ctrl = this;

    ctrl.processSignUpForm = processSignUpForm;
    
    activate();

    function activate() {

    }

    function processSignUpForm(form) {
      console.log(form);
      var zipcodeLength = form.zipcode.$modelValue.toString().length;
      console.log(zipcodeLength);
      zipcodeLength > 5 || zipcodeLength < 5? ctrl.zipcodeError = true : ctrl.zipcodeError = false;

    }
  }
})();
