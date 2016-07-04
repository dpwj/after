(function() {
  'use strict';

  angular
    .module('after')
    .directive('afNavbar', afNavbar);

  /** @ngInject */
  function afNavbar() {
    var directive = {
      bindToController: true,
      controller: 'NavbarCtrl',
      controllerAs: 'ctrl',
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {}
    };

    return directive;

  }

})();
