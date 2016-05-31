;(function () {
  'use strict';

  angular
    .module('after')
    .directive('afFooter', afFooter);

  function afFooter() {
    var directive = {
      bindToController: true,

      controller:   'FooterController',
      controllerAs: 'ctrl',

      scope: {},

      templateUrl: 'src/app/components/footer/footer.html'
    };

    return directive;
  }
})();
