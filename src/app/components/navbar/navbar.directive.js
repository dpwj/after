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
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(moment) {

    }
  }

})();
