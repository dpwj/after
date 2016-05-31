(function() {
  'use strict';

  angular
    .module('after')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($timeout, toastr) {
    var ctrl = this;


    activate();

    function activate() {
    }

  }
})();
