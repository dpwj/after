(function() {
  'use strict';

  angular
    .module('after')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($state) {
    var ctrl = this;

    ctrl.processZipcode = processZipcode;

    function processZipcode(zipcode) {
      var length = zipcode.toString().length;


      if (length < 5 || length > 5) {
        ctrl.error = true;
      } else {
        $state.go('events', {}, 'reload: true');
      }
    }
  }
})();
