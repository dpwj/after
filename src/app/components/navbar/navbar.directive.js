(function() {
  'use strict';

  angular
    .module('after')
    .directive('afNavbar', afNavbar);

  /** @ngInject */
  function afNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {},
      controller: NavbarController,
      controllerAs: 'ctrl',
      bindToController: true
    };

    return directive;

  }

})();
